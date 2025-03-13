const express =require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requests = require('./Router/todo')

const app = express();

//Middlewear
app.use(express.json());
app.use(cors());

//connect to db
mongoose.connect("mongodb+srv://sandeepkumar7756311:Sandeep12@cluster0.hxn75.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log('connected to db')
  })
  .catch(err => {
    console.log(err.message)
  })


//routes
app.use('/Todo', requests)


app.listen(3000, () => {
  console.log('Server is running on port 3000 ');
  });