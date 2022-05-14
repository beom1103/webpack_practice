const path = require("path");

module.exports = {
  //개발 모드
  mode: "development",
  //경로 설정
  entry: {
    main: "./src/app.js",
  },
  output: {
    path: path.resolve("./dist"),
    // [name] 안에 entrt에서 설정한 main이 인자로 들어가 build시 mail.js 생성
    // 결국 main의 경로인 app.js와 연결된 모든 파일들이 하나로 합쳐지게 된다.
    filename: "[name].js",
  },
  module: {
    // 정규 표현식으로 css 파일 설정 후 , style-loader와 css-loader 설정
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      // 이미지 파일 설정
      {
        test: /\.png$/,
        loader: "file-loader",
        // 퍼블릭 경로를 dist로 설정해 상대경로로 입력
        options: {
          publicPath: "../dist",
        },
      },
    ],
  },
};
