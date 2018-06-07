// require modules for database query functions
// require user model 
const db = require('../database/userQueries.js')


const login = (req, res) => {

    db.checkUserPasswordMatchDB(req.body.username, req.body.password, (err, result) => {
        if (err) {
            console.log('Error checking username and password in database')
        } else {
            res.send(result)
        }
    })
}


const signup = (req, res) => {
    db.saveNewUser(req.body, (err, result) => {
        if(err){
            console.log('Could not save a user into the database')
        } else {
            res.status(201).end()
        }
    })
}

module.exports = {
    login,
    signup
}