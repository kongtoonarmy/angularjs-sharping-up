var app = angular.module('myApp', []);
app.controller('ReviewController', function() {
    this.products = gem;
});

var gem = [
    {
        name: 'iPad Mini 2',
        price: 16790.95,
        description: 'Description of iPad Mini 2',
        canPurchase: true,
        soldOut: true,
        images: [
            {
                full: 'ipad-mini2.jpg',
                thumb: 'ipad-mini2.jpg'
            }
        ],
        reviews: [
            {
                stars: 5,
                body: "I love this product!",
                author: "joe@hotmail.com"
            },
            {
                stars: 1,
                body: "This product is sucks",
                author: "tim@hater.com"
            }
        ]
    },
    {
        name: 'iPhone 6s Plus',
        price: 29000,
        description: 'Description of iPhone 6s Plus',
        canPurchase: false,
        soldOut: false,
        images: [
            {
                full: 'iphone6s-plus.jpg',
                thumb: 'iphone6s-plus.jpg'
            }
        ],
        reviews: [
            {
                stars: 2,
                body: "I love this product!",
                author: "alan@hotmail.com"
            },
            {
                stars: 3,
                body: "This product is sucks",
                author: "don@hater.com"
            }
        ]
    }
];
