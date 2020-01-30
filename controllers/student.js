const { Student } = require('../models');
const { Group } = require('../models');

const models = require('../models');

const { Op } = models.Sequelize;


module.exports = {

  // POST a new student

  add(req, res) {
    return Student
      .create({
        full_name: req.body.full_name,
        avg_grade: req.body.avg_grade,
        miss_assign: req.body.miss_assign,
        group_id: req.body.group_id,
      })
      .then((student) => res.status(201).send(student))
      .catch((error) => res.status(400).send(error));
  },

  // GET all students

  getAll(req, res) {
    return Student
      .findAll({
        include: { model: Group, as: 'group' },
        order: [['avg_grade', 'DESC']],
      })
      .then((student) => res.status(201).send(student))
      .catch((error) => res.status(400).send(error));
  },

  // GET a single student by id

  getById(req, res) {
    return Student
      .findOne({
        where: {
          id: req.params.id,
        },
        include: {
          model: Group,
          as: 'group',
        },
      })
      .then((student) => {
        if (!student) {
          return res.status(404).send({
            message: 'Student Not Found',
          });
        }
        return res.status(200).send(student);
      })
      .catch((error) => res.status(400).send(error));
  },

  // PUT updated data in an existing student

  update(req, res) {
    return Student
      .findOne({
        where: {
          id: req.params.id,
        },
        include: {
          model: Group,
          as: 'group',
        },
      })
      .then((student) => {
        if (!student) {
          return res.status(404).send({
            message: 'Student Not Found',
          });
        }
        return student
          .update({
            group_id: req.body.full_name,
            full_name: req.body.full_name,
            avg_grade: req.body.avg_grade,
            miss_assign: req.body.miss_assign,
          })
          .then(() => res.status(200).send(student))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  // DELETE a student

  delete(req, res) {
    return Student
      .findOne({
        where: {
          id: req.params.id,
        },
      })
      .then((student) => {
        if (!student) {
          return res.status(400).send({
            message: 'Student Not Found',
          });
        }
        return student
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  // GET all students with rating greater than

  getAllRatingThreshold(req, res) {
    return Student
      .findAll({
        where: { avg_grade: { [Op.gte]: req.body.avg_grade } },
      })
      .then((student) => res.status(201).send(student))
      .catch((error) => res.status(400).send(error));
  },

};
