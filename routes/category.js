const express = require("express");
const router = express.Router();
const warpAsync= require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner,validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js")
const multer = require('multer');
const {storage}= require("../cloudConfig.js")
const upload = multer({storage})
const Listing = require("../models/listing");

router.get("/rooms",async(req,res)=>{
let category =  await Listing.find({category:"Rooms"})
    res.render("category/room.ejs",{category})
})

router.get("/arctic",async(req,res)=>{
let category =  await Listing.find({category:"arctic"})
    res.render("category/arctic.ejs",{category})
})
    
router.get("/beachfront",async(req,res)=>{
let category =  await Listing.find({category:"Beachfront"})
    res.render("category/beachfront.ejs",{category})
 })
    
router.get("/camping",async(req,res)=>{
let category =  await Listing.find({category:"Camping"})
    res.render("category/camping.ejs",{category})
  })
    
router.get("/castles",async(req,res)=>{
let category =  await Listing.find({category:"Castles"})
    res.render("category/castles.ejs",{category})

})
    
router.get("/domes",async(req,res)=>{
let category =  await Listing.find({category:"Domes"})
    res.render("category/domes.ejs",{category})

})
    
router.get("/frams",async(req,res)=>{
let category =  await Listing.find({category:"Frams"})
    res.render("category/frams.ejs",{category})

})
    
router.get("/mountains",async(req,res)=>{
let category =  await Listing.find({category:"Mountains"})
    res.render("category/mountains.ejs",{category})

})

router.get("/cities",async(req,res)=>{
let category =  await Listing.find({category:"City"})
    res.render("category/cities.ejs",{category})

})
    
    

module.exports = router
