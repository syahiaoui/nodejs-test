# Command-line interface in Node.js

# Require node 12 or higher

# Usage 
 * Install modules (jest for test): `npm install`
 * Run tests: `npm test`
 * Run coverage: `npm run coverage`
 * Command-line options: `node app.js --help` 
 ```bash
    Filter data against pattern
        filter:  -f=[value] --filter=[value]
        Options:
            Ignore case whene appling the data filter
                ignoreCase:  -i=[true|false] --ignoreCase=[true|false]
        Example: --filter=ry or -f=ro // --filter=ry --ignoreCase or -f=ry -i

    Count People and Animals by adding the count of children in the name
        count:  -c=[true|false] --counter=[true|false]
        Example: --counter or -c
  ```
  * You can passe input data as environnement variable:
  ```bash
  export INPUT_DATA=absolutePathToTheDataFile
  //or
  set INPUT_DATA=absolutePathToTheDataFile
  //or whene starting the application
  INPUT_DATA=absolutePathToTheDataFile node app.js --filter=nakes
  ```
  Example: `INPUT_DATA=/home/developer/work/data.js node app.js --filter=nakes`

## Example
Filter data using this pattern `nakes` and count children:
`node app.js -f=nakes -c`
* Result:
```json

[{"name":"Dillauti [1]","people":[{"name":"Blanche Viciani [1]","animals":[{"name":"Snakes"}]}]},{"name":"Uzuzozne [1]","people":[{"name":"Lillian Calamandrei [1]","animals":[{"name":"Snakes"}]}]},{"name":"Satanwi [2]","people":[{"name":"Elmer Kinoshita [1]","animals":[{"name":"Snakes"}]},{"name":"Cora Howell [1]","animals":[{"name":"Snakes"}]}]}]
 ```

