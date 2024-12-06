import express from 'express';
import cors from 'cors';
import { db } from './src/db/db.js';
import router from './src/routes/index.js';

const app = express();

app.use(cors());
app.use(function (req, res, next) {
	req.db = db;
	next();
});

app.use(router);

app.listen(3001, () => {
	console.log('Server up on 3001');
});
