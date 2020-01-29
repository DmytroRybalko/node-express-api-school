const Course = require('../models').Course;
const Group = require('../models').Group;
const Lecturer = require('../models').Lecturer;

module.exports = {
  
  // POST a new course    
  
  add(req, res) {
    return Course
      .create({
        lecturer_id: req.body.lecturer_id,
        title: req.body.title,
        specialization: req.body.specialization,
        rating: req.body.rating
       })
       .then((course) => res.status(201).send(course))
       .catch((error) => res.status(400).send(error));
  }

  
};        