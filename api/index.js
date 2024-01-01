import express from "express"
import cors from "cors"
import bodyParser from "body-parser";
import mongoose from "mongoose";
import auth from "./auth/auth.js";
const app=express();



app.use(cors());
app.use(bodyParser());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use("/", auth);
app.listen(3000,(req,res)=>{
    console.log(`port is runnung on 3000`)
})
const MONGO_URI =
  "mongodb://localhost:27017/food-app";
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });
