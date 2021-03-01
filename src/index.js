const express = require("express");
const app = express();
const authController = require("../src/app/controllers/authController");

app.use(express.json());
app.get("/", (req, res) => {
    res.send("Wow");
})
app.use("/auth", authController);
app.listen(3333, () => {
    console.log("Running on 3333!");
});