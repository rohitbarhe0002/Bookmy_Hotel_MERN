const Hotel = require('../models/Hotels')
module.exports = {
  getHotels: async (req, res) => {
    console.log("come in func");
   const  char =  req.body.name;
    try {

      const HotelData = await Hotel.find({ name: { $regex: `^${char}` ,$options:"$i"} });
      res.send(HotelData)
      console.log(HotelData, "-----------------------");
      console.log("comme in");
    } catch (e) {
      res.status(400).send(e)
    }
  },
  
  // getHotels: async (req, res) => {
  //   console.log("come in func");
  //  const  char =  req.body.name;
  //   try {

  //     const HotelData = await Hotel.find();
  //     res.send(HotelData)
  //     console.log(HotelData, "-----------------------");
  //     console.log("comme in");
  //   } catch (e) {
  //     res.status(400).send(e)
  //   }
  // },
  addHotels: async (req, res) => {
    try {
      req.body.image = req.file.path;
      const hotel = new Hotel(req.body)
      console.log('============>', req.file)
      console.log('============>', req.body)
      const addHotel = await hotel.save();
      res.status(200).json(addHotel);
      console.log(addHotel, "=============saved product");
    } catch (e) {
      console.log("comming here");
      res.status(500).json(e)
    }
  },
  
}
