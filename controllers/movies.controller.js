export const MovieIndex = (req,res) => {
  res.send("Read a movie");
};

export const MovieCreate = (req,res) => {
  // id, title, desc
  // Created the movie info
  console.log(req.body);
  return res.json(req.body);
};

export const MovieUpdate = (req,res) => {
  res.send("Update a movie");
};

export const MovieDelete = (req,res) => {
  res.send("Delete a movie");
};