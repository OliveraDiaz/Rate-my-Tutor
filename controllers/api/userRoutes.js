const router = require('express').Router();
const { User } = require ('../../models');

router.post('/', async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    // Set up sessions with a 'loggedIn' variable set to `true`
   
    const existingUser = await User.findOne({ where: { username: req.body.username}});
      if(existingUser){
          res
          .status(400).json({message: 'Name taken, choose another'});
          return;
      }else{
          req.session.save(() => {
          req.session.loggedIn = true;
      });
          res.status(200).json(newUser);
      }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//sign-in route 
router.post('/login', async (req, res) => {
    try {
        const username = await User.findOne({ where: { username: req.body.username }});
    
        if (!username) {
          res
            .status(400)
            .json({ message: 'Incorrect username please try again' });
          return;
        }
    
        const correctPassword = await username.checkPassword(req.body.password);
    
        if (!correctPassword) {
          res
            .status(400)
            .json({ message: 'Incorrect password, please try again' });
          return;
        }
    
        req.session.save(() => {
          req.session.user_id = username.id;
          req.session.logged_in = true;
          
          res.json({ user: username, message: 'You are now logged in!' });
        });
    }catch (err) {
        res.status(400).json(err);
    }
});

//get all users route

router.get('/all', async (req, res) => {
  try {
    const userData = await User.findAll();
    
    res.status(200).json(userData);
  }catch (err) {
    res.status(500).json(err)
  }
  
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router;