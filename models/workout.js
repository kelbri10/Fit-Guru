const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

//user can track
//name, type, weight, sets, reps, duration
const WorkoutSchema = newSchema({
    { 
        day: { 
            type: Date, 
            default: Date.now
        }, 

        exercises: [
            {
                type: { 
                    type: String, 
                    trim: true
                }, 
                name: { 
                    type: String, 
                    trim: true
                }, 
                duration: { 
                    type: Number, 
                    default: 0
                }, 
                sets: { 
                    type: Number, 
                    default: 0
                }, 
                reps: { 
                    type: Number, 
                    default: 0
                }, 
                weight: { 
                    type: Number, 
                    default: 0
                },
                distance: { 
                    type: Number, 
                    default: 0
                }
            }
        ]
    }
})

const Workout = mongoose.model('Workout', WorkoutSchema); 

module.exports = Workout; 