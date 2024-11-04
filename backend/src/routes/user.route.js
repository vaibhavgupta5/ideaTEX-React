import { Router } from "express";
import { registerTeam } from "../controllers/user.controllers.js"; // Add ".js" extension

const userRouter = Router();

// Define the route for registering a team
userRouter.post("/register", registerTeam);

export default userRouter;
