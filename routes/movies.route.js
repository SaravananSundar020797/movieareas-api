import express from 'express';

const router = express.Router();


// CRUD functionality of movies

// R - For Reading

router.get('/', (req,res) => {
  res.send("Read a movie");
});

// C - For creating movies

router.post('/', (req,res) => {
  res.send("Create a movie");
});

// U - For update movies

router.put('/:id', (req,res) => {
  res.send("Update a movie");
});

// D - For delete movies

router.delete('/:id', (req,res) => {
  res.send("Delete a movie");
});

export default router;