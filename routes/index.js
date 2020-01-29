var express = require('express');
var router = express.Router();

const studentController = require('../controllers').student;


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

/* Group Router */

/* Course Router */

/* Lecturer Router */


module.exports = router;
