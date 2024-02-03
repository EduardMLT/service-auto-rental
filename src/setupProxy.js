const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // ваш шлях API
    createProxyMiddleware({
      target: 'http://localhost:3000', // URL вашого сервера
      changeOrigin: true,
    })
  );
};
