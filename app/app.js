var app = angular.module('store', []);
app.controller('StoreController', function() {
    this.products = gem;
});

var gem = [
    {
        name: 'iPad Mini 2',
        price: 16790.95,
        description: 'Description of iPad Mini 2',
        canPurchase: true,
        soldOut: true
    },
    {
        name: 'iPhone 6s Plus',
        price: 29000,
        description: 'Description of iPhone 6s Plus',
        canPurchase: false,
        soldOut: false
    },
    {
        name: 'Nexus 5',
        price: 18900.3567,
        description: 'Description of Nexus 5',
        canPurchase: true,
        soldOut: false
    },
    {
        name: 'Samsung Galaxy S6',
        price: 22990.4,
        description: 'Description of Samsung Galaxy S6',
        canPurchase: true,
        soldOut: false
    }
];
