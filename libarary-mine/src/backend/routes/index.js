import express from 'express';
import routes from '../controllers/index.js';
const router = express.Router();

router.get('/api/book', routes.index);
router.get('/api/book/:id', routes.idParamValidator(), routes.show);
router.post('/api/create', routes.store);
router.put('/api/edit/:id', routes.update);
router.delete('/api/delete/:id', routes.destroy);
export default router;
