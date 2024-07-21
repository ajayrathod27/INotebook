const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/inotebook';

const connectToMongo = () => {
    mongoose.connect(url)
        .then(() => {
            console.log('Connected to MongoDB successfully');
        })
        .catch((err) => {
            console.error('Error connecting to MongoDB:', err);
        });

}

module.exports = connectToMongo;
