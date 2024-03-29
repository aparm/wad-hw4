const express = require('express');
const pool = require('./database');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

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

app.get('/addnewpost', (req, res) => {
    res.render('addnewpost');
});


app.post('/posts', async(req, res) => {
    try {
        const post = req.body;
        console.log(post);
        var date = new Date();
        var strDate = date.toString().split('(');

        const newpost = await pool.query(
            "INSERT INTO posts(text, image, likes, date) values ($1, $2, '0', $3) RETURNING*", [post.text, post.image, strDate[0]]
    );
        res.redirect('posts');
    } catch (err) {
        console.error(err.message)
    }
});


app.put('/posts/:id', async(req, res) => {
    try {
        const { id } = req.params;

        console.log("update request has arrived");
        const updatepost = await pool.query(
            "UPDATE posts SET likes=likes+1 WHERE id =$1", [id]
        );
    } catch (err) {
        console.error(err.message);
    }
});


app.get('/singlepost/:id', async(req, res) => {
    try {
        const id = req.params.id;
        console.log(req.params.id);
        console.log("get a single post request has arrived");
        const posts = await pool.query(
            "SELECT * FROM posts WHERE id = $1", [id]
        );
        res.render('singlepost', { post: posts.rows[0] });
    } catch (err) {
        console.error(err.message);
    }
});


app.delete('/posts/:id', async(req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;

        console.log("delete a post request has arrived");
        const deletepost = await pool.query(
            "DELETE FROM posts WHERE id = $1", [id]
        );
        res.redirect('posts');
    } catch (err) {
        console.error(err.message);
    }
});


app.use(express.static("public"));

app.use((req, res) => {
    res.status(404).render('404');
});
