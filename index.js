import http from "http";
const LOCAL_PORT = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "HTTP");
  res.end("<h1> Hola desde HTTP<h1/>");
});

server.listen(LOCAL_PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${LOCAL_PORT}`);
});
