const express = require('express');
const pool = require('./database');

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());

// listen for requests on port 3000
app.listen(3000);


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/posts', async(req, res) => {
    try {
        console.log("get posts request has arrived");
        const posts = await pool.query(
            "SELECT * FROM posts"
        );
        res.render('posts', {posts: posts.rows});
    } catch (err) {
        console.error(err.message);
    }



});

app.use(express.static("public"));

app.use((req, res) => {
    res.status(404).render('404');
});
