import epxress from 'express';
import webpack from 'webpack';
import webpackDevConfig from '../../config/client/webpack.client.dev.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

const server =  epxress();


if (process.env && process.env.NODE_ENV === 'development') {

    const compiler = webpack(webpackDevConfig);
    const devMiddleware = webpackDevMiddleware(compiler, webpackDevConfig.devServer);
    const hotMiddleware = webpackHotMiddleware(compiler);

    server.use(devMiddleware);
    server.use(hotMiddleware);
}

const staticMiddleware = epxress.static('dist');

server.use(staticMiddleware);

server.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);