'use strict';
const { isEmpty } = require('../utils/isEmpty');

/**
 * @enum keysMap
 * @readonly
 */
const keysMap = {
    c: "count",
    f: "filter",
    i: "ignoreCase"
};

/**
 * short and log argument parser
 * 
 * @param {String} arg - received argument
 * @returns {object} - commands object options
 */
exports.longAndShortArgsParser = arg => {
    let [key, value] = arg.split('=');
    if (arg.startsWith('--')) {
        if (key.slice(2) === "filter" && isEmpty(value)) return {};
        return {
            [key.slice(2)]: value || true
        }
    } else if (arg[0] === '-') {
        key = key.slice(1)
        if (key === "f" && isEmpty(value)) return {};

        return {
            [keysMap[key] || key]: value || true
        }
    }
};

/**
 * argment line parser
 * 
 * @param {String} argv - received command args
 * @return {Object} - commands object options
 */
exports.argsParser = (argv) =>
    argv
    .reduce((args, arg) => ({
        ...args,
        ...(this.longAndShortArgsParser(arg))
    }), {});

/**
 * get args options by allowed keys @alias keysMap
 * 
 * @param {String} argv - received command args
 * @return {Object} - filtred options
 */
exports.argsOptions = (argv) =>
    Object.fromEntries(Object.entries(this.argsParser(argv))
        .filter(
            ([key]) => Object.values(keysMap).includes(key)
        ));