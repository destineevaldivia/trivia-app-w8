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
    res.json({message: 'This is my roooooot route! Go here--->  http://localhost:5173/'})
});

//create endpoint for /api
app.get('/api', (req,res) => {
    const url = 'https://opentdb.com/api.php?amount=10&category=28&difficulty=easy&type=multiple'
    //use fetch to make an HTTP GET request to the specified URL
    fetch(url)
        .then((response) => response.json())
        .then((data) => res.json(data))
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: 'An error occurred' });
        });
});



//server up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });