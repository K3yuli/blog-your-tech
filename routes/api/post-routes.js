const router = require('express').Router();
const { Post, User } = require('../../models');

// get all users
router.get('/', (req, res) => {
    console.log('========================');
    Post.findAll({
        // query configuration
        attributes: ['id', 'title', 'post_content', 'created_at'],
        // JOIN to the User table
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]

    })
// create a Promise that captures the response from the database call
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
