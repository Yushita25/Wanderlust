const express = require("express");
const router = express.Router();
const warpAsync= require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner,validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js")
const multer = require('multer');
const {storage}= require("../cloudConfig.js")
const upload = multer({storage})

    

router.route("/")
.get(warpAsync(listingController.index))
.post( isLoggedIn, validateListing, upload.single("listing[image][url]"),warpAsync(listingController.createListing))


//New route

router.get("/new", isLoggedIn, ( listingController.renderNewForm));

router.route("/:id")
.put(isLoggedIn, isOwner,upload.single("listing[image][url]"),validateListing, warpAsync(listingController.updateListing))//update route
.get( warpAsync(listingController.showListing))// Show route
.delete( isLoggedIn, isOwner, warpAsync(listingController.deleteListing)
);//delete route




router.get("/:id/edit",isLoggedIn, isOwner,warpAsync(listingController.editForm))//Edit route

module.exports = router