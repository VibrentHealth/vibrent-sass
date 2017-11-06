
import webpack from 'webpack';
import path from 'path';
import WebpackConfig from 'webpack-config';
import  ngAnnotatePlugin from 'ng-annotate-webpack-plugin';
import entry from "webpack-glob-entries";
import UglifyJSPlugin from "uglifyjs-webpack-plugin";

var m = entry(__dirname + '/app/**/*.js');

var keys = Object.keys(m);

var files = [];

for(var i=0;i<keys.length;i++){
    if(m[keys[i]].indexOf('spec') == -1){
        files.push(m[keys[i]]);
    }

}



module.exports = new WebpackConfig().extend('./webpack.config.common.babel.js').merge({
  output: {
      pathinfo: true,
      filename: "[name].[hash].bundle.js"
  },
  plugins: [
      new UglifyJSPlugin()
  ],
    entry : {
        bundle: files,
        vendor: ['angular','angular-ui-router','angular-dynamic-locale','angular-sanitize','angular-translate','angular-translate-storage-cookie','angular-translate-interpolation-messageformat','angular-translate-loader-partial','angular-cache-buster','angular-local-storage','angular-cookies', 'angular-material', 'angular-aria', 'angular-animate','@uirouter/sticky-states','moment']
    },
});
