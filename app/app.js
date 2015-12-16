var app = angular.module('store', []);
app.controller('StoreController', function() {
    this.products = gem;
});

var gem = [
    {
        name: 'iPad Mini 2',
        price: 18900.95,
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
    }
];
