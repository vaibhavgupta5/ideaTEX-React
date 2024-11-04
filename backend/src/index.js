import dotenv from "dotenv";
import { connectDB } from "./lib/dbConnect.js"; // Ensure the correct path and ".js" extension
import app from "./app.js"; // Add ".js" extension

dotenv.config({
    path: "./env",
});

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at: ${process.env.PORT || 8000}`);
        });
    })
    .catch((error) => {
        console.log(`Error connecting to MongoDB: ${error}`);
    });
