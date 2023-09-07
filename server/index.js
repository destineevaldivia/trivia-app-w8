import express from "express";
import cors from "cors";
import "dotenv/config";

//create instance of express.js framework application 
const app = express();
//enable CORS middleware
app.use(cors())
//Set the port that you want the server to run on
const PORT = 5005;

//create root route endpoint
app.get('/', (req,res) => {
    res.json({message: 'This is my roooooot route!'})
});

//create endpoint for /api
app.get('/api', (req,res) => {
    res.json({message: 'Hola, Destino!'})
});

//fetch api from webserver
const url = 'https://opentdb.com/api.php?amount=10&category=28&difficulty=easy&type=multiple'
fetch(url)
.then((res) => res.json())
.then((data) => {
  res.send({ data })
})
.catch((err) => {
  console.log(err);
  res.send('An error occurred');
});

//server up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });