const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "coinsdb",
});
// SELECT m.name as metal_name,coins.title, c.name as country_name, c.id as country_id, coins.id FROM coins
//     LEFT JOIN countries as c ON c.id = coins.country_id
//     LEFT JOIN metals as m ON m.id = coins.metal_id
app.get("/countries", (req, res) => {
  connection.query(`select * from countries`, (err, data) => {
    res.send(data);
  });
});
app.get("/metal", (req, res) => {
  connection.query(`select * from metals`, (err, data) => {
    res.send(data);
  });
});
app.get("/quality", (req, res) => {
  connection.query(`select quality from coins`, (err, data) => {
    res.send(data);
  });
});

app.listen(3001, () => {
  console.log("Example app listening on port 3001!");
});
