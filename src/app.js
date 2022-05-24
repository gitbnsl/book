require('dotenv').config();

const exprees = require('express');
const app = exprees();
const port = process.env.PORT || 8000;
require('../database/connection');
const route = require("../routes/route");

app.use("/users",route);

app.get("/", (req, res) => {
    res.send("<h1>Render 🏠 Home Page</h1>");
});

app

app.listen(port, () => {
    console.log(`Listening on the port :- http://localhost:${port}/`);
})