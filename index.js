// Using Node.js `require()`
const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')

const app = express()


// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send('Hello from Node API Server Updated');
});

//routes
app.use('/api/products', productRoute);

mongoose.connect('mongodb+srv://Alability:4iNqdrMAqqduDdrS@cluster0.rst9v.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected to database!')
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(() => {
        console.log('Connection Failed');
    })