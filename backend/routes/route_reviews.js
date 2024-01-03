const express=require('express');
const router=express.Router();

const{ newReview, getReviews, deleteReview, getBestReviews }=require('../controllers/controller_opiniones')
const { isAuthenticatedUser } = require('../middleware/auth');

router.route('/new').put(isAuthenticatedUser, newReview)
router.route('/listReviews').get(getReviews)
router.route('/deleteReview/:id').delete(isAuthenticatedUser, deleteReview)

module.exports=router;  