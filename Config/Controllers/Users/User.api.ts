const express = require('express')
const router = express.Router()
const UserController = require('./UserRoutes')

/* REQ BODY OF USERS ROUTE  username, password, fullname, contact_number */
router.post('/user/login', UserController.login)

router.post('/user/register', UserController.register)

router.patch('/user/update', UserController.updateUser)

router.get('/user/profile', UserController.getProfile)

module.exports = router
