import express from 'express';
import cors from 'cors';
import { getAllBooks, getBookById } from './db.js';

const app = express();

app.use(cors());

app.get('/api/books', async (req, res) => {
	try {
		const books = await getAllBooks();
		res.json(books);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Failed to retrieve books' });
	}
});

app.get('api/book/:id', async (req, res) => {
	try {
		const book = await getBookById(req.params.id);
		res.json(book);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Failed to retrieve books' });
	}
});

app.listen(3001, () => {
	console.log('Server up on 3001');
});
