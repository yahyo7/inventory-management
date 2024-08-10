import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
// Route imports
import dashboardRoutes from "./routes/dashboardRoutes";
import productRoutes from "./routes/productRoutes";
import userRoutes from "./routes/userRoutes";
// configurations
dotenv.config();
// Create an instance of an Express application
const app = express();

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// Add security headers to responses using Helmet
app.use(helmet());

// Configure Helmet to set Cross-Origin Resource Policy header
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// Log HTTP requests with Morgan in 'common' format
app.use(morgan("common"));

// Parse incoming JSON request bodies
app.use(bodyParser.json());

// Parse URL-encoded request bodies (typically from HTML forms)
app.use(bodyParser.urlencoded({ extended: false }));

// Enable Cross-Origin Resource Sharing (CORS) to allow requests from different origins
app.use(cors());

// routes
app.use("/dashboard", dashboardRoutes)
app.use("/products", productRoutes)
app.use("/users", userRoutes)

// server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
