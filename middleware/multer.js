const multer = require('multer');
const path = require('path');
const { randomUUID } = require('crypto');

// Konfigurer diskStorage med randomUUID filnavne
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/serviceplan-images');
  },
  filename: function (req, file, cb) {
    const uuid = randomUUID();
    cb(null, `serviceplan-${uuid}${path.extname(file.originalname)}`);
  }
});

// Filtyper filter - kun billeder
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif|webp/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error('Kun billeder (JPEG, PNG, GIF, WebP) er tilladt'));
  }
};

// Multer konfiguration med size limits
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // Maks 10MB pr fil
    files: 20 // Maks 20 filer
  },
  fileFilter: fileFilter
});

module.exports = upload;