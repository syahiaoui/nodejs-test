'use strict';
const { cli } = require('../mock/cli');
const { argsOptions } = require('./argvParser');

describe('argv parser', () => {
    test('should print help', async() => {
        const { stdout, stderr } = await cli('--help').catch(error => expect(error).toBeUndefined());
        expect(stdout).toEqual(expect.stringMatching(/Filter/));
        expect(stdout).toEqual(expect.stringMatching(/Count/));
        expect(stderr).toBe("");
    });
    test('should print usage if unknown command is used', async() => {
        const response = await cli('unknown').catch(error => {
            expect(typeof error).toBe('object');
            expect(error.stderr).toEqual(expect.stringMatching(/Unknown/));
            expect(error.stderr).toEqual(expect.stringMatching(/command/));
            expect(error.stdout).toBe('');
            expect(error.cmd).toBe('node app.js unknown');
        });
        expect(response).toBeUndefined()
    });

    test('should print usage if bad filter are passesd', async() => {
        const response = await cli('---filter=ro ---c').catch(error => {
            expect(typeof error).toBe('object');
            expect(error.stderr).toEqual(expect.stringMatching(/Unknown/));
            expect(error.stderr).toEqual(expect.stringMatching(/command/));
            expect(error.stdout).toBe('');
            expect(error.cmd).toBe('node app.js ---filter=ro ---c');
        });
        expect(response).toBeUndefined();
    });
    test('should print data and preserve order', async() => {
        const { stdout, stderr } = await cli('--filter=akes').catch(error => expect(error).toBeUndefined());
        let jsonData = JSON.parse(stdout);
        expect(stderr).toBe("");
        expect(jsonData).toHaveLength(3);
        expect(jsonData.indexOf(jsonData.find(elm => elm.name === 'Dillauti'))).toEqual(0);
        expect(jsonData.indexOf(jsonData.find(elm => elm.name === 'Uzuzozne'))).toEqual(1);
        expect(jsonData.indexOf(jsonData.find(elm => elm.name === 'Satanwi'))).toEqual(2);
    });
});
describe('argsOptions', () => {
    let expectedResult = { filter: 'nakes', count: true, ignoreCase: true };
    test('should have all available options using short args', () => {
        let argv = ['-f=nakes', '-c', '-i']
        const options = argsOptions(argv);
        expect(Object.keys(options)).toHaveLength(3);
        expect(options).toEqual(expectedResult);
    });
    test('should have all available options using long args', () => {
        let argv = ['--filter=nakes', '--count', '--ignoreCase']
        const options = argsOptions(argv);
        expect(Object.keys(options)).toHaveLength(3);
        expect(options).toEqual(expectedResult);
    });
    test('should have all available options using shot and long args', () => {
        let argv = ['--filter=nakes', '-c', '-i']
        const options = argsOptions(argv);
        expect(Object.keys(options)).toHaveLength(3);
        expect(options).toEqual(expectedResult);
    });
    test('should have all available options and ignore who is not known', () => {
        let argv = ['--filter=nakes', '-c', '-i']
        const options = argsOptions(argv);
        expect(Object.keys(options)).toHaveLength(3);
        expect(options).toEqual(expectedResult);
    });
    test('should have no options if -- or - not respected', () => {
        let argv = ['---filter=nakes', 'c', 'i']
        const options = argsOptions(argv);
        expect(Object.keys(options)).toHaveLength(0);
        expect(options).toEqual({});
    });
    test('should have an empty options if filter not have value (long args)', () => {
        let argv = ['--filter']
        const options = argsOptions(argv);
        expect(Object.keys(options)).toHaveLength(0);
        expect(options).toEqual({});
    });
    test('should have an empty options if filter not have value (short args)', () => {
        let argv = ['-f']
        const options = argsOptions(argv);
        expect(Object.keys(options)).toHaveLength(0);
        expect(options).toEqual({});
    });
    test('should ignore unknown short args)', () => {
        let argv = ['-t']
        const options = argsOptions(argv);
        expect(Object.keys(options)).toHaveLength(0);
        expect(options).toEqual({});
    });
    test('should add true for count and ignoreCase if not provided', () => {
        let argv = ['-i', '--count']
        const options = argsOptions(argv);
        expect(Object.keys(options)).toHaveLength(2);
        expect(options.count).toEqual(true);
        expect(options.ignoreCase).toEqual(true);
    });
});