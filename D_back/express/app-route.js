import express from "express";
import postRouter from "./router/post.js";
import userRouter from "./router/users.js";

const app = express();

app.use(express.json()); // application은 express.json 사용
app.use("/posts", postRouter); // 처리하는 routes에 post라는 경로 있구나, 그 이하의 관련 아이들은 postRouter에 가면 되는구나!
app.use("/users", userRouter); // 도메인 크게 posts, users 두 개

app.listen(8080);
