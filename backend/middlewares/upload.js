const multer = require('multer')
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const cloudinary = require('../config/cloudinary')
const crypto = require('crypto')

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'engineersworld/resumes',
    resource_type: 'raw',
    allowed_formats: ['pdf', 'doc', 'docx'],
    public_id: () => `resume_${crypto.randomUUID()}`,
  },
})

const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ]
    cb(null, allowed.includes(file.mimetype))
  },
})


module.exports = upload
