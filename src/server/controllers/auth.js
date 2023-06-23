const { User } = require('../util/models')

module.exports = {
    register: async (req, res) => {
        let { username, password } = req.body
        let validUser = await User.findOne({ where: { username: username } })
        if (validUser) {
            return res.status(400).send('Username is taken')
        } else {
            let info = await User.create(req.body)
            console.log(validUser)
            console.log('REGISTERED!')
            res.status(200).send(info)
        }
    },
    login: async (req, res) => {
        console.log('LOGIN!')
        res.status(200).send('Logged in')
    },
}
