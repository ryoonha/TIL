import express from "express";
import fs from "fs";
import fsAsync from "fs/promises";
import {} from "express-async-errors";

const app = express();

app.use(express.json());

app.get("/file1", (req, res) => {});

app.get("/file2", (req, res) => {
  // 미들웨어 안에서 promise 사용 -> return -> 마지막에 에러 감지 가능
  return fsAsync.readFile("/file.txt");
});

app.get("/file3", async (req, res) => {
  // async = promise + return
  const data = await fsAsync.readFile("/file.txt");
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: "Something went wrong" });
});

app.listen(8080);
