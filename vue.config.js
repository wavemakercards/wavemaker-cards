module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
    pluginOptions: {
      electronBuilder: {
        builderOptions: {
          publish: [
            {
              provider: "github",
              owner: "mayasky76",
              private: true,
            }
          ]
        },
        chainWebpackRendererProcess(config) {
          config.plugins.delete('workbox')
          config.plugins.delete('pwa')
        }
      }
    }
  }