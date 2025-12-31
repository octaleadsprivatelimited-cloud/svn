import express from 'express';
import contactRoutes from './contact.routes.js';
import adminRoutes from './admin.routes.js';
import productRoutes from './product.routes.js';

const router = express.Router();

router.use('/contact', contactRoutes);
router.use('/admin', adminRoutes);
router.use('/products', productRoutes);

export default router;

