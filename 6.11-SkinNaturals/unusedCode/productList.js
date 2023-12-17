const products = [
    {
        ID: 1,
        article: "The Natural Moisturizer",
        category:"Face",
        price:"20.00",
        description:"Lorem",
        ingredients:["Glycolic Acid", "Aloe Barbadensis Leaf Water", "Panax Ginseng Root Extract", "Tasmannia Lanceolata Fruit/Leaf Extract"],
        featured:"yes",
    },
    {
        ID: 2,
        article: "The Naturals Conditioner",
        category:"Hair",
        price:"15.00",
        description:"Lorem",
        ingredients:["aqua (water)", "cera alba (beeswax)", "dimethiconeisopropyl", "myristatephenoxyethanolhydroxypropyl", "guar"],
        featured:"yes",
    },
];

// programma solo javascript per display dei prodotti - non usato nel progetto

const showFeatured = () => {

    let main = document.getElementById("mainSection");
    let parent = document.createElement("div");
    parent.setAttribute("id", "parent");

    for (let i = 0; i < products.length; i++) {
        if (products[i].featured === "yes") {
            // tutto ciò che compare sulla pagina viene generato in base alla lunghezza dell'array di libri filtrati

            let container = document.createElement("div");
            // tutto quello che viene generato dev'essere contenuto da un div generato dopo il click
            // -> tanti div quanti sono gli elementi dell'array di libri filtrati

            let title = document.createElement("h2");
            let price = document.createElement("h3");
            // -> tanti elementi quanti sono gli elementi dell'array di libri filtrati

            title.innerHTML = products[i].article;
            price.innerHTML = `$ ${products[i].price}`;

            main.append(parent);
            parent.append(container);
            // i div container devono essere inclusi all'interno del doc html
            container.append(title);
            container.append(price);
        }
    };
};

const showAll = () => {

    let main = document.getElementById("mainSection");
    let parent = document.createElement("div");
    parent.setAttribute("id", "parent");

    for (let i = 0; i < products.length; i++) {
        if (products[i].featured === "yes") {
            // tutto ciò che compare sulla pagina viene generato in base alla lunghezza dell'array di libri filtrati

            let container = document.createElement("div");
            // tutto quello che viene generato dev'essere contenuto da un div generato dopo il click
            // -> tanti div quanti sono gli elementi dell'array di libri filtrati

            let title = document.createElement("h2");
            let price = document.createElement("h3");
            // -> tanti elementi quanti sono gli elementi dell'array di libri filtrati

            title.innerHTML = products[i].article;
            price.innerHTML = `$ ${products[i].price}`;

            main.append(parent);
            parent.append(container);
            // i div container devono essere inclusi all'interno del doc html
            container.append(title);
            container.append(price);
        }
    };
};