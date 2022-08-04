const Catogory = require('../models/Catogories')
module.exports = {
  getCatogories: async (req, res) => {
    try {
      const AllCatogory = await Catogory.find();
      res.send(AllCatogory)
      console.log(AllCatogory, "-----------------------");
      console.log("comme in");
    } catch (e) {
      res.status(400).send(e)
    }
  },

  addCatogories: async (req, res) => {
    try {
    //   req.body.image = req.file.path;
      const newCatogory = new Catogory(req.body)
      console.log('============>', req.file)
      console.log('============>', req.body)
      const addCatogory = await newCatogory.save();
      res.status(200).json(addCatogory);
      console.log(addCatogory, "=============saved product");
    } catch (e) {
      console.log("comming here");
      res.status(500).json(e)
    }
  },
  
}
