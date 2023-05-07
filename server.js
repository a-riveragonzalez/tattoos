const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use(
  '/api/send-email',
  createProxyMiddleware({
    target: 'http://localhost:3000',
    changeOrigin: true,
  })
);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
