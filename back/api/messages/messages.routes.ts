import { Router } from "express";
import * as controller from "./messages.controllers";
import * as validatiom from "./messages.validation";
import { errorHandler } from "../../config/expressValidator";

const router = Router();

router.get("/", controller.getAllMessages as any);
router.post("/", validatiom.newMessage, errorHandler, controller.newMessage as any);
router.delete("/", controller.deleteMessages as any);

export default router;
