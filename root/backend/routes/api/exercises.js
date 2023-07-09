const express = require('express');
const router = express.Router();

// Load Exercise model
const Exercise = require('../../models/Exercise');

// @route GET api/Exercises/test
// @description tests Exercises route
// @access Public
router.get('/test', (req, res) => res.send('Exercise route testing!'));

// @route GET api/Exercises
// @description Get all Exercises
// @access Public
router.get('/', (req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(404).json({ noexercisesfound: 'No Exercises found' }));
});

// @route GET api/Exercises
// @description add/save Exercise
// @access Public
router.post('/', (req, res) => {
  Exercise.create(req.body)
    .then(exercise => res.json({ msg: 'Exercise added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this Exercise' }));
});

// @route GET api/Exercises/:id
// @description Update Exercise
// @access Public
router.put('/:id', (req, res) => {
  Exercise.findByIdAndUpdate(req.params.id, req.body)
    .then(exercise => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/Exercises/:id
// @description Delete Exercise by id
// @access Public
router.delete('/:id', (req, res) => {
  Exercise.findByIdAndRemove(req.params.id, req.body)
    .then(exercise => res.json({ mgs: 'Exercise entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a Exercise' }));
});

module.exports = router;