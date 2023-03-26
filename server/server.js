const express = require("express");
const app = express();
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "coinsdb",
});

app.get("/api", (req, res) => {
  connection.query("SELECT * FROM coins", (err, data) => {
    console.log(data);
  });
});
app.listen(3001, () => {
  console.log("Example app listening on port 3001!");
});
