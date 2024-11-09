import mysql from 'mysql2';

const db = mysql
	.createPool({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'knygos',
	})
	.promise();

export async function getAllBooks() {
	const [result] = await db.query('SELECT * FROM knyga');
	return result;
}

export async function getBookById(id) {
	const [result] = await db.query(
		`
		SELECT * 
		FROM knyga
		WHERE id = ?`,
		[id]
	);
	return result;
}
