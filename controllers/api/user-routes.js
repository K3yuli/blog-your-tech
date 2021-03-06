// Express.js router to keep the routes organized.
// using the four main methods for an API: GET, POST, PUT, and DELETE.
const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// GET /api/users
router.get('/', (req, res) => {
    // access User model and run .findAll() method
    User.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET /api/users/1
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Post,
                attributes: ['id', 'title', 'content', 'created_at']
            },
            // include comment model
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'created_at'],
                include: {
                    model: Post,
                    attributes: ['title']
                }
            }
        ]
    })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST /api/users (route to create a user)
router.post('/', (req, res) => {
    User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        .then(dbUserData => {
            req.session.save(() => {
                req.session.use_id = dbUserData.id;
                req.session.username = dbUserData.username;
                req.sessionID.loggedIn = true;
                
                res.json(dbUserData);
        });
});
});

router.post('/login', (req, res) => {
   User.findOne({
          where: {
            email: req.body.email
          }
    })
    .then(dbUserData => {
          if (!dbUserData) {
            res.status(400).json({ message: 'No user with that email address!' });
            return;
          }

          const validPassword = dbUserData.checkPassword(req.body.password);
          
          if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
          }

            req.session.save(() => {
                // declare session variables
                req.session.use_id = dbUserData.id;
                req.session.username = dbUserData.username;
                req.sessionID.loggedIn = true;
                
          res.json({ user: dbUserData, message: 'You are now logged in!' });
        });
    })
    .catch(err => {
        console.log(err);
        res.log(Err);
        res.status(500).json(err);
    })
});


router.post('/logout', (req, res) => {
    if(req.session.loggedIn) {
        req.session.destroy(() => {
        res.status(204).end();
    });
    }
    else {
        res.status(404).end();
    }
});

// PUT /api/users/1
router.put('/:id', (req, res) => {
    // expects {username: }
    // if req.body has exact key/value pairs to match the model, can use just `req.body` instead
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if(!dbUserData[0]) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// DELETE /api/users/1
router.delete('/id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if(!dbUserData) {
            resourceUsage.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;