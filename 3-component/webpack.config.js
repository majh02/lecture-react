const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/main.js",
  },
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./"), // contentBase 대신 static 사용
    },
    port: 8080, // 원하는 포트를 지정
    open: true, // 개발 서버 시작 시 브라우저 열기
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i, // CSS 파일 처리
        use: [
          "style-loader", // CSS를 DOM에 삽입
          "css-loader",   // CSS 파일을 JS로 로드
          "postcss-loader", // PostCSS 처리
        ],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
