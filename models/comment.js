const Sequelize = new require('sequelize');
const db = require('../config/connection');
const DataTypes = require('sequelize/lib/data-types');

const Comment = db.define('comment', {
    id: {
        
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    
    content: DataTypes.STRING,
    type: DataTypes.STRING,
    agreeCount: DataTypes.INTEGER,
    disagreeCount: DataTypes.INTEGER,
    postId: DataTypes.INTEGER
});

module.exports = Comment;
