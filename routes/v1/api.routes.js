const express = require('express');
const router = express.Router();
const studentController = require('../../controllers/student.controller');

router.route('/register').post(studentController.registerStudent);

module.exports = router;