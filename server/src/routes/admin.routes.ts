import { Router } from "express";
import { AdminController } from "../controllers/admin.controller";import { validateSchema } from "../middlewares/validate.schema.midd";

import { validateUser } from "../utils/validations/user.validate";
import { validateAdminSchema } from "../utils/validations/admin.validate";
const router = Router();


router.post("/",validateSchema(validateAdminSchema),AdminController.create);
router.get("/", AdminController.findAll);
router.get("/:id", AdminController.findOne);
router.delete("/:id", AdminController.delete);

export default router;