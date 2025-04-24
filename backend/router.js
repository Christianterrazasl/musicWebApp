const express = require("express");
const router = express.Router();
const uploadImage = require("./config/imagesUpload");
const uploadAudio = require("./config/audioUpload");
const generoController = require("./controllers/generoController");

//endpoints genero
router.get("/genero", generoController.getAllGeneros);
router.get("/genero/:id", generoController.getGeneroById);
router.post("/genero", uploadImage.single("imagenUrl"), generoController.postGenero);
router.delete("/genero/:id", generoController.deleteGenero);

module.exports = router;