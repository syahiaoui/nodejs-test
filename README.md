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
## Example
Filter data using this pattern `nakes` and count children:
`node app.js -f=nakes -c`
* Result:
```json

[{"name":"Dillauti [1]","people":[{"name":"Blanche Viciani [1]","animals":[{"name":"Snakes"}]}]},{"name":"Uzuzozne [1]","people":[{"name":"Lillian Calamandrei [1]","animals":[{"name":"Snakes"}]}]},{"name":"Satanwi [2]","people":[{"name":"Elmer Kinoshita [1]","animals":[{"name":"Snakes"}]},{"name":"Cora Howell [1]","animals":[{"name":"Snakes"}]}]}]
 ```




## Context
The job is to write a command-line interface in Node.js. 
This program has to filter a list of elements containing a pattern.

In the following file `data.js`, there are `Countries` containing `Peoples` containing `Animals`.

Sample of running the command and the expected output:

```bash
# Only animals containing `ry` are displayed. The order should be kept intact

$ node app.js --filter=ry
[
   { name: 'Satanwi',
     people:
      [ { name: 'Elmer Kinoshita',
          animals:
           [ { name: 'Wrysel' },
        { name: 'Cora Howell',
          animals:
           [ { name: 'Rrya' },
             { name: 'Pronryorn' } ] },
        { name: 'Anthony Bruno',
          animals:
           [ { name: 'Caryxcal' },
             { name: 'Tryantula' },
             { name: 'Oryx' } ] } ] } ]
...
]
```

`Bonus:`
As a bonus point, the next goal is to count People and Animals by adding the count of children in the name, eg. Satanwi [2].

Example:
```bash
node app.js --count
[
  { name: 'Satanwi [1]',
     people:
      [ { name: 'Elmer Kinoshita [1]',
          animals:
           [ { name: 'Wrysel' },
        { name: 'Cora Howell [2]',
          animals:
           [ { name: 'Rrya' },
             { name: 'Pronryorn' } ] },
        { name: 'Anthony Bruno [3]',
          animals:
           [ { name: 'Caryxcal' },
             { name: 'Tryantula' },
             { name: 'Oryx' } ] } ] } ]
...
]
```

## Requirements
- The code must be available in a GIT repository
- No library/modules should be used, except for the testing library

## Appreciation
- Code readability, structure and consistency
- Tests, how they are written
- Bonus: usage of Functional concepts
