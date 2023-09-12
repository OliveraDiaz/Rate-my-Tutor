const router = require('express').Router();
const userRoutes = require('./userRoutes');
const tutorRoutes = require('./tutorRoutes');


router.use('/users', userRoutes);
router.use('/tutors', tutorRoutes);


module.exports = router;