var express = require('express');
var router = express.Router();

const studentController = require('../controllers').student;
const courseController = require('../controllers').course;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* Student Router */
router.post('/student', studentController.add);
router.get('/student', studentController.getAll);
router.get('/student/:id', studentController.getById);
router.put('/student/:id', studentController.update);
router.delete('/student/:id', studentController.delete);

/* Course Router */
router.post('/course', courseController.add);
router.get('/course', courseController.getAll);
router.get('/course/:id', courseController.getById);
router.put('/course/:id', courseController.update);

/* Group Router */

/* Lecturer Router */


module.exports = router;
