import epxress from 'express';
import webpack from 'webpack';
import webpackConfig from '../../config/webpack.client.dev.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

const compiler = webpack(webpackConfig);
const server =  epxress();
const devMiddleware = webpackDevMiddleware(compiler, webpackConfig.devServer);
const hotMiddleware = webpackHotMiddleware(compiler);

server.use(devMiddleware);
server.use(hotMiddleware);

const staticMiddleware = epxress.static('dist');


server.use(staticMiddleware);

server.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);