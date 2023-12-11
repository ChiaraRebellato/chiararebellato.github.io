var appAngular = angular.module("shopProduct", []);

appAngular.controller("myCtrl", function ($scope) {
    // controller per product.html

    $scope.quantity = 1;
    // <input type="number" ... /> valore di default definito da Angular

})