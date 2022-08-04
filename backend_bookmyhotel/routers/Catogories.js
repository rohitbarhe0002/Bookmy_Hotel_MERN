const express = require('express')
const multer  = require('multer')
const router = express.Router()
const {getHotels,addHotels} = require('../controllers/Hotels')
const {getCatogories,addCatogories} = require('../controllers/Catogories')


// require('../upload')
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, '../upload')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, file.fieldname + '-' + uniqueSuffix)
//     }
//   })
  
//   const upload = multer({ storage: storage })

router.get('/',getCatogories)
router.post('/',addCatogories)



module.exports = router