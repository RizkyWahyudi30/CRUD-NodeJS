// libary yang akan dipakai
const express = require("express");
const mysql = require("mysql");
const BodyParser = require("body-parser");

const app = express();

app.use(BodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "views");

const db = mysql.createConnection({
  host: "localhost",
  database: "crud-node",
  user: "root",
  password: "",
});

db.connect((err) => {
  if (err) throw err;
  console.log("database connected..");

  app.get("/", (req, res) => {
    const sql = "SELECT * FROM testingnode";
    db.query(sql, (err, result) => {
      const users = JSON.parse(JSON.stringify(result));
      res.render("index", { users: users, title: "DAFTAR NAMA ORANG" });
    });
  });

  app.post("/tambah", (req, res) => {
    const insertSql = `INSERT INTO testingnode (nama, kelas) VALUES ('${req.body.nama}', '${req.body.kelas}');`;
    db.query(insertSql, (err, result) => {
      if (err) throw err;
      res.redirect("/");
    });
  });
});

app.listen(8000, () => {
  console.log("server ready..");
});
