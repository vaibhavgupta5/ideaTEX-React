import express from "express";
import cors from "cors";
import userRouter from "./routes/user.route.js"; // Ensure the correct path and ".js" extension

const app = express(); // No need for TypeScript type annotations

// Enable CORS with specific origin and credentials
app.use(cors({
    origin: process.env.CORS_ORIGIN, // Replace with your frontend's URL for specific origin
    credentials: true,
}));

// Middleware to parse JSON with a size limit
app.use(express.json({
    limit: "16kb",
}));

// Middleware to parse URL-encoded data with a size limit
app.use(express.urlencoded({
    extended: true,
    limit: "16kb",
}));

// Serve static files from the "public" directory
app.use(express.static("public"));

// Define routes
app.use("/api/v1/users", userRouter); // Attach user routes

export default app;
