import express from 'express'
import homeController from '../controllers/homeController'
let route = express.Router()


let initWebRoutes = (app) => {

    route.get('/phong', (req, res) => {
        return res.send('Hello world with Phong Cena')
    })

    route.get('/crud', homeController.getCrud)
    route.post('/post-crud', homeController.postCrud)
    route.get('/', homeController.getHomePage)
    return app.use('/', route)
}

module.exports = initWebRoutes