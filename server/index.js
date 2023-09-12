import express from "express";
import cors from "cors";
import "dotenv/config";

//create instance of express.js framework application 
const app = express();
//enable CORS middleware
app.use(cors())
//Set the port that you want the server to run on
const PORT = 5005;

// setting up my root route 
app.get('/', (req,res) => {
    res.json({message: 'This is my roooooot route! Go here--->  http://localhost:5173/'})
});

//Defines the route in my app that listens for incoming GET request at /api endpoint
app.get('/api', (req,res) => {
    const url = 'https://opentdb.com/api.php?amount=10&category=28&difficulty=easy&type=multiple'
    //use fetch to make an HTTP GET request to the specified URL
    fetch(url)
    //promise chain that waits for the HTTP response to be received.
    //once received, it extracts the data from the response using .json() method
        .then((response) => response.json())
    //sends the fetched data as a JSON response back to the client that made the GET request to /api.
        .then((data) => res.json(data))
    //handles errors
        .catch((err) => {  
            console.error(err);
            res.status(500).json({ error: 'An error occurred' });
        });
});


//listen on PORT 5005, start server up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });