export {}
const express = require('express')
const router = express.Router()
const AddressController = require('./AddressRoutes')

/* REQ BODY OF ADDRESS ROUTE  street, lot_number, state, city, */
router.post('/address/add', AddressController.addAddress)

router.patch('/address/update', AddressController.updateAddress)

/* DELETE ONLY NEEDS AUTH HEADER */
router.delete('/address/delete', AddressController.deleteAddress)

module.exports = router
