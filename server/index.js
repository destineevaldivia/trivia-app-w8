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


// get server up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });