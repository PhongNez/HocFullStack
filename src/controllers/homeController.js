import db from '../models/index'
import CrudServices from '../services/CrudServices'

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll()
        console.log('>>> Check data user: ', data);
        return res.render('homePage.ejs', {
            data: JSON.stringify(data)
        })
    }
    catch (err) {
        console.log(err);
    }

}

let getCrud = (req, res) => {
    return res.render('crud.ejs');
}

let postCrud = async (req, res) => {
    console.log(req.body);
    let message = await CrudServices.createCrudNew(req.body);
    console.log(message);
    return res.send('Post crud from server')
}
module.exports = {
    getHomePage: getHomePage,
    getCrud: getCrud,
    postCrud: postCrud
}