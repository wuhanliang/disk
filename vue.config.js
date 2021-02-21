module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#f00',
            'link-color': '#f00',
            'border-radius-base': '2px',
          },
          javascriptEnabled: true,
        },
      }
    }
  }}