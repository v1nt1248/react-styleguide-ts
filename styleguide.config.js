// module.exports = {
//   components: 'src/components/**/*.{ts,tsx}',
//   propsParser: require('react-docgen-typescript').parse,
//   webpackConfig: require('./webpack.config.js')
// }

const path = require('path')
const glob = require('glob')

module.exports = {
  title: 'React Style Guide Example',
  components: function () {
    return glob.sync(path.resolve(__dirname, 'src/components/**/*.tsx'))
      .filter(function (module) {
        return /\/[A-Za-z]\w*\.tsx$/.test(module);
      });
  },
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  propsParser: require('react-docgen-typescript').withDefaultConfig().parse
}