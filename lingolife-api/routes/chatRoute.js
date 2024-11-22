import express from "express";
import chatController from "../controllers/chatController.js";

const router = express.Router();

router
    .route("/")
    .post((req, res) => chatController.createChat(req, res));

router
    .route("/:userId")
    .get((req, res) => chatController.findUserChats(req, res));

router
    .route("/find/:firstId/:secondId")
    .get((req, res) => chatController.findChat(req, res));

export default router;
