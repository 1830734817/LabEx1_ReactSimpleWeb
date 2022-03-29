//配置具体的修改规则
//改antd
//  const { override, fixBabelImports,addLessLoader  } = require('customize-cra');


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
//改mobx中的es7装饰语法
 const path = require('path') 
 const { override, addDecoratorsLegacy } = require('customize-cra')
  function resolve(dir) {
     return path.join(__dirname, dir) 
    }
  const customize = () => (config, env) => { config.resolve.alias['@'] = resolve('src')
   if (env === 'production') {
      config.externals = { 
        'react': 'React', 'react-dom': 'ReactDOM' 
      } }
      return config 
    };
    module.exports = override(addDecoratorsLegacy(), customize())