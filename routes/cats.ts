import express, { Router } from 'express';
import {
  getCats,
  getCatById,
  createCat,
  updateCat,
  deleteCat,
} from '../controllers/cats';  // Adjust the path if needed

const router: Router = express.Router();

// Define the cat routes
router.get('/', getCats);  // Get all cats
router.get('/:id', getCatById);  // Get a specific cat by ID
router.post('/', createCat);  // Create a new cat
router.put('/:id', updateCat);  // Update a cat by ID
router.delete('/:id', deleteCat);  // Delete a cat by ID

export default router;  // Export the router
