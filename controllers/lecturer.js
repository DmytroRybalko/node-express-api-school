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

  // GET a single lecturer by id

  getById(req, res) {
    return Lecturer
      .findOne({
        where : {
          id : req.params.id
        }
      })
      .then((lecturer) => {
        if (!lecturer) {
          return res.status(404).send({
            message: 'Lecturer Not Found',
          });
        }
        return res.status(200).send(lecturer);
      })
      .catch((error) => res.status(400).send(error));
    },


};        