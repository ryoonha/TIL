import express from "express";

const router = express.Router(); // app 아닌 새로운 router 생성

// router에 처리하고 싶은 것을 등록
router.get("/", (req, res) => {
  res.status(201).send("GET: /users");
});

export default router;
