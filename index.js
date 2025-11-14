import express from "express";
import cors from "cors";
import router from "./src/routes/products.routes.js";

const app = express();
const LOCAL_PORT = 3000;

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/products", router);

app.post("/products", (req, res) => {
  const { name, price } = req.body;
  const product = {
    //id: products.length + 1,
    id: Math.max(...products.map((p) => p.id)) + 1,
    name,
    price,
  };
});
app.listen(LOCAL_PORT, () => {
  console.log(`Servidor Express en http://localhost:${LOCAL_PORT}`);
});

const corsOptions = {
  // Dominios permitidos
  origin: ["https://example.com", "https://anotherdomain.com"],
  // Métodos HTTP permitidos
  methods: ["GET", "POST", "PUT", "DELETE"],
  // Encabezados permitidos
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  // Permitir cookies o credenciales
};

app.use((req, res, next) => {
  // // Permitir un dominio
  res.header("Access-Control-Allow-Origin", "https://example.com");
  // Métodos permitidos
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT,DELETE");
  // Encabezados permitidos
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  // Permitir cookies/credenciales
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

//Middleware para manejar errores
app.use((req, res, next) => {
  res.status(404).send("Ruta no válida o recurso no encontrado");
  // 400 (bad request)
  // 401 (unauthorized)
  // 500 (internal server error)
});
