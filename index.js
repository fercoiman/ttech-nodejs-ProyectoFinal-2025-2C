import express from "express";

const app = express();
const LOCAL_PORT = 3000;

app.listen(LOCAL_PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${LOCAL_PORT}`);
});

app.get("/", (req, res) => {
  res
    .type("html")
    .send(
      "<h1>Ejercicio Practico</h1><br><h2 style=color:red>Esta el la segunda línea</h2>"
    );

  //res.send("Hola desde Express!");
});

app.get("/ping", (req, res) => {
  res.send("/pong");
});

app.get("/productos", (req, res) => {
  res.send("Bienvenido a la página de productos");
});

app.get("/productos/14", (req, res) => {
  res.send("Estás viendo el producto Nro. 14.");
});

app.get("/productos/16", (req, res) => {
  res.send("Estás viendo el producto Nro. 16.");
});
