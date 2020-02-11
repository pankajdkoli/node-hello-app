const express = require('express');
const app = express();

 app.use(express.json());

const courses = [
    {id: 1, name: 'php'},
    {id: 2, name: 'javascript'},
    {id: 3, name: 'python'},
    {id: 4, name: 'html'},
    {id: 5, name: 'css'},
]
 
app.get('/', function (req, res) {
  res.send('Hello World dd')
})  

app.get('/test', function(req, res) {
    res.send({name: 'pankaj'});
});

app.get('/courses', function(req, res){
    res.send(
        `<html>
            <body><h1>Coursers</h1></body>
        </html>`
    );
});

app.get('/get-courses', function(req, res){
    res.send(courses);
});

app.post('/api/courses', (req, res) => {
    const course = {
        id: courses.length + 1, 
        name: req.body.name
    }
    courses.push(course);
    res.send('course');




    
});

app.listen(3000);  