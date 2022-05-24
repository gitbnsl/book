const mongoose = require('mongoose');
// const url = 'mongodb://127.0.0.1:27017/book';

const url = "mongodb+srv://bansal:b%40ns%40l%24@cluster0.w3drf.mongodb.net/?retryWrites=true&w=majority"
// const url = process.env.URL;

mongoose.connect(url).then(() => {
    console.log('DataBase Connection Establish Successfully 😊 😊 ');
}).catch((err) => {
    console.log('Failed To Establish a Connection To DataBase 😭 😭 '+ err);
});

