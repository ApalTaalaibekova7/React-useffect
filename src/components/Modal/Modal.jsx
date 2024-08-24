import React from 'react';
import './Modal.css'
const Modal = ({item, hide}) => {
    console.log(item);
    
    if (!item) {
        return null;
    }
    return (
        <div onClick={hide} className='modal'>
            <div onClick={(e) => e.stopPropagation()} className='container'>
                <span onClick={hide} className='close'>X</span>
                <div>
                    <img src={item.image} alt={item.name} />
                    <h1>{item.name}</h1>
                    <p>Gender: {item.gender}</p>
                    <p>Status: {item.status}</p>
                    <p>Location: {item.location.name}</p> 
                    <p>Location URL: <a href={item.location.url} target="_blank" rel="noopener noreferrer">{item.location.url}</a></p> 
                </div>
            </div>
            
        </div>
    );
};

export default Modal;