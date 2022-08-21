require('dotenv').config()

const { config } = require('dotenv')
const express = require("express")
const mongoose = require("mongoose")

const workoutRoutes = require('./routes/workouts')

// express app
const app = express()

//middleware :showes type or req and routes
app.use(express.json())

app.use((request, respone, next) => {
    console.log(request.path, request.method)
    next()
});



//routes
app.use('/api/workouts',workoutRoutes)



//connect to db via key listed in .env file
 mongoose.connect(process.env.MONGO_URI)
     .then(() =>{
         //listen for requests on PORT delcred in .env file
     app.listen(process.env.PORT,() => {
        console.log('connected to db &listening on port', process.env.PORT)
 
         });
     })
     .catch((error) => {
       console.log(error)
     });



