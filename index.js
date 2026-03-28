import express from "express";
import bodyParser from "body-parser";
import pg from 'pg';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: 'localhost',
  database: "world",
  password: "Sarokan@2414",
  port: 5432
});

db.connect();

app.get("/", async (req, res) => {

  const result = await db.query("SELECT country_code FROM visited_countries");
  const countriesInString = result.rows.map(country => country.country_code).join(',');
  const countriesCount = result.rows.length;
  res.render('index.ejs', { countries: countriesInString, total: countriesCount });
  //Write your code here.
});

app.post('/add', async (req, res) => {

  const country = req.body.country;
  const countryCodeRaw = await db.query("SELECT country_code FROM countries WHERE country_name = $1", [country]);
  const countryCode = countryCodeRaw.rows[0].country_code;
  await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [countryCode]);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
