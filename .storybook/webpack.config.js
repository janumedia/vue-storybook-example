const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
    defaultConfig.module.rules.push({
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../")
    });
    defaultConfig.resolve.alias = {
        ...defaultConfig.resolve.alias,
        "@": path.resolve(__dirname, "../src")
    };
    return defaultConfig;
};