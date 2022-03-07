const express = require("express")
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.static('assets'))

let isLogin = false

app.set("view engine", "ejs")

app.use((req, res, next) => {
    if (req.url === '/game' && !isLogin) {
        res.redirect('/login')
    }
    next()
})

app.get('/', (req, res) => {
    res.render("home")
})

// app.get("/home", (req, res) => {
//     res.render("home")
// })

app.get("/game", (req, res) => {
    res.render("game")
})

app.get("/login", (req, res) => {
    res.render("login", {
        error: '',
    })
})

app.post("/login/auth", (req, res) => {
    const user = require('./db/user.json');

    if (user.email === req.body.uEmail && user.password === req.body.uPassword) {
        isLogin = true
        res.redirect('/game')
    } else {
        res.render("login", {
            error: 'Either your password or email was wrong',
        })
    }
})

app.listen(3000, () => console.log("Server Running ..."));