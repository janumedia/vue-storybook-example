const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
    //add addon-storysource
    defaultConfig.module.rules.push({
        test: [/\.stories\.js$/, /index\.js$/],
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        include: [path.resolve(__dirname, '../src')],
        enforce: 'pre',
    });
    // allow SCSS
    defaultConfig.module.rules.push({
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../")
    });
    // setup URL Alias
    defaultConfig.resolve.alias = {
        ...defaultConfig.resolve.alias,
        "@": path.resolve(__dirname, "../src")
    };
    return defaultConfig;
};