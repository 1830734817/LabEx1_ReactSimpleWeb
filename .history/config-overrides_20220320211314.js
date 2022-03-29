//配置具体的修改郭泽
 const { override, fixBabelImports，addLessLoader  } = require('customize-cra');


 module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: 'css',
   }),
 );