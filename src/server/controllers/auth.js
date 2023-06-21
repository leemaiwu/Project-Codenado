module.exports = {
    register: async (req, res) => {
        console.log('REGISTERED!')
        res.status(200).send('Registered')
    },
    login: async (req, res) => {
        console.log('LOGIN!')
        res.status(200).send('Logged in')
    }
}
