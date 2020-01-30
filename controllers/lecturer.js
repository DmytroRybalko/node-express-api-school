const moment = require('moment');
const { Lecturer } = require('../models');
const { Course } = require('../models');

const models = require('../models');

const { Op } = models.Sequelize;

module.exports = {

  // POST a new lecturer

  add(req, res) {
    return Lecturer
      .create({
        title: req.body.title,
        full_name: req.body.full_name,
        status: req.body.status,
        start_date: req.body.start_date,
      })
      .then((lecturer) => res.status(201).send(lecturer))
      .catch((error) => res.status(400).send(error));
  },

  // GET all lecturer

  getAll(req, res) {
    return Lecturer
      .findAll({
        include: [{
          model: Course,
          as: 'course',
        }],
        order: [
          ['createdAt', 'DESC'],
          [{ model: Course, as: 'course' }, 'createdAt', 'DESC'],
        ],
      })
      .then((lecturer) => res.status(201).send(lecturer))
      .catch((error) => res.status(400).send(error));
  },

  // GET a single lecturer by id

  getById(req, res) {
    return Lecturer
      .findOne({
        where: {
          id: req.params.id,
        },
        include: [{
          model: Course,
          as: 'course',
        }],
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

  // PUT updated data in an existing lecturer

  update(req, res) {
    return Lecturer
      .findOne({
        where: {
          id: req.params.id,
        },
      })
      .then((lecturer) => {
        if (!lecturer) {
          return res.status(404).send({
            message: 'Lecturer Not Found',
          });
        }
        return lecturer
          .update({
            title: req.body.title,
            full_name: req.body.full_name,
            status: req.body.status,
            start_date: req.body.start_date,
          })
          .then(() => res.status(200).send(lecturer))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  // DELETE a lecturer

  delete(req, res) {
    return Lecturer
      .findOne({
        where: {
          id: req.params.id,
        },
      })
      .then((lecturer) => {
        if (!lecturer) {
          return res.status(400).send({
            message: 'Lecturer Not Found',
          });
        }
        return lecturer
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  // GET lecturers with job seniority greater than

  getJobSeniorityThreshold(req, res) {
    return Lecturer
      .findAll({
        where: {
          start_date: {
            [Op.lte]: moment().subtract(req.body.age, 'years'),
          },
        },
      })
      .then((student) => res.status(201).send(student))
      .catch((error) => res.status(400).send(error));
  },

};
