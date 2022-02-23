const sequelize = require('../config/connection');
const {Post, User, Comment } = require('../models');
const router = require('express').Router();

router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'content', 
            'title',
            'created_at'
        ],
        include: [
            {
            model: Comment,
            attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include: {
                model: User,
                attributes: ['username']
            }
        },
        {
            model: User,
            attributes: ['username']
        }
        ]
    })
    .then(dbPostData => {
        // pass single post object into the homepage template
        res.render('homepage', { posts });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
     
});

router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;