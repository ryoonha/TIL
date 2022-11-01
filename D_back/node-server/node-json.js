const http = require("http");
const fs = require("fs");

// 서버는 메모리에 데이터 보관 -> client가 원할 때 데이터 보내줌
const courses = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JS" },
  { name: "Node" },
  { name: "Frontend" },
];

// client가 무엇(what)을 원하는지?
// 그리고 그것으로 어떤 것(method)을 하고 싶은지? methods 받아와서 거기에 해당하는 일을 처리
const server = http.createServer((req, res) => {
  const url = req.url; // what?
  const method = req.method; // how?, action?

  if (url === "/courses") {
    if (method === "GET") {
      res.writeHead(200, { "Content-type": "application/json" }); // status code와 header의 형태를 object로
      res.end(JSON.stringify(courses)); // 우리가 가진 courses를 json형태로 바꿔서
    } else if (method == "post") {
      // 새로운 걸 만든다면
      const body = []; // 이전 강의 버퍼 참고
      req.on("data", (chunk) => {
        console.log(chunk);
        body.push(chunk);
      });

      req.on("end", () => {
        const course = JSON.parse(Buffer.concat(body).toString); // json -> obejct
        courses.push(course);
        res.writeHead(201); // 새로 만들었으니까
        res.end();
      });
    }
  }
});

server.listen(8080);
