import "./loadEnvironment.mjs";
import express from "express";
import cors from "cors";
import products from "./routes/products.mjs";
import news from "./routes/news.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/products", products)
app.use("/news", news);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
