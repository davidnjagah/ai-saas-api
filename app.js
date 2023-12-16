const createError = require('http-errors');
const express = require('express');
const cors = require('cors')

const fetchImages = require('./routes/fetchImages')

const {notFound, errorHandler} = require('./middleware/errorMiddleware')

const app = express();
app.use(express.json({extended: true}))
app.use(express.urlencoded({extended:true}))
app.use(cors({credentials: true, origin: "http://localhost:3000"}))

app.use('/api/fetchimages', fetchImages)

app.use(notFound)
app.use(errorHandler)

app.listen(5000, () => console.log("Server running on port 5000"))

module.exports = app;
