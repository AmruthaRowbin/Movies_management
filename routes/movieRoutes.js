
const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const auth = require('../middlewares/authMiddleware')
const role = require('../middlewares/roleMiddleware')
const {
  createMovie,
  bulkUpload,
  getMovies
} = require('../controller/movieController')

// Admin only
router.post('/', auth, role('admin'), createMovie)
router.post('/bulk-upload', auth, role('admin'), upload.single('file'), bulkUpload)

// Both Admin and User can access movie list
router.get('/', auth, getMovies);

module.exports = router;
