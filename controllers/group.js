const { Group } = require('../models');
const { Student } = require('../models');
const { Course } = require('../models');

module.exports = {

  // POST a new group

  add(req, res) {
    return Group
      .create({
        title: req.body.title,
        department: req.body.department,
      })
      .then((group) => res.status(201).send(group))
      .catch((error) => res.status(400).send(error));
  },

  // GET all groups

  getAll(req, res) {
    return Group
      .findAll({
        include: [{
          model: Student,
          as: 'students',
        }, {
          model: Course,
          as: 'courses',
        }],
      })
      .then((group) => res.status(201).send(group))
      .catch((error) => res.status(400).send(error));
  },

  // GET a single group by id

  getById(req, res) {
    return Group
      .findOne({
        where: {
          id: req.params.id,
        },
        include: [{
          model: Student,
          as: 'students',
        }, {
          model: Course,
          as: 'courses',
        }],
      })
      .then((group) => {
        if (!group) {
          return res.status(404).send({
            message: 'group Not Found',
          });
        }
        return res.status(200).send(group);
      })
      .catch((error) => res.status(400).send(error));
  },

  // PUT updated data in an existing group

  update(req, res) {
    return Group
      .findOne({
        where: {
          id: req.params.id,
        },
        include: [{
          model: Student,
          as: 'students',
        }, {
          model: Course,
          as: 'courses',
        }],
      })
      .then((group) => {
        if (!group) {
          return res.status(404).send({
            message: 'group Not Found',
          });
        }
        return group
          .update({
            title: req.body.title,
            department: req.body.department,
          })
          .then(() => res.status(200).send(group))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  // DELETE a group

  delete(req, res) {
    return Group
      .findOne({
        where: {
          id: req.params.id,
        },
      })
      .then((group) => {
        if (!group) {
          return res.status(400).send({
            message: 'group Not Found',
          });
        }
        return group
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
