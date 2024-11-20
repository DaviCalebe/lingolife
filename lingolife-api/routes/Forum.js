import express from "express";
const router = express.Router();
import verifyToken from "../helpers/verify-token.js";

import forumController from "../controllers/forumController.js";
import upload from "../configMulter/multer.js";


router.route("/publication")
    .post(verifyToken, upload.single("fileSrc"), forumController.create);

router
  .route("/publication")
  .get((req, res) => forumController.getAll(req, res)); // http://127.0.0.1:5000/forum/publication

router
  .route("/publication/:id")
  .get((req, res) => forumController.get(req, res)); //http://127.0.0.1:5000/forum/publication/{id}

router
  .route("/publication/:id")
  .delete((req, res) => forumController.delete(req, res)); //http://127.0.0.1:5000/forum/publication/{id}

router
  .route("/publication/:id")
  .put((req, res) => forumController.update(req, res)); //http://127.0.0.1:5000/forum/publication/{id}

export default router;
