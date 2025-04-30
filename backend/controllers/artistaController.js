const {Artista, Album, Cancion} = require('../models');

exports.getAllArtistas = async (req, res) => {
    try {
        const artistas = await Artista.findAll();
        res.status(200).json(artistas);
    } catch (error) {
        console.error("Error al obtener los géneros: ", error);
        res.status(500).json({ message: "Error al obtener los géneros" });
    }
}

exports.getArtistaByIdGenero = async (req, res) => {
    const { idGenero } = req.params;
    try {
        const artistas = await Artista.findAll({
            where: { idGenero },
        });
        if (!artistas) {
            return res.status(404).json({ message: "Género no encontrado" });
        }
        res.status(200).json(artistas);
    } catch (error) {
        console.error("Error al obtener el género: ", error);
        res.status(500).json({ message: "Error al obtener el género" });
    }
}

exports.getArtistaById = async (req, res) => {
    const { id } = req.params;
    try {
        const artista = await Artista.findByPk(id);
        if (!Artista) {
            return res.status(404).json({ message: "Género no encontrado" });
        }
        res.status(200).json(artista);
    } catch (error) {
        console.error("Error al obtener el género: ", error);
        res.status(500).json({ message: "Error al obtener el género" });
    }
}

exports.postArtista = async (req, res) => {
    const {idGenero} = req.params;
    const { nombre } = req.body;
    const imagenUrl = req.file ? "uploads/images/"+ req.file.filename : null;
    try {
        const nuevoArtista = await Artista.create({ nombre, imagenUrl, idGenero });
        res.status(201).json(nuevoArtista);
    } catch (error) {
        console.error("Error al crear el género: ", error);
        res.status(500).json({ message: "Error al crear el género" });
    }
}

exports.deleteArtista = async (req, res) => {
    const { id } = req.params;
    try {
        const artista = await Artista.findByPk(id);
        if (!artista) {
            return res.status(404).json({ message: "Género no encontrado" });
        }
        await Artista.destroy({ where: { id } });
        res.status(200).json({ message: "Género eliminado" });
    } catch (error) {
        console.error("Error al eliminar el género: ", error);
        res.status(500).json({ message: "Error al eliminar el género" });
    }
}


