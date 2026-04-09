import { Router } from "express";
import PostControllers from "../controllers/PostControllers.js";
import AuthController from "../controllers/AuthController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = new Router();

router.post("/goods", authMiddleware, PostControllers.create);
router.get("/goods", PostControllers.getAll);
router.get("/goods/:id", PostControllers.getOne);
router.put("/goods/:id", authMiddleware, PostControllers.update);
router.delete("/goods/:id", authMiddleware, PostControllers.delete);
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.get("/getUser", authMiddleware, AuthController.getUser);
router.get("/CreateRoles", AuthController.CreateRoles);

export default router;
