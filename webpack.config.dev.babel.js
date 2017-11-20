import webpack from 'webpack';
import path from 'path';
import WebpackConfig from 'webpack-config';
import entry from "webpack-glob-entries";
var ip = require('ip');

var m = entry(__dirname + '/app/**/*.js');

var keys = Object.keys(m);

var files = [];

for(var i=0;i<keys.length;i++){
  if(m[keys[i]].indexOf('spec') === -1){
      files.push(m[keys[i]]);
  }
}

var config = module.exports = new WebpackConfig().extend('./webpack.config.common.babel.js').merge({
  output: {
    pathinfo: true,
    filename: "[name].[hash].bundle.js"
  },
  devtool: '#eval',
    devServer: {

        proxy: {
             contentBase: 'http://localhost:5000/',
            '/api':{
                target: process.env.TARGET_SERVER || 'http://localhost',
                secure: false
            },
            '/**': {  //catch all requests
                target: '/index.html',  //default target
                secure: false,
                bypass: function(req, res, opt){

                    if(path.extname(req.path) == ".js"){
                        return '/' + path.basename(req.path);
                    }

                    if(req.path.indexOf('api') !== -1){
                        return process.env.TARGET_SERVER + req.path;
                    }

                    //your custom code to check for any exceptions
                    //console.log('bypass check', {req: req, res:res, opt: opt});
                    if(req.path.indexOf('assets') !== -1 || req.path.indexOf('main') !== -1){
                        if(req.path.indexOf('assets') !== -1 ){
                            var currentPath = req.path;
                            currentPath = currentPath.substring(currentPath.indexOf("/assets/") + 1);
                            return '/' + currentPath;
                        }else{
                            var currentPath = req.path;
                            currentPath = currentPath.substring(currentPath.indexOf("/main/") + 1);
                            return '/' + currentPath;
                        }
                    }

                    if(req.path.indexOf('/assets/') !== -1){
                       return '/assets';
                    }

                    if (req.headers.accept.indexOf('html') !== -1) {
                        return '/index.html';
                    }
                }
            }
        }
    },
    entry : {
        vendor: ['angular-aria','angular-messages','angular-touch','angular-bootstrap','ng-file-upload'],
        bundle: files
    },
  plugins: [
    new webpack.LoaderOptionsPlugin({
        debug: true
   })
  ]
});

