import { Router } from "express";
import { GlobalController } from "../controllers/globalController";
const route = Router();

route.post("/empresa",GlobalController.createEmpresa);
route.post("/proyecto",GlobalController.createProject);
route.get("/",GlobalController.findGlobal);


export default route;   