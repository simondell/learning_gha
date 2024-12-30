/**
 * A Node.js script that outputs a set of strings to use as a matrix strategy
 * The actual data is arbitrary. The format of the data will change with different commits of this script
 *  whilst I learn about how to manipulate matrices
 */

const fs = require('fs');
const path = require('path');

const OUTPUT_NAME = 'matrix';

const getMatrixItems = () => {
    const items = [
        'item one',
        'item two',
        'item three',
        'item four',
        'item five',
    ];

    // return Object.keys(packageJson.scripts)
    //     .filter((script) => script.includes('build:player'))
    //     .filter((script) => 
    //         !script.includes('watch') &&
    //         !script.includes('e2e') &&
    //         !script.includes('alib'))
    //     .map(build => ({ build, target: getTargetName(build)}))
    //     ;
    return items
};

const items = getMatrixItems();

fs.writeFileSync(process.env.GITHUB_OUTPUT, `${OUTPUT_NAME}=${JSON.stringify(items)}`);
