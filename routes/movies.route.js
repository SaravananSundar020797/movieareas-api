import express from 'express';
import {MovieCreate, MovieDelete, MovieIndex, MovieUpdate} from '../controllers/movies.controller.js'
const router = express.Router();



// CRUD functionality of movies

// R - For Reading

router.get('/', MovieIndex)

// C - For creating movies

router.post('/', MovieCreate);

// U - For update movies

router.put('/:id', MovieUpdate);

// D - For delete movies

router.delete('/:id', MovieDelete);

export default router;