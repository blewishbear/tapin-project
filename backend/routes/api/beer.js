const express = require('express');
const router = express.Router();
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const { Beer } = require("../../db/models");


router.get('/', asyncHandler(async(req, res)=> {
    const beerList = await Beer.findAll();
    res.json({
        beerList: beerList,
    })
}));
// router.post('/', asyncHandler(async(req, res, next) => {
//     const {title, description, image} = req.body;
//     const productItems = await ProductListing.create(req.body);
//     res.json({
//         products: productItems,
//     })
// }))
module.exports = router;
