
/**
 * This file contains the relevant information
 * and definitions for the reviews. The array of
 * the products will be seeded to the database.
 */

var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/collage');

var products = [

    new Product({
        imagePath: '../images/collage1.png',
        title: 'The Lake',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis nulla quis nibh odio aliquam.',
        rating: 8
    }),
    new Product({
        imagePath: '../images/collage2.png',
        title: 'The Winter Tree',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis nulla quis nibh odio aliquam.',
        rating: 5
    }),
    new Product({
        imagePath: '../images/collage3.png',
        title: 'The Summer Tree',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis nulla quis nibh odio aliquam.',
        rating: 5
    }),
    new Product({
        imagePath: '../images/collage4.png',
        title: 'The Waves',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis nulla quis nibh odio aliquam.',
        rating: 8
    }),
    new Product({
        imagePath: '../images/collage5.png',
        title: 'Serenity Tree',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis nulla quis nibh odio aliquam.',
        rating: 12
    }),
    new Product({
        imagePath: '../images/collage6.png',
        title: 'The Water',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis nulla quis nibh odio aliquam.',
        rating: 12
    }),
    new Product({
        imagePath: '../images/collage7.png',
        title: 'The Pebbles',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis nulla quis nibh odio aliquam.',
        rating: 8
    }),
    new Product({
        imagePath: '../images/collage8.png',
        title: 'The Wooden Bridge',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis nulla quis nibh odio aliquam.',
        rating: 12
    }),
    new Product({
        imagePath: '../images/collage9.png',
        title: 'The Dolphins',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis nulla quis nibh odio aliquam.',
        rating: 5
    }),
    new Product({
        imagePath: '../images/collage10.png',
        title: 'The Alpacas',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis nulla quis nibh odio aliquam.',
        rating: 7
    }),
    new Product({
        imagePath: '../images/collage11.png',
        title: 'The Whale',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis nulla quis nibh odio aliquam.',
        rating: 7
    }),
    new Product({
        imagePath: '../images/collage12.png',
        title: 'The Paper Hearts',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis nulla quis nibh odio aliquam.',
        rating: 3
    }),
    new Product({
        imagePath: '../images/collage13.png',
        title: 'The Paper Flowers',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis nulla quis nibh odio aliquam.',
        rating: 3
    }),
    new Product({
        imagePath: '../images/collage14.png',
        title: 'Sky and Time',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis nulla quis nibh odio aliquam.',
        rating: 10
    }),
    new Product({
        imagePath: '../images/collage15.png',
        title: 'The Falling Leaves',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis nulla quis nibh odio aliquam.',
        rating: 6
    }),
    new Product({
        imagePath: '../images/collage16.png',
        title: 'Water of Nature',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis nulla quis nibh odio aliquam.',
        rating: 10
    }),
    new Product({
        imagePath: '../images/collage17.png',
        title: 'The Dissolving Car',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis nulla quis nibh odio aliquam.',
        rating: 12
    }),
    new Product({
        imagePath: '../images/collage18.png',
        title: 'Time and Sun',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis nulla quis nibh odio aliquam.',
        rating: 12
    }),
    new Product({
        imagePath: '../images/collage19.png',
        title: 'The Human',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis nulla quis nibh odio aliquam.',
        rating: 4
    }),
    new Product({
        imagePath: '../images/collage20.png',
        title: 'The Calm Woods',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis nulla quis nibh odio aliquam.',
        rating: 7
    }),
    new Product({
        imagePath: '../images/collage21.png',
        title: 'The Colors',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis nulla quis nibh odio aliquam.',
        rating: 5
    }),
    new Product({
        imagePath: '../images/collage22.png',
        title: 'The Juveniles',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis nulla quis nibh odio aliquam.',
        rating: 3
    }),
    new Product({
        imagePath: '../images/collage23.png',
        title: 'The Beach',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis nulla quis nibh odio aliquam.',
        rating: 4
    }),
    new Product({
        imagePath: '../images/collage24.png',
        title: 'The Temple',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis nulla quis nibh odio aliquam.',
        rating: 8
    }),
    new Product({
        imagePath: '../images/collage25.png',
        title: 'Native Art',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis nulla quis nibh odio aliquam.',
        rating: 7
    }),
    new Product({
        imagePath: '../images/collage26.png',
        title: 'The Universe',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis nulla quis nibh odio aliquam.',
        rating: 11
    }),
    new Product({
        imagePath: '../images/collage27.png',
        title: 'The Dunes',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis nulla quis nibh odio aliquam.',
        rating: 9
    })
];

var done =0;
//Loop through all the reviews and save them to the database. Exit when all products have been looped through.
for (var i = 0; i < products.length; i++){
    products[i].save(function (err,results){
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}