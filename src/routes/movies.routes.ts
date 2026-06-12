import { Router } from "express"
import { moviesController } from "../controllers/moviesController"

const router = Router()

router.get("/", moviesController.list)
router.get("/:id", moviesController.listById)
router.post("/", moviesController.create)
router.patch("/:id", moviesController.update)
router.delete("/:id", moviesController.delete)

export default router