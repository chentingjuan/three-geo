const path = require('path');
const fs = require('fs');

module.exports = {
    onBundle: (webpackConfig) => {
        webpackConfig.externals = {'three': 'THREE'}; // this makes sure `three.module.js` is not pulled on build
        webpackConfig.resolve.modules.push(path.resolve('../../node_modules'));
        webpackConfig.performance = {hints: false};

        const filename = webpackConfig.output.filename;
        webpackConfig.output.filename = filename.replace('no-pkg-name', 'app');
    },
};
