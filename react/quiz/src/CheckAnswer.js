import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function CheckAnswer(props) {
    // bootstrap
    const [fullscreen, setFullscreen] = useState(true);

    const success = (

        <Modal show={props.showModal} fullscreen={fullscreen}>
            <Modal.Header className="d-flex justify-content-center">
                <Modal.Title>
                    <h1>Great!</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body id="successModal" className="modalBg">
                <p className="text-center">I knew you'd get it right!</p>
            </Modal.Body>
        </Modal>
    );

    let fail = (

        <Modal show={props.showModal} fullscreen={fullscreen}>
            <Modal.Header className="d-flex justify-content-center">
                <Modal.Title>
                    <h1>Oh no!</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body id="failModal" className="modalBg">
                <p className="text-center">Seems like you don't really know me THAT well...</p>
                <p><a href="index.html" tabIndex={0} target="_self">Click here</a> if you want to try one more time</p>

            </Modal.Body>
        </Modal>
    );

    let timesUp = (
        <>
            <Modal show={true} fullscreen={fullscreen}>
                <Modal.Header>
                    <Modal.Title>
                        <h1>Oh no!</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>Modal body content</Modal.Body>
            </Modal>
        </>
    );

    return (

        <>

            {props.getFinalAnswer && (
                <>
                    {success}
                </>
            )}

            {!props.getFinalAnswer && (
                <>
                    {fail}
                </>
            )}

            {props.timeLeft === 0 && (
                <>
                    {timesUp}
                </>
            )}
        </>

    );

};

export default CheckAnswer;