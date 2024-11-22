import express from "express";
import messageController from "../controllers/messageController.js";

const router = express.Router();

router
    .route("/")
    .post((req, res) => messageController.createMessage(req, res));

router
    .route("/:chatId")
    .get((req, res) => messageController.getMessages(req, res));

export default router;
