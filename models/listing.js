const mongoose = require("mongoose");
const review = require("./review.js")
const Schema = mongoose.Schema;


const ListingSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  image: {
    url:String,
    filename:String
  },
  price: Number,
  location: String,
  country: String,
  reviews :[
{
  type:Schema.Types.ObjectId, 
  ref:"Review",
},

],

Owner :{
  type:Schema.Types.ObjectId,
  ref:"User"

},

category:{
  type:String,
  enum:["Mountains","Arctic","Farms","Rooms","City","Castles","Beachfront","Domes"]
}
 });
ListingSchema.post("findOneAndDelete",async(listing)=>{
  if(listing){
    await review.deleteMany({_id:{ $in:listing.reviews}})
  }
})
const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;
