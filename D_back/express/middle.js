import express, { Router } from "express";
const app = express();

app.get(
  "/",
  (req, res, next) => {
    // next(route);
    next(new Error("error")); // 별도 에러처리 안 하면, 그대로 client에게 에러 보여짐
  },
  (req, res, next) => {
    console.log("first2");
    next();
  }
);

app.get("/", (req, res, next) => {
  console.log("second");
});

app.use((req, res, next) => {
  res.status(404).send("Not available!");
});

app.use((error, req, res, next) => {
  console.error(error); // 서버에게 에러 전달
  res.status(500).send("Soory, try later!"); // client에게
});

app.listen(8080);
