var app = angular.module('myApp', []);
app.controller('PanelController', function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
        this.tab = setTab;
        console.log(this.tab);
    };

    this.isSelected = function(checkTab) {
        return this.tab === checkTab;
    };
});
