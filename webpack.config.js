module.exports = {
	devtool:"eval-source-map",
	// __dirname 是node.js中的一个全局变量，他指向
	//当前执行脚本所在的目录
	entry: __dirname +"/app/main.js",
	output:{
		path:__dirname +"/public",
		filename :"boundle.js"
	},
	
	devServer:{
		contentBase:"./public", //本地服务器所加载的页面所在的目录
		historyApiFallback:true, //不跳转
		inline:true //实时刷新
	},
	module:{
		rules:[
		{
			test:/(\.jsx|\.js)$/,
			use:{
				loader:"babel-loader",
				options:{
					presets:[
						"env","react"
					]
				}
			},
			exclude:/node_modules/
			
		},{
			test:/\.css$/,
			use:[
					{
						loader:"style-loader"
					},{
						loader:"css-loader",
						options:{
							modules:true,
							localIdentName:'[name]__[local]--[hash:base64:5]'
						}
					}
//					,{
//						loader:"postcss-loader"		
//					}
			]
		}
		]
	},
//	plugins:[
//		new webpack.BannerPlugin('版权所有，翻版必究')
//	]
}
