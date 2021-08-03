const User = require('../schemas/userSchema')

const login = (req, res, bcrypt) => {
    const { username, password } = req.body
    User.find({ "username": username })
        .then(response => {
            console.log(response);
            if (response.length) {
                const pass = response[0].password;
                const isValid = bcrypt.compareSync(password, pass);
                if (isValid) {
                    res.json('Logged in successfully');
                }
                else {
                    res.status(400).json('Wrong credentails');
                }
            }
            else {
                res.status(400).json('user not found');
            }
        })
        .catch(err => {
            console.log(err)
            res.status(400).json('user not found')
        })
}

module.exports = {
    login
}