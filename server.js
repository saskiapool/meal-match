const express = require('express');
const app = express();
const port = 8090;

app.set('view engine', 'ejs');
app.set('./views', 'view');

app.use(express.static('public'));

// function home(req, res) {
// res.send('hello world')
// }

app.use(function (req, res, next) {
    res.status(404).send('Not Found');
});

app.listen(port, function (){
    console.log('The server is running!')
})

app.get('/profile/:name', function(req, res){
    res.render('profile');
});