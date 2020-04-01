const express = require('express');
const router = express.Router();
const { userController } = require('../controller/index')

router.get('/getUsers', userController.getAllUser)
router.get('/getById/:id', userController.getUserById)
router.get('/search-username', userController.searchByUsername)
router.post('/login', userController.Login)
router.get('/role', userController.searchByRole)
//localhost:2000/users/getById/1 => req.params
//localhost:2000/users/getById?1 => req.querry

module.exports = router