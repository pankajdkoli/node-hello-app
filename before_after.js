const expess = require('express');
const app =  expess();
//console.log(app);
console.log('Before')
setTimeout(() => {
    console.log('Reading a user from database...');
}, 3000);

console.log('After');
setTimeout(() => {
    console.log('Reading a user from database...');
}, 5000);
//app.listen(4000, () => console.log('listening'));

const PORT = process.env.PORT || 4000;
app.listen(PORT);