import express from "express";

const app = express();

app.get("/", (req, res, next) => {
  res.sendStatus(200);
});

app.get("/write", (req, res, next) => {
  res.sendFile("write.html");
});

app.listen(8080);
