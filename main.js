import express from 'express';
import movieRoutes from './routes/movies.route.js';
import connectDB from './lib/db.js';

const app = express();
const PORT = 6969; 

// Middleware

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// ConnectDB

connectDB();

app.get('/',(req,res)=>{
  res.json({msg:"Hellow Students!"})
})



// CRUD functionality of movies

// CLIENT -> MIDDLEWARE -> SERVER

app.use('/movies', movieRoutes); 


app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
})