import { Router } from "express"
import { genresController } from "../controllers/genresController"

const router = Router()

router.get("/", genresController.list)
router.post("/", genresController.create)
router.get("/:id", genresController.listById)
router.patch("/:id", genresController.update)
router.delete("/:id", genresController.delete)

export default router