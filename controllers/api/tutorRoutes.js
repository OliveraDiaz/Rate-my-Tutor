const router = require('express').Router();
const { Tutor, Rateing } = require ('../../models');


//all tutors
router.get('/', async (req, res) => {
    const tutorData = await Tutor.findAll()
        const tutors = tutorData.map((tutor) => tutor.get({ plain: true }));
        //renders all.handlebars and inputs all tutors. 
       res.render('tutors', { tutors });
        //res.json(tutors);
      });

//individual tutors 
router.get('/:id', async (req,res) => {
    try{ 
        const tutorData = await Tutor.findByPk(req.params.id);
        if(!tutorData) {
            res.status(404).json({message: 'No tutor by this id!'});
            return;
        }
        const tutor = tutorData.get({ plain: true });
        //renders tutors.handlebars and inputs tutor by id. 
        res.render('tutors', { tutor} );
       // res.json(tutorData)
      } catch (err) {
          res.status(500).json(err);
      };     
})

//tutor ratings
router.get('/', async (req, res) => {
  const tutorRateData = await Tutor.findAll({
     include:[
      { model:Rateing,
      attributes:['rate'],
     }
    ]
  })
  
  .catch((err) => { 
      res.json(err);
    });
      const tutorRate = tutorRateData.map((tutor) => tutor.get({ plain: true }));
      //renders all.handlebars and inputs all tutors. 
      res.render('tutors', { tutorRate });
    });

module.exports = router;

router.post('/', async (req, res) => {
  try {
      const newRate = await Rateing.create(req.body);
      
     res.json(newRate)
  }catch (err) {
      res.status(400).json(err);
  }
})
