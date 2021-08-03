const User = require('../schemas/userSchema')

const registerUser = (req, res, bcrypt) => {
    const { username, password } = req.body
    console.log(username)
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    User.create({ "username": username, "password": hash })
        .then(response => {
            console.log(response);
            res.json("Success");
        })
        .catch(err => {
            console.log(err);
            res.status(400).json("Failed to register user");
        })
}

module.exports = {
    registerUser
}