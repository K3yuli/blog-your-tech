const { ValidationError } = require('sequelize/dist');
const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

// create associations
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

// for comments many to many
User.belongsToMany(Post, {
    through: Comment,
    as: 'commented_posts',
    foreignKey: 'user_id'
});

Post.belongsToMany(User, {
    through: Comment,
    aws: 'commented_posts',
    foreignKey: 'post_id'
});

// for posts one to many
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// for user
Post.belongsTo(User, {
    foreignKey: 'user_id',
});



module.exports = { User, Post, Comment };