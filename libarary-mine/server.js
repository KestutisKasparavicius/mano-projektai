import express from 'express';
import cors from 'cors';
import { getAllBooks, getBookById } from './db.js';
import { db } from './src/db/db.js';

const app = express();

app.use(cors());
app.use(db);
app.get('/api/books', async (req, res) => {
	try {
		const books = await getAllBooks();
		res.json(books);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Failed to retrieve books' });
	}
});

app.listen(3001, () => {
	console.log('Server up on 3001');
});

app.get('/book', (req, res) => res.send('Nu zdarova'));
app.get('/bookz', async (req, res) => {
	const books = await getAllBooks();
	res.json(books[0].id);
});
