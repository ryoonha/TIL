import express from "express";

const router = express.Router(); // app 아닌 새로운 router 생성

// router에 처리하고 싶은 것을 등록
router.get("/", (req, res) => {
  res.status(201).send("GET: /posts");
});

router.post("/", (req, res) => {
  res.status(201).send("POST: /posts");
});

router.put("/:id", (req, res) => {
  res.status(201).send("PUT: /posts/:id");
});

router.delete("/:id", (req, res) => {
  res.status(201).send("DELETE: /posts/:id");
});

export default router;
