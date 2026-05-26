const express = require('express');
const app = express();
const blogRouter = require('./controllers/blogs.js');
const mongoose = require('mongoose');
const userRouter = require('./controllers/users')
const { unknownEndpoint, errorHandler, tokenExtractor, userExtractor } = require('./utils/middleware')
const loginRouter = require('./controllers/login')

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });

app.use(express.json());
app.use(tokenExtractor)
app.use(userExtractor)

app.use('/api/blogs', blogRouter);
app.use('/api/users', userRouter)
app.use('/api/login', loginRouter)

app.use(unknownEndpoint)
app.use(errorHandler)

module.exports = app;