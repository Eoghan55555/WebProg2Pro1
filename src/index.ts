import express, { Application } from "express";
import morgan from "morgan";
import catRoutes from '../routes/cats';  // Import the cat routes
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 3000;

const app: Application = express();

// Middleware
app.use(morgan("tiny"));
app.use(express.json()); 
// Use the cat routes
app.use('/cats', catRoutes);  // Add the cats route
//Server
app.listen(PORT, () => {
  console.log("Server is running on port --", PORT);
});
