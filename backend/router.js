const express = require("express");
const router = express.Router();
const uploadImage = require("./config/imagesUpload");
const uploadAudio = require("./config/audioUpload");
const generoController = require("./controllers/generoController");
const artistaController = require("./controllers/artistaController");
const albumController = require("./controllers/albumController");
const cancionController = require("./controllers/cancionController");

//endpoints genero
router.get("/genero", generoController.getAllGeneros);
router.get("/genero/:id", generoController.getGeneroById);
router.post("/genero", uploadImage.single("imagenUrl"), generoController.postGenero);
router.delete("/genero/:id", generoController.deleteGenero);

//endpoints artista
router.get("/artista", artistaController.getAllArtistas);
router.get("/artista/:id", artistaController.getArtistaById);
router.get("/artista/genero/:idGenero", artistaController.getArtistaByIdGenero);
router.post("/artista/:idGenero", uploadImage.single("imagenUrl"), artistaController.postArtista);
router.delete("/artista/:id", artistaController.deleteArtista);

//endpoints album
router.get("/album", albumController.getAllAlbums);
router.get("/album/:id", albumController.getAlbumById);
router.get("/album/artista/:idArtista", albumController.getAlbumByIdArtista);
router.post("/album/:idArtista", uploadImage.single("imagenUrl"), albumController.postAlbum);
router.delete("/album/:id", albumController.deleteAlbum);

//endpoints cancion
router.get("/cancion", cancionController.getAllCancions);
router.get("/cancion/:id", cancionController.getCancionById);
router.get("/cancion/album/:idAlbum", cancionController.getCancionByIdAlbum);
router.post("/cancion/:idAlbum", uploadAudio.single("archivoUrl"), cancionController.postCancion);
router.delete("/cancion/:id", cancionController.deleteCancion);



module.exports = router;