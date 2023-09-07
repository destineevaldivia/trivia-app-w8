import express from "express";
import cors from "cors";
import "dotenv/config";

//create instance of express.js framework application 
const app = express();
//enable CORS middleware
app.use(cors())
//Set the port that you want the server to run on
const PORT = 8081;

//create routes
app.get('/', (req,res) => {
    res.json({message: 'Hola, Destino!'})
});
