import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import route from './routes/movieRoute.js';

const app=express();
app.use(express.json())
app.use(cors())
dotenv.config();

const PORT=process.env.PORT
const mongoDbUrl = process.env.mongoDb;

mongoose.connect(mongoDbUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err,"err"));

app.get("/",(res,req)=>{
    console.log("done");
    res.json({message:"done"})
})
app.use("/api",route)


app.listen(PORT,function(){
    console.log(`Server is runnig on Port ${PORT}`)
})