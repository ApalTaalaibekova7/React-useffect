import React, { useEffect, useState } from 'react';
import './Home.css';
import { API } from '../../API';
import Output from '../Output/Output';
import Pagination from '@mui/material/Pagination';

const Home = () => {
    const [data, setData] = useState([]);
    const [pagesCount, setPagesCount] = useState(20)
    const [currentPage, setCurrentPage] = useState(1) // Чтобы при входе видеть первую страницу

    const getCharacters = async () => {
        const req = await fetch(API + `?page=${currentPage}`);
        const res = await req.json();
        setData(res.results);
        setPagesCount(Math.ceil(res.info.count / res.info.pages))
       // console.log(Math.ceil(res.info.count / res.info.pages));
    };
    const togglePage = (page) => {
        setCurrentPage(page)
        window.scrollTo(0,0)
    }

    useEffect(() => {
        getCharacters();
    }, [currentPage]);

    return (
        <div className="home-container">
            <h1>Character Gallery</h1> 
            {data.length > 0 ? (
            <Output data={data} />
            ) : (
                <div className="loading">Loading characters...</div>
            )}
            <Pagination onChange={(e, page) => togglePage(page)} count={pagesCount} color="primary" />
        </div>
    );
};

export default Home;
