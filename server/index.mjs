  import "./loadEnvironment.mjs";
  import express from "express";
  import cors from "cors";
  import products from "./routes/products.mjs";
  import topup from "./routes/topup.mjs";
  import userProfiles from "./routes/userProfile.mjs";


  const PORT = process.env.PORT || 5050;
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use("/products", products)
  app.use("/profile", userProfiles)
  app.use("/topup", topup)

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
