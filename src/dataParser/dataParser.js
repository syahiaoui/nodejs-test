'use strict';
const { isEmpty } = require('../utils/isEmpty');

/**
 * Update object node, optional add the count of childern in the name
 * 
 * @param {Array} accumulator - The accumulator accumulates callback's return values.
 * @param {Object} currentValue - The current element being processed in the array.
 * @param {String} nodeToUpdate - Object node that will be updated.
 * @param {Array} filteredArray - Filtred array.
 * @param {Boolean} count - flag to count People and Animals by adding the count of children in the name.
 * @returns {Array} - accumulator value
 */
exports.updateNodeAndPush = (accumulator, currentValue, nodeToUpdate, filteredArray, count) => {
    if (count) currentValue.name = `${currentValue.name} [${filteredArray.length}]`;
    if (filteredArray.length > 0) {
        currentValue[nodeToUpdate] = filteredArray;
        accumulator.push(currentValue);
    }
    return accumulator;
};

/**
 * Check if string includes a pattern with option to ignore case
 * 
 * @param {Array} animals - animals data
 * @param {Object} options - input options
 * @returns {Array} - filtred animals
 */
exports.filtredAnimals = (animals, options) => {
    let { filter, ignoreCase } = options;
    return animals.filter(animal => ignoreCase === true ?
        new RegExp(filter, "i").test(animal.name) : animal.name.includes(filter));
}

/**
 * If the patten option is present then will filter animals array using this pattern
 * 
 * @param {Array} people - people data 
 * @param {Object} options - input options
 * @returns {Function(): Array} @alias updateNodeAndPush 
 */
exports.filteredPepoles = (people, options) => {
    return people.reduce((animals, currentValue) => {
        let filtered = isEmpty(options.filter) ? currentValue.animals : this.filtredAnimals(currentValue.animals, options);
        return this.updateNodeAndPush(animals, currentValue, "animals", filtered, options.count);
    }, []);
};

/**
 * Filter/update countries 
 * 
 * @param {Object} data - input data
 * @param {Object} options - input options
 * @returns {Function(): Array} @alias updateNodeAndPush 
 */
exports.filtredCountries = (data, options) => {
    return data.reduce((countries, currentValue) => {
        let filtered = this.filteredPepoles(currentValue.people, options);
        return this.updateNodeAndPush(countries, currentValue, "people", filtered, options.count);
    }, []);
}