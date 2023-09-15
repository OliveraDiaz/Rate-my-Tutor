const router = require('express').Router();
const { User } = require ('../../models');

router.post('/', async (req, res) => {
<<<<<<< HEAD
  try { 
=======
  try {
   

    // Set up sessions with a 'loggedIn' variable set to `true`
   
>>>>>>> 0ef144b3f9f9acecbfd44e3f9101921281629e4d
    const existingUser = await User.findOne({ where: { username: req.body.username}});
    console.log(existingUser)
      if(existingUser){
          res
          .status(400).json({message: 'Name taken, choose another'});
          return;
      }else{
          req.session.save(() => {
          req.session.loggedIn = true;
      });
<<<<<<< HEAD
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
=======
      const newUser = await User.create({
        username: req.body.username,
        password: req.body.password,
      });
>>>>>>> 0ef144b3f9f9acecbfd44e3f9101921281629e4d
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
        const username = await User.findOne({ where: { username: req.body.username, },});
        console.log(username)
        if (!username) {
          res
            .status(400)
            .json({ message: 'Incorrect username or password, please try again' });
          return;
        }
        const check = (req.body.password);
        console.log(check)
        
        const name = (req.body.username)
        console.log(name)

        const correctPassword = await username.checkPassword(req.body.password);
        console.log(correctPassword)
    
        if (correctPassword) {
           req.session.save(() => {
          req.session.user_id = username.id;
          console.log(req.session.user_id = username.id);
          req.session.logged_in = true;
          
          res.json({ user: username, message: 'You are now logged in!' });
        })}else {
            res.status(400)
            .json({ message: 'Incorrect username or password, please try again' });
            return;
          }
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