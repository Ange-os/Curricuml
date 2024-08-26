const express = require('express');
const nodemailer = require('nodemailer');
const bodyParce = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParce.urlencoded({extended: false}));
app.use(bodyParce.json());


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

    app.listen(port, () =>{
        console.log(`Servidor ejecutándose en http://localhost:${port}`)
    })