const router = require('express').Router();
let Cards = require('../models/cards');

router.route('/').get((request, response) => {
    Cards.find()
        .then(Cards => response.json(Cards))
        .catch(err => response.status(400).json('Error: ' + err));
});

router.route('/add').post((request, response) => {
    
    const title = request.body.title;
    const description = request.body.description;
    const orignalPrice = request.body.orignalPrice;
    const discountPrice = request.body.discountPrice;
    const imageUrl1 = request.body.imageUrl1;
    const imageUrl2 = request.body.imageUrl2;
    const fabric = request.body.fabric;
    const availability = request.body.availability;
    const quantity = request.body.quantity;
    const category = request.body.category;
    const subCategory = request.body.subCategory;
    const brand = request.body.brand;
    const skuNumber = request.body.skuNumber;
    const weddingWear = request.body.weddingWear;
    const collections = request.body.collections;
    const newArrival = request.body.newArrival;
    const smallSize = request.body.smallSize;
    const mediumSize = request.body.mediumSize;
    const largeSize = request.body.largeSize;
    const extralargeSize = request.body.extralargeSize;

    const newCards = new Cards({
        title,
        description,
        orignalPrice,
        discountPrice,
        imageUrl1,
        imageUrl2,
        fabric,
        availability,
        quantity,
        category,
        subCategory,
        brand,
        skuNumber,
        weddingWear,
        collections,
        newArrival,
        smallSize,
        mediumSize,
        largeSize,
        extralargeSize
    });
    newCards.save()
        .then(() => response.json('Card added!'))
        .catch(err => response.status(400).json('Error: ' + err));
});

router.route('/:id').get((request, response) => {
    Cards.findById(request.params.id)
        .then(exercise => response.json(exercise))
        .catch(err => response.status(400).json('Error: ' + err));
});



router.route('/:id').delete((request, response) => {
    Cards.findByIdAndDelete(request.params.id)
        .then(() => response.json('Card deleted.'))
        .catch(err => response.status(400).json('Error: ' + err));
});


router.route('/update/:id').post((request, response) => {
    Cards.findById(request.params.id)
        .then(card => {
            card.title = request.body.title;
            card.description = request.body.description;
            card.orignalPrice = request.body.orignalPrice;
            card.discountPrice = request.body.discountPrice;
            card.imageUrl1 = request.body.imageUrl1;
            card.imageUrl2 = request.body.imageUrl2;
            card.fabric = request.body.fabric;
            card.availability = request.body.availability;
            card.quantity = request.body.quantity;
            card.category = request.body.category;
            card.subCategory = request.body.subCategory;
            card.brand = request.body.brand;
            card.skuNumber = request.body.skuNumber;
            card.weddingWear = request.body.weddingWear;
            card.collections = request.body.collections;
            card.newArrival = request.body.newArrival;
            card.smallSize = request.body.smallSize;
            card.mediumSize = request.body.mediumSize;
            card.largeSize = request.body.largeSize;
            card.extralargeSize = request.body.extralargeSize;
            
            card.save()
                .then(() => response.json('Cards updated!'))
                .catch(err => response.status(400).json('Error: ' + err));
        })
        .catch(err => response.status(400).json('Error: ' + err));
});

module.exports = router;