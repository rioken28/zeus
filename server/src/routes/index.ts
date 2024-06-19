import { Router } from "express";
import { Application } from "express";

import user from "./user.routes";
import login from "./login.routes";
import admin from "./admin.routes";
import global from "./global.routes";
import alimentacion from "./servicios/alimentacion.routes";

export const apiRouter = (app:Application)=>{
    const router = Router();
    app.use('/api/v1', router);

    router.use('/user', user);
    router.use('/login', login);
    router.use('/admin', admin);
    router.use('/global', global);
    router.use('/servicio/alimentacion', alimentacion);
}