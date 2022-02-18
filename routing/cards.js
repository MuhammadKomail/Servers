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
    const imageUrl = request.body.imageUrl;
    const fabric = request.body.fabric;
    const availability = request.body.availability;
    const quantity = request.body.quantity;
    const category = request.body.category;
    const subCategory = request.body.subCategory;
    const brand = request.body.brand;
    const skuNumber = request.body.skuNumber;
    const size = request.body.size;
    const weddingWear = request.body.weddingWear;
    const collections = request.body.collections;

    const newCards = new Cards({
        title,
        description,
        orignalPrice,
        discountPrice,
        imageUrl,
        fabric,
        availability,
        quantity,
        category,
        subCategory,
        brand,
        skuNumber,
        weddingWear,
        collections,
        size
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
            card.orignalPrice = Number(request.body.orignalPrice);
            card.discountPrice = Number(request.body.discountPrice);
            card.imageUrl = Array(request.body.imageUrl);
            card.fabric = request.body.fabric;           
            card.availability = request.body.availability;
            card.quantity = Number(request.body.quantity);
            card.category = request.body.category;
            card.subCategory = Array(request.body.subCategory);
            card.brand = request.body.brand;
            card.skuNumber = request.body.skuNumber;
            card.weddingWear = request.body.weddingWear;
            card.collections = request.body.collections;
            card.size = Array(request.body.size);
            

            card.save()
                .then(() => response.json('Cards updated!'))
                .catch(err => response.status(400).json('Error: ' + err));
        })
        .catch(err => response.status(400).json('Error: ' + err));
});

module.exports = router;