const multer = require('multer')
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const cloudinary = require('../config/cloudinary')

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => ({
    folder: 'engineersworld/resumes',
    resource_type: 'raw',
    format: file.originalname.split('.').pop(),
    public_id: `${Date.now()}-${file.originalname.replace(/\.[^/.]+$/, '')}`,
  }),
})

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
})

module.exports = upload
