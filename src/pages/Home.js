import React from 'react';
import VideoGrid from '../components/Grid/VideoGrid';
import Pagination from '../components/pagination/Pagination';
import Tags from '../components/Tags/Tags';

const Home = () => {
    return (
        <>
            <Tags />
            <VideoGrid />
            <Pagination />
        </>
    );
};

export default Home;