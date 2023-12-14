const express = require('express')
const { getAllUser, getUserById, addUser, updateUser, deleteUser } = require('../controllers/userController')

const router = express.Router()

router.get('/getalluser',getAllUser);
router.get('/getuserbyid/:id',getUserById);
router.post('/adduser',addUser);
router.put('/updateuser/:id',updateUser);
router.delete('/deleteuser/:id',deleteUser);

module.exports = router