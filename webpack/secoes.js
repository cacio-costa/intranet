const htmlWebpack = require('html-webpack-plugin');

const secoes = [
    'noticias',
    'textos',
    'erro-404'
];

const entries = secoes.map(secao => {
    let configuracaoDaSecao = {
        nome: secao,
        entry: [`./src/${secao}/index.js`],
        plugin: new htmlWebpack({
            template: `!!ejs-compiled-loader!./src/${secao}/index.html`,
            filename: `${secao}/index.html`,
            chunks: ['vendor', 'bundle', secao],
            hash: true
        })
    };

    return configuracaoDaSecao;
});

module.exports = function(configuracaoWebpack) {

    entries.forEach(configuracaoDaSecao => {
        configuracaoWebpack.plugins.push(configuracaoDaSecao.plugin);
        configuracaoWebpack.entry[configuracaoDaSecao.nome] = configuracaoDaSecao.entry;
    });

};