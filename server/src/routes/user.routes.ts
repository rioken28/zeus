import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { verifyToken } from "../middlewares/verify-token.midd";
import { verifyRole } from "../middlewares/role.mid";
import { Role } from "../models/enums/role.enum";
import { validateSchema } from "../middlewares/validate.schema.midd";
import { validateUser, validateUserPartial } from "../utils/validations/user.validate";

const router  = Router();

router.post('/', validateSchema(validateUser), UserController.create);
router.get('/',  UserController.findAll);
router.get('/:id', UserController.findOne);
router.delete('/:id',UserController.delete);
router.patch('/:id', validateSchema(validateUserPartial), UserController.update);

export default router;  