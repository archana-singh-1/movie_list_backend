import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app=express();
app.use(cors())
dotenv.config();

const PORT=process.env.PORT


app.get("/",function(req,resp){
    resp.send("Home")
})


app.listen(PORT,function(){
    console.log(`Server is runnig on Port ${PORT}`)
})