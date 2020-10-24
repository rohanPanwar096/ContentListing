const express = require("express");
const app = express();
const cors = require("cors");

const Page1 = require("./CONTENTLISTINGPAGE-PAGE1.json")
const Page2 = require("./CONTENTLISTINGPAGE-PAGE2.json")
const Page3 = require("./CONTENTLISTINGPAGE-PAGE3.json")

app.get("/data", cors(), (req, res) => {
    return res.send({Page1, Page2, Page3});
})

app.listen(8080, () => {
    console.log("SERVER is up on port 8080.");
});