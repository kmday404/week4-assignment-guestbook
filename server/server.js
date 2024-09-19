import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

//------
app.listen(8080, () => {
  console.log(`Server running on PORT 8080`);
});

app.get("/", (req, res) => {
  res.json({ message: "This is the root route!" });
});
