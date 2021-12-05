export {}
const express = require('express')
const router = express.Router()
const DeptController = require('./DepartmentRoutes')

/* REQ BODY OF DEPARTMENT ROUTE  dept_name, dept_location*/
router.post('/department/add', DeptController.addDepartment)

router.patch('/department/update', DeptController.updateDept)

router.delete('/department/delete', DeptController.deleteDept)

module.exports = router
