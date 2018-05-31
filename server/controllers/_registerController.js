// require modules for authentication 
// require modules for database query functions

const login = (req, res, next) => {
    // functionality for authentication
    // redirect to homepage
}


const register = (req, res, next) => {
    // insert request payload into database
    // send status 201 if okay
    // redirect to homepage or login
}

module.exports = {
    login,
    register
}