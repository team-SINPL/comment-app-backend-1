const Sequelize = new require('sequelize');
const db = require('../config/connection');
const DataTypes = require('sequelize/lib/data-types');

const Post = db.define('post', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    heading: DataTypes.STRING,
    content: DataTypes.STRING,
    excelentCount: DataTypes.INTEGER,
    goodCount: DataTypes.INTEGER
});

module.exports = Post;
