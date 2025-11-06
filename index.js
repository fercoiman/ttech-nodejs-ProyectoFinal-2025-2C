import express from "express";
import cors from "cors";
import router from "./src/routes/products.routes.js";

const app = express();
const LOCAL_PORT = 3000;

app.use(cors());
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
