//配置具体的修改郭泽
 const { override, fixBabelImports,addLessLoader  } = require('customize-cra');


//  module.exports = override(
//    fixBabelImports('import', {
//      libraryName: 'antd',
//      libraryDirectory: 'es',
//      style: true,
//    }),
//    addLessLoader({
//       lessOptions:{
//         javascriptEnabled: true,
//         modifyVars: { '@primary-color': 'orange' },
//       }
//     }),
//  );

module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                strictMath: true,
              },
            },
          },
        ],
      },
    ],
  },
};