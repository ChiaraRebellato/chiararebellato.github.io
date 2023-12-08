window.onload = function () {

    let lyrics = [
        [`To the "love," I left my conscience pressed between the pages of the Bible in the drawer, "What did it ever do for me" I say`,
            "Fall Out Boy",
            "img/futct.jpg",
            "radial-gradient(at 18% 99%, rgb(3, 7, 9) 0px, transparent 50%) repeat scroll 0% 0%, radial-gradient(at 97% 8%, rgb(139, 145, 147) 0px, transparent 50%) repeat scroll 0% 0%, radial-gradient(at 79% 82%, rgb(147, 148, 75) 0px, transparent 50%) repeat scroll 0% 0%, radial-gradient(at 96% 10%, rgb(61, 29, 31) 0px, transparent 50%) repeat scroll 0% 0%, radial-gradient(at 42% 20%, rgb(142, 131, 97) 0px, transparent 50%) repeat scroll 0% 0%, radial-gradient(at 57% 33%, rgb(142, 131, 97) 0px, rgb(61, 29, 31)0%) repeat scroll 0% 0%",
            "From Under The Cork Tree album artwork"
        ],

        [`"There's something wrong", she said, well of course there is "You're still alive," she said, oh, and do I deserve to be?`,
            "Pearl Jam",
            "img/ten.jpg",
            "radial-gradient(at 18% 99%, rgb(41, 22, 21) 0px, transparent 50%) repeat scroll 0% 0%, radial-gradient(at 97% 8%, rgb(144, 55, 86) 0px, transparent 50%) repeat scroll 0% 0%, radial-gradient(at 79% 82%, rgb(91, 43, 55) 0px, transparent 50%) repeat scroll 0% 0%, radial-gradient(at 96% 10%, rgb(178, 186, 198) 0px, transparent 50%) repeat scroll 0% 0%, radial-gradient(at 42% 20%, rgb(172, 71, 84) 0px, transparent 50%) repeat scroll 0% 0%, radial-gradient(at 57% 33%, rgb(41, 22, 21) 0px, rgb(91, 43, 55)0%) repeat scroll 0% 0%",
            "Ten album artwork"
        ],

        [`Even flow, thoughts arrive like butterflies`,
            "Pearl Jam",
            "img/ten.jpg",
            "radial-gradient(at 18% 99%, rgb(41, 22, 21) 0px, transparent 50%) repeat scroll 0% 0%, radial-gradient(at 97% 8%, rgb(144, 55, 86) 0px, transparent 50%) repeat scroll 0% 0%, radial-gradient(at 79% 82%, rgb(91, 43, 55) 0px, transparent 50%) repeat scroll 0% 0%, radial-gradient(at 96% 10%, rgb(178, 186, 198) 0px, transparent 50%) repeat scroll 0% 0%, radial-gradient(at 42% 20%, rgb(172, 71, 84) 0px, transparent 50%) repeat scroll 0% 0%, radial-gradient(at 57% 33%, rgb(41, 22, 21) 0px, rgb(91, 43, 55)0%) repeat scroll 0% 0%",
            "Ten album artwork"
        ],

        [`So bury me in memory, his smile's your rope, so wrap it tight around your throat`,
            "Fall Out Boy",
            "img/tttyg.jpg",
            "radial-gradient(at 18% 99%, rgb(10, 10, 9) 0px, transparent 50%) repeat scroll 0% 0%, radial-gradient(at 97% 8%, rgb(10, 10, 9) 0px, transparent 50%) repeat scroll 0% 0%, radial-gradient(at 79% 82%, rgb(11, 101, 102) 0px, transparent 50%) repeat scroll 0% 0%, radial-gradient(at 96% 10%, rgb(27, 185, 181) 0px, transparent 50%) repeat scroll 0% 0%, radial-gradient(at 42% 20%, rgb(93, 238, 239) 0px, transparent 50%) repeat scroll 0% 0%, radial-gradient(at 57% 33%, rgb(10, 10, 9) 0px, rgb(11, 101, 102)0%) repeat scroll 0% 0%",
            "Take This To Your Grave album artwork"
        ],

    ];

    const getRandomLyrics = (arr) => {

        for (let i = 0; i < arr.length; i++) {
            random = Math.floor(Math.random() * (arr.length));
            // il valore di random diventa un numero randomico da 0 a arr.length; il numero è l'indice di un item dell'array
            document.getElementById("artwork").src = arr[random][2];
            // random viene usato come l'indice da cui deve'essere recuperato l'elemento da mostrare
            document.getElementById("lyrics").innerHTML = arr[random][0];
            document.getElementById("artist").innerHTML = `- ${arr[random][1]}`;
            document.body.style.background = arr[random][3];
            document.getElementById("artwork").alt = arr[random][4];
        };

        document.getElementsByTagName("h2")[0].remove(document.getElementById("placeholder"))
        //document.getElementById("placeholder").hidden=true;

        document.querySelector("footer").classList.remove("fixed-bottom");

        document.getElementById("generator").innerHTML = "Generate!";

    };

    document.getElementById("generator").addEventListener("click", function () {
        getRandomLyrics(lyrics);
    });

    document.body.addEventListener("keypress", function (event) {
        if(event.key==="Enter"){
            getRandomLyrics(lyrics);
        }
    });

}