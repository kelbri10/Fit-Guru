const db = require('../models'); 

module.exports = app => { 
    app.get('/api/workouts', (req, res) => {
        db.Workout.find({})
        .then(dbWorkout => { 
            res.json(dbWorkout); 
        })
        .catch(err => { 
            res.json(err); 
        }); 
    }); 

    app.put('/api/workouts/:id', (req, res) => {

    }); 

    app.get('/api/workouts/range', (req, res) => {

    }); 

    app.post('/api/workouts', (req, res) => {

    })
}
