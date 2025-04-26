const {Genero} = require('../models');

exports.getAllGeneros = async (req, res) => {
    try {
        const generos = await Genero.findAll();
        res.status(200).json(generos);
    } catch (error) {
        console.error("Error al obtener los géneros: ", error);
        res.status(500).json({ message: "Error al obtener los géneros" });
    }
}

exports.getGeneroById = async (req, res) => {
    const { id } = req.params;
    try {
        const genero = await Genero.findByPk(id);
        if (!genero) {
            return res.status(404).json({ message: "Género no encontrado" });
        }
        res.status(200).json(genero);
    } catch (error) {
        console.error("Error al obtener el género: ", error);
        res.status(500).json({ message: "Error al obtener el género" });
    }
}

exports.postGenero = async (req, res) => {
    const { nombre } = req.body;
    const imagenUrl = req.file ? "/uploads/images"+ req.file.filename : "/uploads/images/defaultGeneroImg.jgp"
    try {
        const nuevoGenero = await Genero.create({ nombre, imagenUrl });
        res.status(201).json(nuevoGenero);
    } catch (error) {
        console.error("Error al crear el género: ", error);
        res.status(500).json({ message: "Error al crear el género" });
    }
}

exports.deleteGenero = async (req, res) => {
    const { id } = req.params;
    try {
        const genero = await Genero.findByPk(id);
        if (!genero) {
            return res.status(404).json({ message: "Género no encontrado" });
        }
        await Genero.destroy({ where: { id } });
        res.status(200).json({ message: "Género eliminado" });
    } catch (error) {
        console.error("Error al eliminar el género: ", error);
        res.status(500).json({ message: "Error al eliminar el género" });
    }
}
