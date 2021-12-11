const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// listen for requests on port 3000
app.listen(3000);


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/posts', (req, res) => {
    let posts = [

        {
            id: 1,
            authorId: 397,
            authorPhoto: null,
            date: "19.03.2022 03:56",
            image: "https://i.pinimg.com/originals/46/57/64/465764c35bc47873f2eb0fc69d9b5e59.jpg",
            text: "I think It's going well",
            likes: 43
        },
        {
            id: 2,
            authorId: 397,
            authorPhoto: null,
            date: "29.02.2012 05:56",
            image: "https://freight.cargo.site/w/1200/i/323990d558c1db55532b70b60aae566c2aebabf97163ae341c6cc05c4bcef5b6/Batman.jpg",
            text: "Some text",
            likes: 433
        },
        {
            id: 3,
            authorId: 397,
            authorPhoto: null,
            date: "14.02.2015 05:36",
            image: null,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit urna sit amet molestie hendrerit. Proin sit amet velit tempor, auctor ipsum at, tristique tortor. Proin eu bibendum sapien. In hendrerit suscipit odio ac pellentesque. Duis tincidunt eu libero in bibendum. Cras efficitur, tellus mollis aliquam fringilla, dui massa sagittis leo, id elementum ex ex vel quam. Aenean accumsan enim non massa maximus volutpat.",
            likes: 4
        },
        {
            id: 5,
            authorId: 397,
            authorPhoto: null,
            date: "14.02.2015 05:36",
            image: "https://www.denofgeek.com/wp-content/uploads/2020/03/half-life-g-man-michael-shapiro-1.jpg",
            text: null,
            likes: 1000
        },
        {
            id: 7,
            authorId: 11,
            authorPhoto: "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/45.png",
            date: "14.02.2021 05:36",
            image: "https://img.devrant.com/devrant/rant/r_1096632_Zk451.jpg",
            text: "meme 1",
            likes: 0
        },
        {
            id: 8,
            authorId: 11,
            authorPhoto: "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/45.png",
            date: "14.02.2021 05:37",
            image: "https://i.pinimg.com/564x/3f/bb/8d/3fbb8db936861636002094deb9dc8ee5.jpg",
            text: "meme 2",
            likes: 4
        },
        {
            id: 9,
            authorId: 11,
            authorPhoto: "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/45.png",
            date: "14.02.2021 05:59",
            image: "https://pics.me.me/when-you-actually-the-read-the-documentation-sometimes-my-genius-is-its-48199681.png",
            text: "meme 3",
            likes: 43
        },
        {
            id: 10,
            authorId: 11,
            authorPhoto: "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/45.png",
            date: "14.02.2021 05:37",
            image: null,
            text: "Lorem",
            likes: 43
        },
        {
            id: 11,
            authorId: 11,
            authorPhoto: "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/45.png",
            date: "14.02.2021 05:37",
            image: null,
            text: "ipsun",
            likes: 43
        },
        {
            id: 12,
            authorId: 11,
            authorPhoto: "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/45.png",
            date: "14.02.2021 05:37",
            image: null,
            text: "dolor sit amet",
            likes: 43
        }
    ];


    res.render('posts', {posts: posts});
});


/*app.use((req, res) => {
    res.status(404).render('404');
});*/

app.use(express.static("public"));
