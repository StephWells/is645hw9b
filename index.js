const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");

const upload = multer();
const jsonParser = bodyParser.json();

const app = express();
app.use(express.static("public"));
app.use(express.static("css"));
app.get("/", (request, response) => {
    response.sendFile(`${__dirname}/index.html`);
});

//ex1
app.get("/ex1", (request, response) => {
    response.sendFile(`${__dirname}/views/ex1.html`);
});

app.post("/ex1",upload.array(), (request, response) => {
    console.log(request.body);
    const name = request.body.name;
    const email = request.body.email;
    response.send(`${name}, Thank you for your order. We will keep you posted on delivery status at ${email}`);
});

//ex2
app.get("/ex2", (request, response) => {
    response.sendFile(`${__dirname}/views/ex2.html`);
});

app.post("/api/countries",jsonParser, (request, response) => {
    console.log(request.body);
    const name = request.body.name;
    const number = request.body.travelRecords.length;
    response.send(`Your name is ${name} and you visited ${number} countries. Keep Travelling!`);
});

//ex3
app.get("/ex3", (request, response) => {
    response.sendFile(`${__dirname}/views/ex3.html`);
});

const array = [];
app.post("/articles",upload.array(), (request, response) => {
    console.log(request.body);
    const title = request.body.title;
    const content = request.body.content;
    
    const article = {title: title, content: content}
    array.push(article);
    response.send(`New article added successfully with title "${title}" and ID ${array.length}!`);
});
