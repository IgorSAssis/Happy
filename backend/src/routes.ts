import { Router } from "express";
import multer from "multer";

import uploadConfig from "./config/upload"

import OrphanageController from "./controllers/OrphanageController";

const routes = Router();
const upload = multer(uploadConfig);

const orphanageController = new OrphanageController();

routes.get("/orphanages", orphanageController.index)
routes.get("/orphanages/:id", orphanageController.show)
routes.post("/orphanages", upload.array("images") , orphanageController.create)

export default routes;