import Express from 'express'
import Mongoose from 'mongoose'
import config from '@config/index'

import Webpack from 'webpack'
import webpackCongig from '../webpack.config'
import WebpackDevMiddleware from 'webpack-dev-middleware'
import WebpackHotMiddleware from 'webpack-hot-middleware'
import Path from 'path'

Mongoose.connect(config.databaseUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

const app = Express()

const compiler = Webpack(webpackCongig) //get config from the webpackcongig file
app.use(
    WebpackDevMiddleware(compiler, {
        hot: true,
        publicPath: webpackCongig.output.publicPath
    })
) //use the config to serve client
app.use(WebpackHotMiddleware(compiler))
import routes from '@routes/index'

app.use(routes)

app.get('*', (req, res) => {
    res.sendFile(Path.resolve(__dirname, 'public/index.html')) //every time client makes a request serve them with public/index.html
})

app.listen(3001, () => {
    console.log(`started`)
})
