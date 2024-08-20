import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";

const foodRouter = express.Router();

// Routes for managing food items
foodRouter.post("/add", addFood);   // No need for multer, image URL is sent in the request body
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;
