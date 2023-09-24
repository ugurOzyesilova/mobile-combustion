const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api', // Replace '/api' with the base URL of your API
        createProxyMiddleware({
            target: 'http://3.86.79.133', // Replace with the actual server URL
            changeOrigin: true,
        })
    );
};