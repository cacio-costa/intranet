const webpack = require('webpack');
const babili = require('babili-webpack-plugin');
const optimizeCss = require('optimize-css-assets-webpack-plugin');

module.exports = {
    
    configuraProducao: function(plugins) {
        plugins.push(new webpack.optimize.ModuleConcatenationPlugin());

        plugins.push(new babili());
    
        plugins.push(new optimizeCss({
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
                discardComments: {
                    removeAll: true
                }
            },
            canPrint: true
        }));
    }

};