const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/newdatabase', {useNewUrlParser: true, useUnifiedTopology: true,})
.then(() => console.log('connect to mongodb....?'))
.catch(error => console.error('could not connect to MongoDB',error));


const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {type: Date, default: Date.now },
    isPublish: Boolean
}); 

const Course = mongoose.model('Course', courseSchema);

async function createCourse(){
const course = new Course({
    name: 'Node.js course',
    author: 'pankaj',
    tags: ['node','backend'],
    isPublish: true
});

const result = await course.save();
console.log(result);
}

async function getCourses(){
    const courses = await Course.find();
    return courses;
}
    
    // getCourses().then(re => {
    //     console.log('sdfsdfsd');
    // });
async function getC()
{
    return await Course.find();
}

// getC().then(r => {
//     console.log(r);
// });

function getUser(id)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({id: id, name: 'yogesh'});
        }, 2000);
    });
}

async function test(id)
{
    return await getUser(id);
}

console.log('a');
test(1).then(user => {
    console.log(user);
})
console.log('b');

// async function getCourses(){
//     const courses = await Course.find();
//     console.log (courses);
// }
//     getCourses();