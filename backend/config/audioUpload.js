// Almacenamiento para audios
const audioStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/audios/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  });
  
  // Filtro para aceptar solo archivos de audio
  const audioFileFilter = function (req, file, cb) {
    if (file.mimetype.startsWith('audio/')) {
      cb(null, true);
    } else {
      cb(new Error('Solo se permiten archivos de audio'), false);
    }
  };
  
  const uploadAudio = multer({
    storage: audioStorage,
    fileFilter: audioFileFilter
  });

  module.exports= uploadAudio;
  