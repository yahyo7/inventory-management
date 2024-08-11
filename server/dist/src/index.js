"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
// Route imports
const dashboardRoutes_1 = __importDefault(require("./routes/dashboardRoutes"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const expenseRoutes_1 = __importDefault(require("./routes/expenseRoutes"));
// configurations
dotenv_1.default.config();
// Create an instance of an Express application
const app = (0, express_1.default)();
// Middleware to parse incoming JSON request bodies
app.use(express_1.default.json());
// Add security headers to responses using Helmet
app.use((0, helmet_1.default)());
// Configure Helmet to set Cross-Origin Resource Policy header
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: "cross-origin" }));
// Log HTTP requests with Morgan in 'common' format
app.use((0, morgan_1.default)("common"));
// Parse incoming JSON request bodies
app.use(body_parser_1.default.json());
// Parse URL-encoded request bodies (typically from HTML forms)
app.use(body_parser_1.default.urlencoded({ extended: false }));
// Enable Cross-Origin Resource Sharing (CORS) to allow requests from different origins
app.use((0, cors_1.default)());
// routes
app.use("/dashboard", dashboardRoutes_1.default);
app.use("/products", productRoutes_1.default);
app.use("/users", userRoutes_1.default);
app.use("/expenses", expenseRoutes_1.default);
// server
const port = Number(process.env.PORT) || 3001;
app.listen(port, "0.0.0.0", () => {
    console.log(`Server is running on port ${port}`);
});
