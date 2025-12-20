const multer = require('multer')
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const cloudinary = require('../config/cloudinary')

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'engineersworld/resumes',
    resource_type: 'raw',
    public_id: () => `resume_${Date.now()}`,
  },
})

const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ]

  if (!allowedTypes.includes(file.mimetype)) {
    return cb(new Error('Only PDF, DOC, and DOCX files are allowed'), false)
  }

  cb(null, true)
}

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, 
  fileFilter,
})

module.exports = upload
