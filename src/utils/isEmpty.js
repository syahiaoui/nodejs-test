'use strict';
exports.isEmpty = (val) => {
    let typeOfVal = typeof val;
    switch (typeOfVal) {
        case 'object':
            if (JSON.stringify(val) === '{}' || JSON.stringify(val) === '[]') {
                return true;
            } else if (!val) {
                return true;
            }
            return false;
        case 'string':
            if (!val.trim()) {
                return true;
            }
            return false;
        case 'undefined':
            return true;
        default:
            return false;
    }
};