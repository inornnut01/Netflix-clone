import express from "express";
import cookieParser from "cookie-parser";

import { ENV_VATS } from "./config/envVars.js";
import authRoutes from "./routes/auth.route.js";
import connectMongoDB from "./config/db.js";

const app = express();
const PORT = ENV_VATS.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectMongoDB();
});
