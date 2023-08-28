const express = require('express')
const router = express()
const users = []
const posts = []
let idUser = 1
let idPost = 1

router.get('/show/users', (req, res) => {
    res.json(users)
})

router.get('/show/posts', (req, res) => {
    res.json(posts)
})

router.post('/add/user', (req, res) => {
    let { name, bio, email, password } = req.body
    users.push(
        {   
            id: idUser,
            nome: name,
            bio: bio,
            email: email,
            senha: password,
        }
    )
    idUser++
    res.json(users)
})

router.post('/add/post', (req, res) => {
    let { content, id } = req.body
    posts.push(
        {
            idPost: idPost,
            user: id,
            conteudo: content
        }
        )
        idPost++
        res.json(posts)
    })
    
router.put('/update/user/:id', (req, res) => {
    let { id } = req.params
    let { name, bio, email, password, } = req.body
    let userIndex = users.findIndex((user) => user.id == id)
    let updates = {
        id: Number(id),
        name: name,
        bio: bio,
        email: email,
        password: password,
    }
    users[userIndex] = updates
    res.json(users)

})

router.put('/update/post/:id', (req, res) => {
    let { id } = req.params
    let { user ,content } = req.body
    let postIndex = posts.findIndex((post) => post.idPost == id)
    let updates = {
        idPost: Number(id),
        user: user,
        conteudo: content
    }
    posts[postIndex] = updates
    res.json(posts)
})

router.delete('/delete/user/:id', (req, res) => {
    let { id } = req.params
    let userIndex = users.findIndex((user) => user.id == id)
    users.splice(userIndex, 1)
    res.json(users)

})

router.delete('/delete/post/:id', (req, res) => {
    let { id } = req.params
    let postIndex = posts.findIndex((post) => post.idPost == id)
    
    posts.splice(postIndex, 1)
    res.json(posts)
})

module.exports = router