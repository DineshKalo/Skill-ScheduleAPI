const express =require('express')
const mongoose =require('mongoose')
const app = express()
const schedule=require('./models/schedule.model.js')
const scheduleRoute=require('./Routes/schedule.route.js')
app.use(express.json())
app.use("/API",scheduleRoute)



  
  mongoose.connect('mongodb+srv://dineshkumarkalo:L7vQ5kI8OVXKyzWQ@schedule.cebhx.mongodb.net/API?retryWrites=true&w=majority&appName=Schedule')
  .then(() => {
    console.log('Connected to database!')
    app.listen(3000,()=>{
        console.log("Server running on 3000")
    })
    
    app.get('/', function (req, res) {
        res.send('Hello World from the server')
      })
  }).catch(()=>{
    console.log("Cannot connect to the database!")
  });