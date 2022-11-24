import express from 'express'
import homeController from '../controllers/homeController'
let route = express.Router()

let initWebRoutes = (app) => {

    route.get('/', (req, res) => {
        return res.send('Hello world with Phong Cena')
    })

    route.get('/phong', homeController.getHomePage)
    return app.use('/', route)
}

module.exports = initWebRoutes