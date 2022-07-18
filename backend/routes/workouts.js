const { req, res } = require('express')
const express = require('express')
const {
    getWorkout,
    getWorkouts,
    createWorkout
} = require('../controllers/workoutController')


const router = express.Router()

//GET all workouts
router.get('/', getWorkouts)

//GET single workout
router.get('/:id', getWorkout)
//POST a new workout
router.post('/' , createWorkout) 

//DELETE a workout
router.delete('/:id' , (request, response) =>{
    response.json({mssg: 'DELETE a workout'})
})

//UPDATE a workout
router.patch('/:id' , (request, response) => {
    response.json({mssg: 'UPDATE a workout'})
})



//exports to server.js
module.exports = router