/*
 * @Author: Rohan Wijesundara
 * @Date: 2020-07-28
 */
const Sequelize = require('sequelize');
const DataTypes = require('sequelize/lib/data-types');
const Constants = require('../common/constant');
var config = require('../common/database.json')[process.env.NODE_ENV || 'local'];

// Initialize database connection
var sequelize = new Sequelize(
	config.database,
	config.user,
	config.password, {
		host: config.host,
		dialect: config.dialect,
		port: config.port
	}
);
var models = [
	{file:'posts', class: 'Post'},
	{file:'comments', class: 'Comment'},
	{file:'replies', class: 'Reply'}
]

models.forEach(function (model) {
	module.exports[model.class] = sequelize.import('../../../data/' + model.file);
});

(function (models) {

	
	models.UserRole.hasMany(models.User,{ foreignKey: 'role_id', sourceKey: 'id' });
	models.User.belongsTo(models.UserRole,{ foreignKey: 'id', sourceKey: 'role_id' });


	models.Company.hasMany(models.User,{ foreignKey: 'id', sourceKey: 'company_id' });
	models.User.belongsTo(models.Company,{ foreignKey: 'company_id', sourceKey: 'id' });



})(module.exports);