import express from 'express';
import cors from 'cors';
import { db } from './src/backend/db/db.js';
import router from './src/backend/routes/index.js';

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
