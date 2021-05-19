module.exports = {
  "publicPath": "./",

  "devServer": {
    "public": "localhost:8080"
  },

  configureWebpack: {
    devtool: 'source-map'
  },
  
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        publish: [
          {
            provider: "github",
            owner: "wavemakercards",
            private: true,
          }
        ],
      },
      chainWebpackRendererProcess(config) {
        config.plugins.delete('workbox')
        config.plugins.delete('pwa')
      }
    }
  },

  transpileDependencies: [
    'vuetify'
  ]
}
