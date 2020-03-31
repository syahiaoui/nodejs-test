'use strict';

const path = require('path');
const util = require('util');

const exec = util.promisify(require('child_process').exec);
const CWD = path.join(__dirname, '../..');

/**
 * @param {String} args - received argument
 */
exports.cli = async(args) => {
    return exec(`node app.js ${args}`, { cwd: CWD });
};