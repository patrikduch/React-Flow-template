import epxress from 'express';
import webpack from 'webpack';
import webpackConfig from '../../config/webpack.client.dev.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const compiler = webpack(webpackConfig);
const server =  epxress();
const devMiddleware = webpackDevMiddleware(compiler, webpackConfig.devServer);
const hotMiddleware = webpackHotMiddleware(compiler);

server.use(devMiddleware);
server.use(hotMiddleware);

const staticMiddleware = epxress.static('dist');

server.use(staticMiddleware);

server.listen(8080, () => {
    console.log("Server is listening.");
})
