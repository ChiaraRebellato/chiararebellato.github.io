var appAngular = angular.module("shopProduct", []);

    // controller per product.html
appAngular.controller("myCtrl", function ($scope) {

    $scope.quantity = 1;
    // <input type="number" ... /> valore di default definito da Angular

})