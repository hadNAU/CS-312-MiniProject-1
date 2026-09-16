import express from "express";

const app = express();
const PORT = 3000;

let posts = [];

// Set EJS as the view engine
app.set("view engine", "ejs");

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Route for the home page
app.get("/", (req, res) => {
    res.render("index", { posts });
});

app.post("/posts", (req, res) => {
    const newPost = {
        id: Date.now(), //date as id bc mini proj
        author: req.body.author,
        title: req.body.title,
        content: req.body.content,
        createdAt: new Date().toLocaleString()
    };

    posts.push(newPost);

    console.log(posts);

    res.redirect("/");
});

app.listen(PORT, () => {
    console.log(`server on at http://localhost:${PORT}`);
});