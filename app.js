'use strict';
const { data } = require('./data');
const { isEmpty } = require('./src/utils/isEmpty');
const { mainHelp, usage } = require('./src/commands/help')
const { argsOptions } = require('./src/commands/argvParser');



const main = () => {
    let argv = process.argv.slice(2)
    if (argv[0] === '--help' || argv[0] === '-h') return mainHelp(argv)
    const options = argsOptions(argv);
    console.log(options);
    if (!isEmpty(options)) {
        console.log(data)
        return;
    } else {
        console.error('Unknown command');
        usage()
        process.exit(2);
    }

}
main();