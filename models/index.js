const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

// create associations
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'Cascade'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'cascade'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'Cascade'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'Cascade'
});

// for comments many to many
User.belongsToMany(Post, {
    through: Comment,
    as: 'commented_posts',
    foreignKey: 'user_id'
});

// ////////////////////////////
Post.belongsToMany(User, {
    through: Comment,
    aws: 'commented_posts',
    foreignKey: 'post_id'
});
// ///////////////////////////

// for posts one to many
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'Cascade'
});

// for user
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'Cascade'
});



module.exports = { User, Post, Comment };