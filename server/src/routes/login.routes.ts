import { NextFunction, Request, Response, Router } from "express";
import { AccountController } from "../controllers/login.controller";

const router = Router();

router.post("/", AccountController.login);


export default router;