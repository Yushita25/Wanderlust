const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL='mongodb://127.0.0.1:27017/wanderlust';
async function main() {
    await mongoose.connect(MONGO_URL)
}

main().then(()=>{
    console.log("connected to DB");
}).catch ((err) =>{
    console.log(err);
});

const initDB = async () =>{
    await Listing.deleteMany({});
  initData.data=  initData.data.map((obj)=>({...obj, Owner:'6831afc01036a7f4c48a759e'}))
    await Listing.insertMany(initData.data)
    console.log("data was saved")
};

initDB();
