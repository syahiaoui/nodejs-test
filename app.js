'use strict';
//const { data } = require('./data');
const { isEmpty } = require('./src/utils/isEmpty');
const { mainHelp, usage } = require('./src/commands/help')
const { argsOptions } = require('./src/commands/argvParser');
const { filtredCountries } = require('./src/dataParser/dataParser');

const main = () => {
    //check Node.js version
    if (Number.parseInt(process.versions.node) < 12) return console.error(`This application require Node.js '12' or higher`)
    let argv = process.argv.slice(2)
    if (argv[0] === '--help' || argv[0] === '-h') return mainHelp(argv)
    const options = argsOptions(argv);
    if (!isEmpty(options)) {
        let data = isEmpty(process.env.INPUT_DATA) ? require('./data').data : require(process.env.INPUT_DATA).data;
        if (isEmpty(data)) return console.error(`Input data must not be empty`);
        let filtredData = filtredCountries(data, options);
        console.log(JSON.stringify(filtredData))
        return;
    }
    console.error(`Unknown command`);
    usage()
    process.exit(2);
}
main();