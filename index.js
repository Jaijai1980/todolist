const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');

const db = require('./db');

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let users = [
    {username:"nattapong", email:"nattapongstick@gmail.com",password:"1234"}
];

app.get('/', (req,res) => {
    res.send('<h1>Welcome to my home page.</h1>');
});

app.get('/items/:id', (req,res) => {
    const id = req.params.id;
    res.send(`Received item id:${id}`);
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.get("/login", (req, res) => {
    const {email, password} = req.body;
    res.render(`Received email: ${email}, password; ${password}`);
});

app.get("/register", (req, res) => {
    const {email, password} = req.body;
    const newUsers = {username:username, email:email,password:password};
    users.push(newUser);
    res.json(users);
});

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
});