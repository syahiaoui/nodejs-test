'use strict';

/**
 * @enum keysMap
 * @readonly
 */
let keysMap = {
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
        return {
            [key.slice(2)]: value || true
        }
    } else if (arg[0] === '-') {
        key = key.slice(1)
        return {
            [keysMap[key] || key.slice(1)]: value || true
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