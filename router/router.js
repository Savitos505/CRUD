import { Router } from "express";
import PostControllers from "../controllers/PostControllers.js";
import AuthController from "../controllers/AuthController.js";
const router = Router()


router.post("/goods", PostControllers.create)
router.get("/goods",PostControllers.getAll)
router.get("/goods/:id", PostControllers.getOne)
router.put("/goods/:id", PostControllers.update)
router.delete("/goods/:id", PostControllers.delete)


router.post("/register", AuthController.register)
router.post("/login", AuthController.login)
router.get("/getUser", AuthController.getUser)
router.get("/CreateRoles", AuthController.CreateRoles)

export default router





