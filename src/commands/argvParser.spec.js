'use strict';
const { cli } = require('../mock/cli');
//let { data } = require('../../data');


describe('argv parser', () => {
    it('should print help', async done => {
        const { stdout, stderr } = await cli('--help').catch(error => expect(error).toBeUndefined());
        expect(stdout).toEqual(expect.stringMatching(/Filter/));
        expect(stdout).toEqual(expect.stringMatching(/Count/));
        expect(stderr).toBe("");
        done();
    });
    it('should print usage if unknown command is used', async done => {
        const response = await cli('unknown').catch(error => {
            expect(typeof error).toBe('object');
            expect(error.stderr).toEqual(expect.stringMatching(/Unknown/));
            expect(error.stderr).toEqual(expect.stringMatching(/command/));
            expect(error.stdout).toBe('');
            expect(error.cmd).toBe('node app.js unknown');
        });
        expect(response).toBeUndefined()
        done();
    });

    it('should print usage if bad filter are passesd', async done => {
        const response = await cli('---filter=ro ---c').catch(error => {
            expect(typeof error).toBe('object');
            expect(error.stderr).toEqual(expect.stringMatching(/Unknown/));
            expect(error.stderr).toEqual(expect.stringMatching(/command/));
            expect(error.stdout).toBe('');
            expect(error.cmd).toBe('node app.js ---filter=ro ---c');

        });
        expect(response).toBeUndefined();
        done();
    });
});

describe('test', () => {

    // beforeEach(() => {
    //     jest.clearAllMocks();
    //     const { mockedData } = require('../mock/inputData');
    //     data = mockedData
    //     console.log(">>>>>>>>>>>>>>>>>>>>>>><", JSON.stringify(data))
    // });
    beforeEach(() => {
        jest.resetModules();
    });
    it('should print data', async() => {
        const { mockedData } = require('../mock/inputData');
        jest.mock('../../data', () => mockedData)
        const { stdout, stderr } = await cli('--filter=ro').catch(error => expect(error).toBeUndefined());
        //console.log(stdout)
        expect(stderr).toBe("");
    });
})