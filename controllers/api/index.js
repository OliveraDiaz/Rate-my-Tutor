const router = require('express').Router();
const tutorRoutes = require('./tutorRoutes')
const userRoutes = require('./userRoutes');


router.use('/users', userRoutes);
router.use('/tutors', tutorRoutes);

module.exports = router;