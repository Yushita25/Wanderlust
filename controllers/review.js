const Review = require("../models/review.js");
const Listing = require("../models/listing");


module.exports.createReview =async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);  // pass review to server
    newReview.author = req.user._id
    listing.reviews.push(newReview);
    console.log(req.body); // <-- ADD THIS LINE

    await newReview.save();
     req.flash("success","New review Created!")
    await listing.save();
    console.log(req.body.review.rating);  // Should log: 5
console.log(req.body.review.comment); // Should log: Your comment


    res.redirect(`/listings/${listing._id}`)
};



module.exports.destroyReview = async(req,res)=>{
    let {id, reviewId} = req.params;

    await Listing.findByIdAndUpdate(id, {$pull:{reviews: reviewId }});
    await Review.findByIdAndDelete(reviewId);
     req.flash("success","Review Deleted!")
    res.redirect(`/listings/${id}`)
}