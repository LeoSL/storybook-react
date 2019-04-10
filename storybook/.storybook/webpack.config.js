const path = require('path');

module.exports = async ({ config, mode }) => {
    config.module.rules.push({
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /.ejs$/,
        query: {
            presets: ['@babel/preset-react']
        }
    });

    return config;
};