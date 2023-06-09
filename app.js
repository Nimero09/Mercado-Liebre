const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, './public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
})

app.listen(3000, () => {
    console.log("Servidor corriendo");
})