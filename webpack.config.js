var path = require('path')

module.exports = {

    entry:'./client/index.js',

    // Output 
    output: {
        filename:'app.js',
        path: path.join(__dirname, 'public/assets'),
        publicPath:"/assets",
        libraryTarget: 'umd'
    },

    // Loaders
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.css$/, exclude: /node_modules/,
                use:[
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            },
            { test: /\.scss$/,use: [
                {  
                    loader: "style-loader" // creates style nodes from JS strings
                }
                ,{
                    loader: "css-loader" // translates CSS into CommonJS
                }, 
                {
                    loader: "sass-loader" // compiles Sass to CSS
                }
            ] 
        }
        ]
    },
     plugins: [
     ]


}