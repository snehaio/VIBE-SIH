import express, {Express, Request, response, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import moodRouter from "./routes/moodRouter";

dotenv.config();

const port = process.env.PORT || 4100;
const app:Express = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=> {
  res.json({megs: "the server is running"});
})

app.use("/api/user", moodRouter);

app.listen(port, ()=> {
  console.log(`The server is running http://localhost:${port}`);
})


