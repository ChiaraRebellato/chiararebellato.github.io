/*

Note:

- se le variabili sono state create prima della loro inizializzazione è perchè il loro valore viene ripreso anche in altre parti del codice / funzioni
- i film vengono richiesti a tmdb API tramite delle richieste HTTP GET (fetch) e vengono rese asincrone con await...async
- controlli 'parziali'

*/

window.onload = function () {

    let apiKey = "e04238ed15ea8ad46108a295578b96ef";

    let url = window.location.href;

        if (!url.includes("?") || !url.includes("genre") || !url.includes("&")) {
            window.location.assign("index.html");
        };

        url = url.split("=");
        // separare l'url al segno dell'uguale
        url = url[1].split("&");
        // separare l'url al segno '&'
        let genre = url[0];
        // ID genere prescelto
        let genreValue = url[1];
        // valore genere prescelto

        if (genreValue === "Science%20Fiction") {
            genreValue = "Science Fiction";
        };

        if (genreValue === "TV%20Movie") {
            genreValue = "TV Movie";
        };

        if (genreValue.length <= 2) {
            window.location.assign("index.html");
        }

    // funzione asincrona che restituisce una Promise; richiesta da API; genere scelto dall'utente
    async function getMovies(genre) {
        // ottieni la lista di film del genere prescelto

        try {
            let resolve = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre}&adult:false`);
            if (resolve.ok) {

                const jsonResponse = await resolve.json();
                return jsonResponse.results;
            }
        } catch (error) {
            console.log(error);
        }
    };

    let parent = document.getElementById("infoContainer");
    let randomMovieIndex;
    let movieID;

    // funzione che sceglie randomicamente il film da mostrare all'utente del genere scelto precedentemente
    const displayMovies = (list) => {
        // getMovies(genre) restituisce un array contententi i film di determinati generi
        // l'array viene poi passato a displayMovies

        let title = document.createElement("h2");
        let year = document.createElement("h2");
        let genre = document.createElement("h3");
        let description = document.createElement("p");
        let reviewsContainer = document.createElement("div");
        reviewsContainer.setAttribute("id", "reviews");
        let review = document.createElement("span");

        randomMovieIndex = Math.floor(Math.random() * list.length);
        title.innerHTML = list[randomMovieIndex].title + " " + `(${list[randomMovieIndex].release_date.substring(0, 4)})`;
        genre.innerHTML = genreValue;
        description.innerHTML = list[randomMovieIndex].overview;
        movieID = list[randomMovieIndex].id;

        let star = document.createElement("img");
        star.src = "img/star.svg";

        // review.innerHTML = `${Math.round(list[randomMovieIndex].vote_average * 100) / 100} / 10`;
        review.innerHTML = `${Number(list[randomMovieIndex].vote_average.toFixed(1))} / 10`;
        reviewsContainer.append(review, star);

        /*
        let reviews=Math.round(list[randomMovieIndex].vote_average);

        for(let i=0;i<reviews;i++){
            let star=document.createElement("img");
            star.src="img/star.svg";
            star.setAttribute("alt", "Review star");
            reviewsContainer.append(star);
        };

        reviewsContainer.innerHTML += "/ 10"

        */

        if (description.innerHTML.length === 0) {
            // se non c'è la descrizione
            description.innerHTML = "Sorry, description not available.";
        };

        parent.append(title, year, genre, description, reviewsContainer);


        // displayMovies contiene inoltre una funzione che genera dei bottoni
        const likeOrDislike = () => {
            // la funzione genera due bottoni: 'like' e 'dislike'
            let parent2 = document.createElement("div");
            let parent3 = document.createElement("div");
            parent2.setAttribute("id", "buttonsContainer");
            parent3.setAttribute("id", "buttonsUnfolded");

            parent.after(parent2, parent3);

            let likeButton = document.createElement("button");
            let dislikeButton = document.createElement("button");
            likeButton.setAttribute("id", "like");
            likeButton.classList.add("btn", "bg-light");
            likeButton.innerHTML = "I like it!";
            dislikeButton.setAttribute("id", "dislike");
            dislikeButton.classList.add("btn", "bg-light");
            dislikeButton.innerHTML = "I don't like it";

            parent2.append(likeButton, dislikeButton);

            let buttonsSubtitle = document.createElement("h4");
            let par = document.createElement("p");
            let tmdbLink = document.createElement("a");

            const suggestOtherMovie = () => {
                // cliccando il tasto 'dislike' verrà suggerito all'utente un altro film dello stesso genere
                likeButton.disabled = true;

                buttonsSubtitle.innerHTML = "Oh no!" + "<br>";
                par.innerHTML = `Maybe you'll like this one instead: `;

                let randomNumber = Math.floor(Math.random() * list.length);

                if (randomNumber === randomMovieIndex) {
                    // se l'index randomico della suggestion coincide con il film già proposto all'utente allora mostra quello dopo
                    randomNumber = randomNumber + 1;
                };

                let movieTitle = document.createElement("h5");
                movieTitle.innerHTML = list[randomNumber].title;
                tmdbLink.setAttribute("href", `https://www.themoviedb.org/movie/${list[randomNumber].id}`);
                tmdbLink.setAttribute("title", `themoviedb website page for ${movieTitle.innerHTML}`);
                tmdbLink.setAttribute("tabindex", 0);
                tmdbLink.setAttribute("target", "_blank");
                tmdbLink.innerHTML = movieTitle.innerHTML;
                par.appendChild(tmdbLink);

                /*
                const displaySuggestion = (list) => {
                    // come displayMovies vengono mostrati dei film del genere prescelto
                    // in questo caso, però, non viene scelto randomicamente un solo film ma 4 random
    
                    for (let i = 0; i < Math.min(list.length, 4); i++) {
                        // si cicla per 4 volte nell'array
    
                        let randomNumber = Math.floor(Math.random() * list.length);
    
                        if (randomNumber === randomMovieIndex) {
                            // se l'index randomico di uno dei 4 film coincide con il film già proposto all'utente allora skippa
                            continue;
                        };
    
                        let link;
                        let title = document.createElement("h5");
                        link = document.createElement("a");
                        title.innerHTML = list[randomNumber].title;
    
                        link.setAttribute("href", `https://www.themoviedb.org/movie/${list[randomNumber].id}`);
                        link.classList = "movies";
                        link.classList.add("d-block");
    
                        link.innerHTML = title.innerHTML;
                        parent2.append(link);
                    };
    
                    if (description.innerHTML.length === 0) {
                        description.innerHTML = "Sorry, description not available.";
                    };
    
                    // let linkCollection = document.getElementsByClassName("movies");
                    let linkCollection = document.getElementsByTagName("a");
    
                    for (let j = 0; j < linkCollection.length; j++) {
                        if (linkCollection[j].innerHTML === linkCollection[j + 1].innerHTML) {
                            linkCollection[j].classList.add("d-none");
                        };
                    };
    
                };
                */


                parent3.append(buttonsSubtitle, par)

                dislikeButton.removeEventListener("click", suggestOtherMovie);
                /* dopo aver inviato la richiesta per ottenere i film e averli mostrati all'utente, se l'utente clicca sul bottone una seconda
                volta la funzione suggestOtherMovie() viene tolta dal bottone così che non vengano mostrati sempre più film random */
            }

            dislikeButton.addEventListener("click", suggestOtherMovie);

            const knowMore = () => {
                // cliccando sul tasto 'like' compare un link alla pagina tmbd del film mostrato all'utente
                dislikeButton.disabled = true;

                tmdbLink.setAttribute("href", `https://www.themoviedb.org/movie/${movieID}`);
                tmdbLink.setAttribute("title", `themoviedb website page for ${title.innerHTML}`);
                tmdbLink.setAttribute("tabindex", 0);
                tmdbLink.setAttribute("target", "_blank");
                tmdbLink.innerHTML = `Click here`;
                buttonsSubtitle.innerHTML = "Good to know!" + "<br>";

                par.appendChild(tmdbLink);

                par.innerHTML += " to learn more about this movie!";

                parent3.append(buttonsSubtitle, par);

                likeButton.removeEventListener("click", knowMore);

            }

            likeButton.addEventListener("click", knowMore)

        };

        likeOrDislike();
        // crea i bottoni like - dislike; attiva diverse funzioni se si clicca su like o dislike 
    };

    getMovies(genre).then(displayMovies);    // da trasformare in async...await
    // catturare il risultato della Promise ed elaborarlo con displayMovies

};