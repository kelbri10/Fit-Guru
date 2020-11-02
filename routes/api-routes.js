
const db = require('../models'); 
const router = require('express').Router(); 

router.get('/api/workouts', (req, res) => {
        db.Workout.find({})
        .then(workouts => { 
            res.json(workouts); 
        })
        .catch(err => { 
            res.json(err); 
        }); 
    }); 

router.put('/api/workouts/:id', (req, res) => {
        const id = req.params.id; 
        const body = req.body; 

        db.Workout.findOneAndUpdate(
            {
                _id: id
            }, 
            {
                $push: { exercises: body }
            }, 
            {
                new: true
            })
            .then(workouts => { 
                res.json(workouts); 
            })
            .catch(err => { 
                res.json(err); 
            });
    }); 

router.get('/api/workouts/range', (req, res) => {
        db.Workout.find({})
        .then(workouts => { 
            res.json(workouts); 
        })
        .catch(err => {
            res.json(err); 
        });
    }); 

router.post('/api/workouts', (req, res) => {
        const body = req.body; 
        db.Workout.create(body)
        .then(workouts => { 
            res.json(workouts); 
        })
        .catch(err => { 
            res.json(err); 
        }); 
    });

module.exports = router; 
