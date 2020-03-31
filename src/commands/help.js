'use strict';

exports.mainHelp = () => {
    this.helpfilter();
    this.helpCount();
};

exports.usage = () => {
    console.error(`
usage:
    filter:  -f=[value] --filter=[value]
    count:   -c=[true|false] --count=[true|false]
    ignoreCase:   -i=[true|false] --ignoreCase=[true|false]
    help:    -h  --help`);
};

exports.helpfilter = () => {
    console.log(`
Filter data against pattern
    filter:  -f=[value] --filter=[value]
    Options:
        Ignore case whene appling the data filter
            ignoreCase:  -i=[true|false] --ignoreCase=[true|false]
    Example: --filter=ry or -f=ro // --filter=ry --ignoreCase or -f=ry -i`);
};

exports.helpCount = () => {
    console.log(`
Count People and Animals by adding the count of children in the name
    count:  -c=[true|false] --counter=[true|false]
    Example: --counter or -c`);
};