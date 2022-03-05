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
    const imageUrl3 = request.body.imageUrl3;
    const imageUrl4 = request.body.imageUrl4;
    const imageUrl5 = request.body.imageUrl5;
    const imageUrl6 = request.body.imageUrl6;
    const imageUrl7 = request.body.imageUrl7;
    const imageUrl8 = request.body.imageUrl8;
    const imageUrl9 = request.body.imageUrl9;
    const imageUrl10 = request.body.imageUrl10;
    const imageUrl11 = request.body.imageUrl11;
    const imageUrl12 = request.body.imageUrl12;
    const imageUrl13 = request.body.imageUrl13;
    const imageUrl14 = request.body.imageUrl14;
    const imageUrl15 = request.body.imageUrl15;
    const imageUrl16 = request.body.imageUrl16;
    const imageUrl17 = request.body.imageUrl17;
    const imageUrl18 = request.body.imageUrl18;
    const imageUrl19 = request.body.imageUrl19;
    const imageUrl20 = request.body.imageUrl20;
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

    const newCards = new Cards({
        title,
        description,
        orignalPrice,
        discountPrice,
        imageUrl1,
        imageUrl2,
        imageUrl3,
        imageUrl4,
        imageUrl5,
        imageUrl6,
        imageUrl7,
        imageUrl8,
        imageUrl9,
        imageUrl10,
        imageUrl11,
        imageUrl12,
        imageUrl13,
        imageUrl14,
        imageUrl15,
        imageUrl16,
        imageUrl17,
        imageUrl18,
        imageUrl19,
        imageUrl20,
        fabric,
        availability,
        quantity,
        category,
        subCategory,
        brand,
        skuNumber,
        weddingWear,
        collections,
        newArrival
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
            card.imageUrl3 = request.body.imageUrl3;
            card.imageUrl4 = request.body.imageUrl4;
            card.imageUrl5 = request.body.imageUrl5;
            card.imageUrl6 = request.body.imageUrl6;
            card.imageUrl7 = request.body.imageUrl7;
            card.imageUrl8 = request.body.imageUrl8;
            card.imageUrl9 = request.body.imageUrl9;
            card.imageUrl10 = request.body.imageUrl10;
            card.imageUrl11 = request.body.imageUrl11;
            card.imageUrl12 = request.body.imageUrl12;
            card.imageUrl13 = request.body.imageUrl13;
            card.imageUrl14 = request.body.imageUrl14;
            card.imageUrl15 = request.body.imageUrl15;
            card.imageUrl16 = request.body.imageUrl16;
            card.imageUrl17 = request.body.imageUrl17;
            card.imageUrl18 = request.body.imageUrl18;
            card.imageUrl19 = request.body.imageUrl19;
            card.imageUrl20 = request.body.imageUrl20;
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
            
            card.save()
                .then(() => response.json('Cards updated!'))
                .catch(err => response.status(400).json('Error: ' + err));
        })
        .catch(err => response.status(400).json('Error: ' + err));
});

module.exports = router;