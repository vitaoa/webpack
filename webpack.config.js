var path = require('path');


module.exports = {
//  entry: path.resolve(__dirname, 'app/main.js'),
//  output: {
//      path: path.resolve(__dirname, 'build'),
//      filename: 'bundle.js',
//  },
//  
    
    entry: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://172.30.5.47:8088/',
      path.resolve(__dirname, 'app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
	module: {
	    loaders: [{
	      	test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
	      	exclude: /node_modules/,
	      	loader: 'babel', // 加载模块 "babel" 是 "babel-loader" 的缩写
	    	query:{
		        presets:['es2015', 'react']
		      }
	    }]
	},
};