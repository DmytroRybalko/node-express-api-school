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
  },

  // GET all courses

  getAll(req, res) {
    return Course
      .findAll({})
      .then((course) => res.status(201).send(course))
      .catch((error) => res.status(400).send(error));  
  },

  // GET a single course by id

  getById(req, res) {
    return Course
      .findOne({
        where : {
          id : req.params.id
        }
      })
      .then((course) => {
        if (!course) {
          return res.status(404).send({
            message: 'Course Not Found',
          });
        }
        return res.status(200).send(course);
      })
      .catch((error) => res.status(400).send(error));
    },

  // PUT updated data in an existing course
  
  update(req, res) {
    return Course
      .findOne({
            where : {
            id : req.params.id
            }
        })
        .then((course) => {
           if (!course) {
               return res.status(404).send({
                   message: 'Course Not Found'
                });
            }
            return course.
              update({
                lecturer_id: req.body.lecturer_id,
                title: req.body.title,
                specialization: req.body.specialization,
                rating: req.body.rating
            })
            .then(() => res.status(200).send(course))
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
        },

  // DELETE a course

  delete(req, res) {
    return Course
      .findOne({
        where : {
          id : req.params.id
        }
      })
      .then((course) => {
        if (!course) {
          return res.status(400).send({
            message: 'Course Not Found',
          });
        }
        return course
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }

};        