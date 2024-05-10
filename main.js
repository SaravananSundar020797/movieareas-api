import express from 'express';

const app = express();
const PORT = 6969; 

app.get('/',(req,res)=>{
  res.json({msg:"Hellow Students!"})
})



// CRUD functionality of movies

// R - For Reading

app.get('./movies',(req,res) => {
  
});

// C - For creating movies

app.post('./movies',() => {

});

// U - For update movies

app.put('./movies/:id',() => {

});

// D - For delete movies

app.delete('./movies/:id',() => {

})


app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
})