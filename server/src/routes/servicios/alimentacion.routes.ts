import { Router } from "express";
import { AlimentacionController } from "../../controllers/servicios/alimentacion.controller";
const router = Router();


router.post("/", AlimentacionController.create);
router.get("/custom", AlimentacionController.findCustom);
router.delete("/:id", AlimentacionController.delete);

export default router;