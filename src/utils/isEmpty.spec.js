const { isEmpty } = require('./isEmpty');

describe('isEmpty', () => {
    test('should check that value is empty', () => {
        expect(isEmpty(undefined)).toBeTruthy()
        expect(isEmpty(null)).toBeTruthy()
        expect(isEmpty()).toBeTruthy()
        expect(isEmpty('')).toBeTruthy()
        expect(isEmpty('  ')).toBeTruthy()
        expect(isEmpty({})).toBeTruthy()
        expect(isEmpty([])).toBeTruthy()
    });
    test('should check that value is not empty', () => {
        expect(isEmpty(0)).toBeFalsy()
        expect(isEmpty('hey')).toBeFalsy()
        expect(isEmpty({ filter: 'ro' })).toBeFalsy()
        expect(isEmpty([1, 2, 3])).toBeFalsy()
    });
});