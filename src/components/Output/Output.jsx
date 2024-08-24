import React, { useState } from 'react';
import './Output.css';
import Modal from '../Modal/Modal';

const Output = ({ data }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentCharacter, setCurrentCharacter] = useState(null);

    const showModal = (id) => {
        setCurrentCharacter(id);
        setIsVisible(true);
    };

    const hideModal = () => {
        setIsVisible(false);
    };

    return (
        <div className="output-container">
            {data.length > 0 ? (
                data.map((el) => (
                    <div key={el.id} className="character-card">
                        <div>
                            <h3>{el.name}</h3>
                            <img src={el.image} alt={el.name} />
                        </div>
                        <button onClick={() => showModal(el.id)}>More...</button>
                        {isVisible && currentCharacter === el.id && (
                            <Modal hide={hideModal} item={el} />
                        )}
                    </div>
                ))
            ) : (
                <h1 className="server-error">Server Error</h1>
            )}
        </div>
    );
};

export default Output;
