import React, { useEffect, useState } from 'react';

function MyGenerator(props) {
    const [currentLyric, setLyric] = useState();
    // currentLyric gets updated with content every time the user clicks the button or press 'Enter'

    function displayLyric() {

        document.getElementsByTagName("h2")[0].classList.add("d-none");
        document.querySelector("footer").classList.remove("fixed-bottom");

        let randomIndex = Math.floor(Math.random() * props.lyrics.length);

        document.body.style.background = props.lyrics[randomIndex].background;

        setLyric((prev) => {
            return prev = (<>
                <img src={props.lyrics[randomIndex].artwork} id="artwork" className="img-fluid mb-3 px-3" alt={props.lyrics[randomIndex].alt} />
                <div>
                    <p class="p-3" id="lyrics">{props.lyrics[randomIndex].lyric}</p>
                    <p class="fst-italic" id="artist">{props.lyrics[randomIndex].author}</p>
                </div>
            </>
            );
        });
    };

    useEffect(() => {
        // as soon as the component renders the useEffect mounts an event listener on the document
        const keyDownHandler = event => {

            if (event.key === 'Enter') {
                event.preventDefault();
                displayLyric();
            };
        };

        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, []);

    return (
        <>
            <div className="d-md-flex align-items-center justify-content-center px-md-5">
                {currentLyric}
                {/* after the 1st click or press on 'enter' 'currentLyric' will be updated with random lyrics; at every click or press the content will be updated */}
            </div>

            <button id="generator" className="btn btn-dark rounded-0 mt-3" onClick={displayLyric}>Generate!</button>

        </>
    )
};

export default MyGenerator;