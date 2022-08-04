const express = require('express')
const multer  = require('multer')
const router = express.Router()
const {getHotels,addHotels} = require('../controllers/Hotels')

// require('../upload')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../upload')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })

router.get('/',getHotels)
router.post('/',upload.single('image'),addHotels)



module.exports = router