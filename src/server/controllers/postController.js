const {Post, Like, User} = require('../util/models')

module.exports = {
    addPost: async (req, res) => {
        try {
            let newPost = await Post.create(req.body)
            res.status(200).send(newPost)
        } catch (error) {
            return res.status(400).send('Error with addPost')
        }
    }
}