// let entryFiles = []
// const pluginFolder = './plugins';
// const fs = require('fs');

// fs.readdir(pluginFolder, (err, files) => {
//   files.forEach(file => {
//     entryFiles.push({"traces":file})
//   });
// });
// module.exports = {
//     entry:{
//          ...entryFiles
//     },
//     output: {
//         path: path.join(__dirname, 'lib'),
//         filename: '[name]/lib/[name].js', // Hacky way to force webpack   to have multiple output folders vs multiple files per one path
//     },
//     module: {
//       rules: [
//         {
//           test: /\.(js|jsx)$/,
//           exclude: /node_modules/,
//           use: {
//             loader: "babel-loader"
//           }
//         }
//       ]
//     }
//   };

var config = {
    // TODO: Add common Configuration
    module: {},
};

const pluginConfig = require("./pluginConfig.json")

let webpackPluginConfigs = pluginConfig.plugins.map((conf)=> Object.assign({},config,{
    name: conf.name,
    entry: conf.path,
    output: {
       path: __dirname + '/lib',
       filename: `${conf.name}.js`
    },
    module: {
        rules:[{
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
 }
))

module.exports = [...webpackPluginConfigs]













