import React, { useEffect, useState } from 'react';
import './Home.css';
import { API } from '../../API';
import Output from '../Output/Output';

const Home = () => {
    const [data, setData] = useState([]);

    const getCharacters = async () => {
        const req = await fetch(API);
        const res = await req.json();
        setData(res.results);
    };

    useEffect(() => {
        getCharacters();
    }, []);

    return (
        <div className="home-container">
            <h1>Character Gallery</h1>
            {data.length > 0 ? (
                <Output data={data} />
            ) : (
                <div className="loading">Loading characters...</div>
            )}
        </div>
    );
};

export default Home;
