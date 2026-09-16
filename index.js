const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("blog up");
});

app.listen(PORT, () => {
    console.log(`server on at http://localhost:${PORT}`);
});