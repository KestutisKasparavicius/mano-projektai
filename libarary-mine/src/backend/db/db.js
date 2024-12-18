import mysql from 'mysql2';

export const db = mysql
	.createPool({
		host: process.env.HOST,
		user: process.env.DB_USER,
		password: process.env.PASSWORD,
		database: process.env.DATABASE,
	})
	.promise();
