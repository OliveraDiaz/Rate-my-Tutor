const router = require('express').Router();
const { User } = require ('../../models');

router.post('/', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        req.session.save(() => {
        req.session.user_id = newUser.id; 
        req.session.logged_in = true;
        });
        
        const existingUser = await User.findOne({ where: { username: req.body.username}});
        if(existingUser){
            res
            .status(400).json({message: 'Name taken, choose another'});
            return;
        }else{
            res.status(200).json(newUser);
        }
    }catch (err) {
        res.status(400).json(err);
    }
})

//sign-in route 
router.post('/login', async (req, res) => {
    try {
        const username = await User.findOne({ where: { username: req.body.username }});
    
        if (!username) {
          res
            .status(400)
            .json({ message: 'Incorrect username or password, please try again' });
          return;
        }
    
        const correctPassword = await username.checkPassword(req.body.password);
    
        if (!correctPassword) {
          res
            .status(400)
            .json({ message: 'Incorrect username or password, please try again' });
          return;
        }
    
        req.session.save(() => {
          req.session.user_id = username.id;
          req.session.logged_in = true;
          
          res.json({ user: userData, message: 'You are now logged in!' });
        });
    }catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;