import express from "express";
import cors from "cors";
import KelasRoute from "./routes/KelasRoute.js";
 
const app = express();
app.use(cors());
app.use(express.json());
app.use(KelasRoute);
 
app.listen(5000, ()=> console.log('Server up and running...'));