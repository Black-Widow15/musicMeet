// require modules for database query functions
// require user model 
const db = require('../database/userQueries.js')


const login = (req, res) => {
    // functionality for authentication
    // redirect to homepage
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