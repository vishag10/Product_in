import { Router } from "express";
import * as rh from "./requesthandler/car.requesthandler.js"

const router = Router();

router.route("/addcar").post(rh.addCar)
router.route("/getcar").get(rh.getCar)


export default router;