const { User } = require('../models');

const userData = [
    {
		username: "Prescott",
		password: "$2b$10$XtFxGR4TqrKAlH40fxdPr.FBpcgDDz23y5KR0kvsFFSb7dkn/JgO2"
	},
	{
		username: "Brady",
		password: "$2b$10$doLKjP22CzoygGYtqV9Xz.Y/5k/6da2rJ6VBJKSd3LHlXe/D1vYYy"
	},
	{
		username: "Rodgers",
		password: "$2b$10$8dk2YnQL4WSLfj2/iEiLuO6yHQ.GzMluX/AUqzGVicNJFQ.c.AYtS"
	}
];

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;
