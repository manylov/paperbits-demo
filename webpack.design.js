const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const websiteTheme = "paperbits";
const editorTheme = "designer";

module.exports = {
    target: "web",
    entry: {
        "editors/scripts/paperbits": ["./src/startup.design.ts"],
        "editors/styles/paperbits": [`./src/themes/${editorTheme}/styles/paperbits.scss`],
        "scripts/theme": ["./src/startup.runtime.ts"],
        "styles/theme": [`./src/themes/${websiteTheme}/styles/styles.design.scss`]
    },
    output: {
        filename: "./[name].js",
        path: path.resolve(__dirname, "./dist/designer")
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: "css-loader", options: { url: false } },
                    { loader: "postcss-loader" },
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.html$/,
                loader: "html-loader?exportAsEs6Default"
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: "url-loader",
                options: {
                    limit: 10000
                }
            },
            {
                test: /\.liquid$/,
                loader: "raw-loader"
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CopyWebpackPlugin([
            { from: `./src/data/demo.json`, to: `./data/demo.json` },
            { from: `./src/themes/${editorTheme}/assets/index.html`, to: "index.html" },
            { from: `./src/themes/${editorTheme}/styles/fonts`, to: "editors/styles/fonts" },
            { from: `./src/themes/${websiteTheme}/assets` }
        ])
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".html", ".scss"]
    }
};