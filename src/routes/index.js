const router = require('express').Router()
const apiRoute = require('./api/')
const apiRoute = require('./admin')

router.use('/api', apiRoute)
router.use('/admin', adminRoute)
module.exports = router
