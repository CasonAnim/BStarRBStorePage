  import "./loadEnvironment.mjs";
  import express from "express";
  import cors from "cors";
  import products from "./routes/products.mjs";
  import topup from "./routes/topup.mjs";
  import authRoutes from "./routes/auth.mjs";
  import userProfiles from "./routes/userProfile.mjs";
  import purchase from "./routes/purchaseLog.mjs";


  const PORT = process.env.PORT || 5050;
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use("/products", products)
  app.use("/profile", userProfiles)
  app.use("/topup", topup)
  app.use("/purchase", purchase)
  app.use("/auth", authRoutes)

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
