import express from 'express';
import {
  createContact,
  getContacts,
  getContact,
  deleteContact,
} from '../controllers/contact.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/', createContact);
router.get('/', protect, getContacts);
router.get('/:id', protect, getContact);
router.delete('/:id', protect, deleteContact);

export default router;

