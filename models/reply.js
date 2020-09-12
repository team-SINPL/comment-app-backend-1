const Sequelize = new require('sequelize');
const db = require('../config/connection');
const DataTypes = require('sequelize/lib/data-types');

const Reply = db.define('reply', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    content: DataTypes.STRING,
    type: DataTypes.STRING,
    agreeCount: DataTypes.INTEGER,
    disagreeCount: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    commentId: DataTypes.INTEGER
});

module.exports = Reply;
