const Lecturer = require('../models').Lecturer;
const Course = require('../models').Course;

module.exports = {
  
  // POST a new lecturer
  
  add(req, res) {
    return Lecturer
      .create({
        title: req.body.title,
        full_name: req.body.full_name,
        status: req.body.status,
        start_date: req.body.start_date
       })
       .then((lecturer) => res.status(201).send(lecturer))
       .catch((error) => res.status(400).send(error));
  },

  // GET all lecturer

  getAll(req, res) {
    return Lecturer
      .findAll({})
      .then((lecturer) => res.status(201).send(lecturer))
      .catch((error) => res.status(400).send(error));
  },


};        