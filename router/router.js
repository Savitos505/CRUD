import { Router } from "express";
import PostControllers from "../controllers/PostControllers.js";

const router = Router()


router.post("/goods", PostControllers.create)
router.get("/goods",PostControllers.getAll)
router.get("/goods/:id", PostControllers.getOne)
router.put("/goods/:id", PostControllers.update)
router.delete("/goods/:id", PostControllers.delete)

export default router





