import express, { Application, Request, Response } from "express";
import cors from 'cors';
const app: Application = express()
const port = 5000;

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Testing
app.get('/', (req:Request, res:Response ) => {
    res.send('working Successfully')
})

export default app;