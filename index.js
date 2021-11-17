const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const connect = require('./schemas');
connect();

const postsRouter = require('./routers/posts');
app.use('/api', postsRouter);

app.use(express.static('public'));   // 정적파일을 제공해줄건데 public 안에서 제공

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('index')
    // res.send("This is root page");
})
app.get('/detail',(req,res)=>{
    let postId = req.query.name;
    res.render('detail',{postId});
})
app.get('/create',(req,res)=>{
    // res.render('create')
    res.render('create');
})
app.get('/edit',(req, res)=>{
    let postId = req.query.name;
    res.render('edit',{postId});
})

app.listen(port, ()=>{
    console.log(`listening at http://localhost:${port}`);
})