const multer = require('multer')
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const cloudinary = require('../config/cloudinary')

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'engineersworld/resumes',
    allowed_formats: ['pdf', 'doc', 'docx'],
    resource_type: 'raw',
    public_id: (req, file) => `${Date.now()}-${file.originalname.split('.')[0]}`,
  },
})

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, 
})

module.exports = upload
