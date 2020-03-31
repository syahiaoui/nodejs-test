let { filtredAnimals, filteredPepoles, filtredCountries, } = require('./dataParser');
const { peoples, expectedResult } = require('../mock/peoples');
const {
    data2,
    expectedResultForROFilter,
    expectedResultForROFilterAndCount
} = require('../mock/inputData');

let filtedIdx1 = [{ name: 'Brown Bear' }];

describe('dataParser', () => {

    describe('filtredAnimals', () => {
        const data = [{ name: 'Bearded Dragon' },
            { name: 'Peafowl' },
            { name: 'Aardvark' },
            { name: 'Cows' },
            { name: 'Crane Fly' },
            { name: 'Rock Hyrax' },
            { name: 'Gerbils' },
            { name: 'Brown Bear' }
        ];
        test('should filter data using pattern', () => {
            let options = { filter: "ro" }
            let filtred = filtredAnimals(data, options)
            expect(filtred).toHaveLength(1);
            expect(filtred).toEqual(
                expect.arrayContaining(filtedIdx1)
            );
        });
        test('should filter data using pattern with case sensitive', () => {
            let options = { filter: "ro", ignoreCase: true }
            let filtred = filtredAnimals(data, options)
            expect(filtred).toHaveLength(2);
            expect(filtred).toEqual(
                expect.arrayContaining([{ name: 'Brown Bear' }, { name: 'Rock Hyrax' }])
            );
        });
    });

    describe('filtredPeoples', () => {
        test('filtredPeoples with out options', () => {
            let options = {};
            let filtred = filteredPepoles(peoples, options);
            expect(filtred).toHaveLength(3);
            expect(filtred).toEqual(peoples);
        });
        test('should filter people using filter and ignoreCase options', () => {
            let options = { filter: "sn", ignoreCase: true };
            let filtred = filteredPepoles(peoples, options);
            expect(filtred).toHaveLength(1);
            expect(filtred).toEqual([{ "name": "Lillian Calamandrei", "animals": [{ "name": "Snakes" }] }]);
        });
        test('should filter people using filter and ignoreCase options', () => {
            let options = { filter: "sn", ignoreCase: false };
            let filtred = filteredPepoles(peoples, options);
            expect(filtred).toHaveLength(0);
            expect(filtred).toEqual([]);
        });
        test('should filter people using filter options', () => {
            let options = { filter: "ro" }
            let filtred = filteredPepoles(peoples, options)
            let [_, animal1] = filtred
            expect(filtred).toHaveLength(2);
            expect(filtred).toEqual(
                expect.arrayContaining(expectedResult)
            );
            expect(animal1.animals).toHaveLength(1);
            expect(animal1.animals).toEqual(
                expect.arrayContaining(filtedIdx1)
            );
            expect(filtred).toEqual(
                expect.arrayContaining([
                    expect.not.objectContaining({
                        name: 'Lillian Calamandrei',
                    })
                ])
            )
        });
    });

    describe('filtredCountries', () => {
        test('should filter countries using filter options', () => {
            let options = { filter: 'ro' };
            let filtred = filtredCountries(data2, options);
            expect(filtred).toHaveLength(1);
            expect(filtred).toEqual(
                expect.arrayContaining(expectedResultForROFilter)
            );
        });
        test('should filter countries using filter and count options', () => {
            let options = { filter: 'ro', count: true };
            let filtred = filtredCountries(data2, options);
            expect(filtred).toHaveLength(1);
            expect(filtred).toMatchObject(expectedResultForROFilterAndCount);
            expect(filtred).toHaveProperty([0, 'name'], "Dillauti [2]");
            expect(filtred[0].people).toHaveLength(2);
        });
    });
});


describe('sssssssssssss', () => {
    test('greetWorld calls the greeting function properly', () => {
        const greetImplementation = name => `Hey, ${name}!`;
        const mockFn = jest.fn(greetImplementation);
        const value = greetWorld(mockFn);
        expect(mockFn).toHaveBeenCalled();
        expect(mockFn).toHaveBeenCalledWith('world');
        expect(value).toBe('Hey, world!');
        // const greetImplementation = (accumulator, currentValue, nodeToUpdate, filteredArray, count) => peoples;
        // const mockFn = jest.fn(greetImplementation);
        // console.log(JSON.stringify(greetImplementation))
        // const value = filteredPepoles(greetImplementation)
    });
});

function greetWorld(greettingFn) {
    return greettingFn('world');
}