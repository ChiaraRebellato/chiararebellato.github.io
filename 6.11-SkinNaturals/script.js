window.onload = function () {
    // product.html

    const displayProductInfo = () => {
        const products = [
            {
                ID: 1,
                article: "The Natural Moisturizer",
                category: "Face",
                price: 20.50,
                description: "Lorem",
                ingredients: ["Glycolic Acid", "Aloe Barbadensis Leaf Water", "Panax Ginseng Root Extract", "Tasmannia Lanceolata Fruit/Leaf Extract"],
                qty:"2.3FL. OZ. / 70 ml",
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
                qty:"2.3FL. OZ. / 70 ml",
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
                qty:"2.3FL. OZ. / 70 ml",
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
                qty:"2.3FL. OZ. / 70 ml",
                featured: "yes",
                img: "img/dayCream.webp",
            },
            {
                ID: 5,
                article: "The Naturals Nighttime Face Serum",
                category: "Face",
                price: 35.00,
                description: "Lorem",
                ingredients: ["aqua (water)", "cera alba (beeswax)", "dimethiconeisopropyl", "myristatephenoxyethanolhydroxypropyl", "guar"],
                qty:"2.3FL. OZ. / 70 ml",
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
                qty:"2.3FL. OZ. / 70 ml",
                featured: "no",
                img: "img/dayCream.webp",
            },

        ];

        let url = window.location.search;

        let picture = document.getElementById("productPic");
        let title = document.getElementsByClassName("title");
        let description = document.getElementsByClassName("description");
        // array che contiene gli elementi con class 'title'

        let qty=document.querySelector(".qty")

        let price = document.querySelector(".price");
        let components = document.querySelector(".ingredient");

        for (let i = 0; i < products.length; i++) {
            if (url.includes(products[i].ID)) {

                picture.src = products[i].img;
                picture.setAttribute("alt",products[i].article);

                for (let j = 0; j < title.length; j++) {
                    // attribuire il valore "products[i].article" a tutti gli elementi con classe "title"
                    title[j].innerHTML = products[i].article;
                };

                for (let z = 0; z < description.length; z++) {
                    // attribuire il valore "products[i].article" a tutti gli elementi con classe "title"
                    description[z].innerHTML = products[i].description;
                }

                price.innerHTML = `$ ${products[i].price}`;

                qty.innerHTML=products[i].qty

                for (let y = 0; y < products[i].ingredients.length; y++) {
                    components.innerHTML += `${products[i].ingredients[y]}, `;
                    // altrimenti mettere ogni elemento in un nuovo array contenitore e memorizzarli separati da "," (array.split(","))
                };
            };
        };

        return picture;
        return title;
        return description;
        return price;
    };

    displayProductInfo();
}

$(document).ready(function () {
    // "filtro" per la selezione del genere

    $("#displayHair").click(function () {
        $(".Body, .Face").hide();
        $(".Hair").show();
        $("#hairDescription").removeClass("d-none");
        $("#bodyDescription").addClass("d-none");
        $("#faceDescription").addClass("d-none");
    })

    $("#displayBody").click(function () {
        $(".Face, .Hair").hide();
        $(".Body").show();
        $("#bodyDescription").removeClass("d-none");
        $("#faceDescription").addClass("d-none");
        $("#hairDescription").addClass("d-none");
    });

    $("#displayFace").click(function () {
        $(".Face").show();
        $(".Body, .Hair").hide();
        $("#faceDescription").removeClass("d-none");
        $("#bodyDescription").addClass("d-none");
        $("#hairDescription").addClass("d-none");

    });

    $("#displayAll").click(function () {
        $(".Body, .Face, .Hair").show();
        $("#bodyDescription").addClass("d-none");
        $("#faceDescription").addClass("d-none");
        $("#hairDescription").addClass("d-none");
    });
});
