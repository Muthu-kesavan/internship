import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import datapi from "./route/dataapi.js";
const app = express();
dotenv.config();

const corsOptions = {
  origin:"https://https://settylapp.netlify.app",
}
app.use(cors(corsOptions));
 app.use(express.json());
 

const connect = () => {
  mongoose.set("strictQuery", false);
  mongoose
  .connect(process.env.MONGO)
  .then(()=> {
    console.log("Connected to MongoDB");
  })
  .catch((err)=>{
    throw err;
  });
};

app.use('/api/data', datapi);

app.listen(8000, ()=> {
  connect();
  console.log("server started on port 8000 ...")
});