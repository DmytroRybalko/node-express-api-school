const Group = require('../models').Group;
const Student = require('../models').Student;
const Course = require('../models').Course;

module.exports = {
  
  // POST a new group    
  
  add(req, res) {
    return Group
      .create({
        title: req.body.title,
        department: req.body.department
       })
       .then((group) => res.status(201).send(group))
       .catch((error) => res.status(400).send(error));
  },

  // GET all groups

  getAll(req, res) {
    return Group
      .findAll({})
      .then((group) => res.status(201).send(group))
      .catch((error) => res.status(400).send(error));
  }

 
};        