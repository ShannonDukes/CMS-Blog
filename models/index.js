const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Create associations
Post.belongsTo(User, {
    foreignKey: 'userId'
});

Comment.belongsTo(User, {
    foreignKey: 'userId'
});

Post.hasMany(Comment, {
    foreignKey: 'postId'
});

module.exports = { User, Post, Comment };