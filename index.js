import express from "express";
import cors from "cors";
import router from "./src/routes/products.routes.js";

const app = express();
const LOCAL_PORT = 3000;

app.use(cors());
app.use("/api/products", router);

app.listen(LOCAL_PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${LOCAL_PORT}`);
});
