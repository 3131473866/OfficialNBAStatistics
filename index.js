const bodyParser = require('body-parser')
const express = require("express")
const app = express()
const port = 4000

app.use(bodyParser.json())

// this allows us to use all files in the public folder
app.use(express.static(__dirname + '/public'))

// GET, which serves the welcome_page.html page
app.get("/", (req, res) => {
    res.sendFile("public/welcome_page_animation.html", { root: __dirname }) 
})

app.get("/", (req, res) => {
    res.sendFile("public/welcome_page.html", { root: __dirname })
    
})
// GET, which serves the players.html page
app.get("/players_page", (req, res) => {
    res.sendFile("public/players_page.html", { root: __dirname });
});

// GET, which serves the About.html page
app.get("/About", (req, res) => {
    res.sendFile("public/About.html", { root: __dirname });
});

// GET, which serves the homePage.html page
app.get("/homePage", (req, res) => {
    res.sendFile("public/homePage.html", { root: __dirname });
});

// GET, which serves the Help.html page
app.get("/Help", (req, res) => {
    res.sendFile("public/Help.html", { root: __dirname });
});

// GET, which serves the catalog.html page
app.get("/teamPage", (req, res) => {
    res.sendFile("public/teamPage.html", { root: __dirname });
});

app.listen(port, () => {
    console.log('APP is running')
})