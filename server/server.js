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

//a route to READ the database data (get?)
app.get("/reviews", async (req, res) => {
  const query = await db.query(`SELECT * FROM reviews`);
  //we can wrangle the query response to get the rows property only.
  res.json(query.rows);
  console.log(query);
});

//a route to CREATE new data to the database (post?)
app.post("/post-reviews", (req, res) => {
  const bodyData = req.body;
  db.query(
    `INSERT INTO reviews(guest_name, check_in_date, check_out_date, travelled_from, message_to_host, favourite_moments, recommendations, rating) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
    [
      bodyData.formValues.guest_name,
      bodyData.formValues.check_in_date,
      bodyData.formValues.check_out_date,
      bodyData.formValues.travelled_from,
      bodyData.formValues.message_to_host,
      bodyData.formValues.favourite_moments,
      bodyData.formValues.recommendations,
      bodyData.formValues.rating,
    ]
  );

  // we can wrangle the query response to get the rows property only.
  res.json(query.rows);
  console.log(query);
});
