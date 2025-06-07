const express = require("express");
const router = express.Router({mergeParams: true});
const warpAsync= require("../utils/wrapAsync.js");
const {validateReview, isLoggedIn, isAuthor} = require("../middleware.js")
const reviewController = require("../controllers/review.js")


//Post route

router.post("/",isLoggedIn, validateReview, warpAsync(reviewController.createReview)
)


// delete review route
router.delete("/:reviewId", isLoggedIn,
    isAuthor ,warpAsync(reviewController.destroyReview)
);

module.exports = router