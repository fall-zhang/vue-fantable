const path = require("path");
console.log(path.resolve(__dirname, "../packages/"))
module.exports = {
  // 发布资源文件引用方式
  publicPath: "./",
  devServer: {
    open: true,
    port: 8771,
  },
  lintOnSave: false,
  transpileDependencies: ["highlight.js"],
  runtimeCompiler: true,
  configureWebpack: (config) => {
    return {
      devtool: "source-map",
      module: {
        rules: [
          {
            test: /\.md$/,
            use: [
              {
                loader: "vue-loader",
                options: {
                  compilerOptions: {
                    preserveWhitespace: false,
                  },
                },
              },
              {
                loader: path.resolve(
                  __dirname,
                  //`./build/md-loader/index.js?v=${new Date().getTime()}` // disable loader cache.
                  `./build/md-loader/index.js`, // disable loader cache.
                ),
              },
            ],
          },
        ],
      },
      resolve: {
        alias: {
          // 需要和组件库 alias 名称一致
          "vue-easytable": path.resolve(__dirname, "../"),
          "@U/": path.resolve(__dirname, "../packages/utils/"),
          "@P/": path.resolve(__dirname, "../packages/"),
          "@/": path.resolve(__dirname, "./src/"),
        },
      },
    };
  },
};
