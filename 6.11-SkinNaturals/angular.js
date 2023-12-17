/* - - - product.html - - -*/
var appAngular = angular.module("shopProduct", []);

appAngular.controller("myCtrl", function ($scope) {
    // controller per product.html

    $scope.quantity = 1;
    // <input type="number" ... /> valore di default definito da Angular

});

/* - - - index.html + shop.html - - - */

appAngular.controller("myCtrl2", function ($scope, $location) {

    $scope.products = [
        {
            ID: 1,
            article: "The Natural Moisturizer",
            category: "Face",
            price: 20.50,
            description: "Lorem",
            ingredients: ["Glycolic Acid", "Aloe Barbadensis Leaf Water", "Panax Ginseng Root Extract", "Tasmannia Lanceolata Fruit/Leaf Extract"],
            featured: "yes",
            img: "img/dayCream.webp",
        },
        {
            ID: 2,
            article: "The Naturals Conditioner",
            category: "Hair",
            price: 15.00,
            description: "Lorem",
            ingredients: ["aqua (water)", "cera alba (beeswax)", "dimethiconeisopropyl", "myristatephenoxyethanolhydroxypropyl", "guar"],
            featured: "yes",
            img: "img/hairConditioner.webp",
        },
        {
            ID: 3,
            article: "The Naturals Daytime Face Cream",
            category: "Face",
            price: 25.00,
            description: "Lorem",
            ingredients: ["aqua (water)", "cera alba (beeswax)", "dimethiconeisopropyl", "myristatephenoxyethanolhydroxypropyl", "guar"],
            featured: "yes",
            img: "img/dayCream.webp",
        },
        {
            ID: 4,
            article: "The Naturals Daytime Face Serum",
            category: "Face",
            price: 35.00,
            description: "Lorem",
            ingredients: ["aqua (water)", "cera alba (beeswax)", "dimethiconeisopropyl", "myristatephenoxyethanolhydroxypropyl", "guar"],
            featured: "yes",
            img: "img/dayCream.webp",
        },
        {
            ID: 5,
            article: "The Naturals Nigh Time Face Serum",
            category: "Face",
            price: 35.00,
            description: "Lorem",
            ingredients: ["aqua (water)", "cera alba (beeswax)", "dimethiconeisopropyl", "myristatephenoxyethanolhydroxypropyl", "guar"],
            featured: "no",
            img: "img/dayCream.webp",
        },
        {
            ID: 6,
            article: "The Naturals Body Wash",
            category: "Body",
            price: 12.00,
            description: "Lorem",
            ingredients: ["aqua (water)", "cera alba (beeswax)", "dimethiconeisopropyl", "myristatephenoxyethanolhydroxypropyl", "guar"],
            featured: "no",
            img: "img/dayCream.webp",
        },

    ];

    $scope.feature = "yes";

});
