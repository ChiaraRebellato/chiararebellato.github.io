window.onload = function () {

    let apiKey = "e04238ed15ea8ad46108a295578b96ef";

    // funzione asincrona che restituisce una Promise; richiesta da API
    async function getGenres() {

        try {

            let response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);
            if (response.ok) {

                const jsonResponse = await response.json();
                return jsonResponse.genres;
            }

        } catch (error) {
            console.log(error);
        };
    };

    // funzione per creare le opzioni della lista dai dati ottenuti dalla richiesta HTTP
    const generateList = (list) => {

        let parent = document.getElementById("selectGenreList");

        for (let i = 0; i < list.length; i++) {
            let option = document.createElement("option");
            option.value = list[i].name;
            option.id = list[i].id;
            option.innerHTML = list[i].name
            parent.append(option);
        };
    };

    // funzione asincrona per manipolare la Promise
    async function displayGenres() {
        try {
            // salvare in una variabile il risultato della funzione precedente
            let resolve = await getGenres();
            generateList(resolve);
        } catch (error) {
            document.write(error.message);
        };
    };
    //getGenres().then(generateList);

    displayGenres();

    let selectedGenre;
    let selectedGenreValue;

    // salvare genere selezionato
    document.getElementById("indexButton").addEventListener("click", function (e) {
        //e.preventDefault();
        // evitare il refresh
        let genres = document.getElementById("selectGenreList");
        selectedGenre = genres.options[genres.selectedIndex].id;
        selectedGenreValue = genres.options[genres.selectedIndex].value;
        document.getElementById("indexButton").setAttribute("href", `results.html?genre=${selectedGenre}&${selectedGenreValue}`);
    });

};