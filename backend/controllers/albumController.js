const {Album} = require('../models');

exports.getAllAlbums = async (req, res) => {
    try {
        const albums = await Album.findAll();
        res.status(200).json(albums);
    } catch (error) {
        console.error("Error al obtener los géneros: ", error);
        res.status(500).json({ message: "Error al obtener los géneros" });
    }
}

exports.getAlbumByIdArtista = async (req, res) => {
    const { idArtista } = req.params;
    try {
        const albums = await Album.findAll({
            where: { idArtista },
        });
        if (!albums) {
            return res.status(404).json({ message: "Género no encontrado" });
        }
        res.status(200).json(albums);
    } catch (error) {
        console.error("Error al obtener el género: ", error);
        res.status(500).json({ message: "Error al obtener el género" });
    }
}

exports.getAlbumById = async (req, res) => {
    const { id } = req.params;
    try {
        const album = await Album.findByPk(id);
        if (!Album) {
            return res.status(404).json({ message: "Género no encontrado" });
        }
        res.status(200).json(album);
    } catch (error) {
        console.error("Error al obtener el género: ", error);
        res.status(500).json({ message: "Error al obtener el género" });
    }
}

exports.postAlbum = async (req, res) => {
    const {idArtista} = req.params;
    const { nombre } = req.body;
    const imagenUrl = req.file ? "uploads/images/"+ req.file.filename : null;
    try {
        const nuevoAlbum = await Album.create({ nombre, imagenUrl, idArtista });
        res.status(201).json(nuevoAlbum);
    } catch (error) {
        console.error("Error al crear el género: ", error);
        res.status(500).json({ message: "Error al crear el género" });
    }
}

exports.deleteAlbum = async (req, res) => {
    const { id } = req.params;
    try {
        const album = await Album.findByPk(id);
        if (!album) {
            return res.status(404).json({ message: "Género no encontrado" });
        }
        await Album.destroy({ where: { id } });
        res.status(200).json({ message: "Género eliminado" });
    } catch (error) {
        console.error("Error al eliminar el género: ", error);
        res.status(500).json({ message: "Error al eliminar el género" });
    }
}
