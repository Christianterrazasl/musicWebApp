const {Cancion, Artista, Album} = require('../models');

exports.getAllCancions = async (req, res) => {
    try {
        const cancions = await Cancion.findAll();
        res.status(200).json(cancions);
    } catch (error) {
        console.error("Error al obtener los géneros: ", error);
        res.status(500).json({ message: "Error al obtener los géneros" });
    }
}

exports.getCancionByIdAlbum = async (req, res) => {
    const { idAlbum } = req.params;
    try {
        const cancions = await Cancion.findAll({
            where: { idAlbum },
        });
        if (!cancions) {
            return res.status(404).json({ message: "Género no encontrado" });
        }
        res.status(200).json(cancions);
    } catch (error) {
        console.error("Error al obtener el género: ", error);
        res.status(500).json({ message: "Error al obtener el género" });
    }
}

exports.getCancionById = async (req, res) => {
    const { id } = req.params;
    try {
        const cancion = await Cancion.findByPk(id);
        if (!Cancion) {
            return res.status(404).json({ message: "Género no encontrado" });
        }
        res.status(200).json(cancion);
    } catch (error) {
        console.error("Error al obtener el género: ", error);
        res.status(500).json({ message: "Error al obtener el género" });
    }
}

exports.postCancion = async (req, res) => {
    const {idAlbum} = req.params;
    const { nombre } = req.body;
    const imagenUrl = req.file ? "uploads/audios/"+ req.file.filename : null;
    try {
        const nuevoCancion = await Cancion.create({ nombre, imagenUrl, idAlbum });
        res.status(201).json(nuevoCancion);
    } catch (error) {
        console.error("Error al crear el género: ", error);
        res.status(500).json({ message: "Error al crear el género" });
    }
}

exports.deleteCancion = async (req, res) => {
    const { id } = req.params;
    try {
        const cancion = await Cancion.findByPk(id);
        if (!cancion) {
            return res.status(404).json({ message: "Género no encontrado" });
        }
        await Cancion.destroy({ where: { id } });
        res.status(200).json({ message: "Género eliminado" });
    } catch (error) {
        console.error("Error al eliminar el género: ", error);
        res.status(500).json({ message: "Error al eliminar el género" });
    }
}

exports.getCancionByIdArtista = async (req,res)=>{
    const {idArtista} = req.params;
    try{
        const artista = await Artista.findByPk(idArtista, {include: {model: Album, include: {model: Cancion}}});
    if (!artista) {
        return res.status(404).json({ message: "Artista no encontrado" });
    }
    return res.status(200).json(artista);

    }catch(err){
        res.status(500).json({ message: "Error al obtener el artista" });
    }
    

}
