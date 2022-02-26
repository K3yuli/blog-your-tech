const router = require('express').Router();
const { Comment } = require('../../models');

router.get('/', (req, res) => {

});

router.post('/', (req, res) => {
    // check the session
    if(req.session){
    Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.body.post_id,
        // use id from session
        post_id: req.session.user_id
    })
    .then(dbCommentData => res.json(dbCommentData))
    .cath(err => {
        console.log(err);
        res.status(400).json(err);
    });
    }
});

router.delete('/:id', (req, res) => {

});

module.exports = router;