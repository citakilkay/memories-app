const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
module.exports = function (app) {
    app.use('/posts/addpost', () =>{
        try {
            createProxyMiddleware({ target: 'http://localhost:5000/posts/addpost', changeOrigin: true })
            app.listen(3000);
        } catch {
            res.json({ message: err.message });
        });
    }
}