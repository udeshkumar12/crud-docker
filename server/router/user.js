import express from "express";
import userController from "../controllers/user.js";
const router = express.Router();

// all router are hare 

router.get("/users",userController.getAllUsers);
router.post("/users",userController.createUser);
router.get("/users/single/:id",userController.getSingleUser);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id",userController.deleteUser);



export default router;