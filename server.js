const express = require("express");
const path = require("path")

const app = express();

app.use(express.static("public"));
app.set('views', __dirname);
app.set("view engine", "ejs");


app.get("/", (req, res) => res.render('index.ejs'));

app.listen(5000, () => {
    console.log("Server is now running. To visit: localhost:5000");
});
