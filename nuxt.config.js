const { resolve } = require('path')

module.exports = {


    modules: [
        // provide path to the file with resources

        ['nuxt-sass-resources-loader', [
            resolve(__dirname, 'assets/css/abstracts/_variables.scss'),
            resolve(__dirname, 'assets/css/abstracts/_mixins.scss'),
            resolve(__dirname, 'assets/css/base/_base.scss'),
            resolve(__dirname, 'assets/css/layout/_grid.scss')
        ]]


    ],

    /*
     ** Headers of the page
     */
    head: {
        title: 'gridproj',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'custom float Grid layout' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
     ** Customize the progress bar color
     */
    loading: { color: '#3B8070' },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** Run ESLint on save
         */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}