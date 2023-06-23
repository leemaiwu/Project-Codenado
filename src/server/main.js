const express = require("express")
const ViteExpress = require("vite-express")
const {register, login} = require('./controllers/auth')
const db = require('./util/database')
const {User, Post, Like} = require('./util/models')
const { addPost } = require('./controllers/postController')

const app = express()
app.use(express.json())

// Associations
User.hasMany(Post)
Post.belongsTo(User)

Like.belongsTo(Post)
Post.hasMany(Like)

Like.belongsTo(User)
User.hasMany(Like)

app.post('/api/register', register)
app.post('/api/login', login)
app.post('/api/addPost', addPost)

db.sync()

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
)
