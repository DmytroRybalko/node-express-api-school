const express = require('express');

const router = express.Router();

const studentController = require('../controllers').student;
const courseController = require('../controllers').course;
const groupController = require('../controllers').group;
const lecturerController = require('../controllers').lecturer;

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});


/* Student Router */
router.post('/student', studentController.add);
router.get('/student', studentController.getAll);
router.get('/student/:id', studentController.getById);
router.put('/student/:id', studentController.update);
router.delete('/student/:id', studentController.delete);
router.post('/student/threshold', studentController.getAllRatingThreshold);

/* Course Router */
router.post('/course', courseController.add);
router.get('/course', courseController.getAll);
router.get('/course/:id', courseController.getById);
router.put('/course/:id', courseController.update);
router.delete('/course/:id', courseController.delete);

/* Group Router */
router.post('/group', groupController.add);
router.get('/group', groupController.getAll);
router.get('/group/:id', groupController.getById);
router.put('/group/:id', groupController.update);
router.delete('/group/:id', groupController.delete);

/* Lecturer Router */
router.post('/lecturer', lecturerController.add);
router.get('/lecturer', lecturerController.getAll);
router.get('/lecturer/:id', lecturerController.getById);
router.put('/lecturer/:id', lecturerController.update);
router.delete('/lecturer/:id', lecturerController.delete);
router.post('/lecturer/seniority', lecturerController.getJobSeniorityThreshold);

module.exports = router;
