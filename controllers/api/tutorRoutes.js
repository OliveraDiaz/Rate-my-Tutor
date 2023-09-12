const router = require('express').Router();
const { Tutor } = require ('../../models');


//all tutors
router.get('/', async (req, res) => {
    const tutorData = await Tutor.findAll().catch((err) => { 
        res.json(err);
      });
        const tutors = tutorData.map((tutor) => tutor.get({ plain: true }));
        res.render('all', { tutors });
      });

//individual tutors 
router.get('/:tutor_name', async (req,res) => {
    try{ 
        const tutorData = await Tutor.findByPk(req.params.tutor_name);
        if(!tutorData) {
            res.status(404).json({message: 'No tutor by this name!'});
            return;
        }
        const tutor = tutorData.get({ plain: true });
        res.render('tutor', tutor);
      } catch (err) {
          res.status(500).json(err);
      };     
})

module.exports = router;


