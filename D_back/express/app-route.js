import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: ["http://127.0.0.1:5500"], // 항상 여기서만 데이터 볼 수 있도록, 서버가 설정
  })
);

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.listen(8080);
