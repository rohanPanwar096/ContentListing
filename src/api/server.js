const express = require("express");
const app = express();
const cors = require("cors");

const Page1 = require("./CONTENTLISTINGPAGE-PAGE1.json")
const Page2 = require("./CONTENTLISTINGPAGE-PAGE2.json")
const Page3 = require("./CONTENTLISTINGPAGE-PAGE3.json")

app.get("/data/page/1", cors(), (req, res) => {
    return res.send({page: Page1});
})

app.get("/data/page/2", cors(), (req,res) => {
    return res.send({page: Page2});
})

app.get("/data/page/3", cors(), (req,res) => {
    return res.send({page: Page3});
})

app.listen(8080, () => {
    console.log("SERVER is up on port 8080.");
});