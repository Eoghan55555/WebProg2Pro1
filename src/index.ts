import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import catRoutes from '../routes/cats';  // Import the cat routes
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 3001;

const app: Application = express();
app.use(morgan("tiny"));
// Use the cat routes
app.use('/cats', catRoutes);  // Add the cats route
app.use(express.json());

app.listen(PORT, () => {
  console.log("Server is running on port --", PORT);

});
