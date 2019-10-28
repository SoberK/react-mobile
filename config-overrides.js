const { override, fixBabelImports, addLessLoader, addPostcssPlugins } = require('customize-cra');


module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#1DA57A',
    },
  }),
  addPostcssPlugins([require('postcss-pxtorem')({
    rootValue: 16,
    propList: ['*'],
  })])

);
