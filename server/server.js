import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

const dbConnectionString = process.env.DATABASE_URL;
export const db = new pg.Pool({
  connectionString: dbConnectionString,
});

app.listen(8080, () => {
  console.log(`Server running on PORT 8080`);
});

app.get("/", (req, res) => {
  res.json({ message: "This is the root route!" });
});

//I need an endpoint to READ the data in my pets table
//We can use SQL to query our database and get the data
//Our database is not hosted locally, so we don't know how long the data takes to travel
app.get("/reviews", async (req, res) => {
  const query = await db.query(`SELECT * FROM reviews`);
  //we can wrangle the query response to get the rows property only.
  res.json(query.rows);
  console.log(query);
});
