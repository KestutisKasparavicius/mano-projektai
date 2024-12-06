import express from 'express';
import routes from '../controllers/index.js';
const router = express.Router();

router.get('/api/book', routes.index);
export default router;
