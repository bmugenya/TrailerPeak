// Movies.js

import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import data from '../utils/data'; // Import the parseVideoString function
import videoData from '../utils/data'; // Import the raw videoData string
import { FaqsContainer } from '../containers/faq'
import { Feature, OptForm } from '../components'
import Jumbotron from '../containers/jumbotron'
import Header from '../containers/header'
// Parse the videoData string


const Movies = () => {

   const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the start and end index of the videos array for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the videos to display for the current page
  const currentVideos = data.slice(startIndex, endIndex);

  // Function to handle "Next" button click
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };


 return (
    <div className='row'>
      <div className='margin-top'>
        <h2>Free Porn Trending Internationally</h2>
        {currentVideos.map((video, index) => (
          <Link to={{ pathname: `/movie/video` }} key={index}>
       
          <iframe
                  className={`row_poster `}
      
        src={`https://www.pornhub.com/embed/${video}`}
        frameBorder="0"
        allow="autoplay; fullscreen"
        scrolling="no"
      ></iframe>
          </Link>
        ))}

        {/* Pagination controls */}
        {data.length > itemsPerPage && (
          <div>
            <button onClick={handleNextPage}>Next</button>
          </div>
        )}
      </div>


       <Jumbotron /> 
      
    </div>

  );
};

export default Movies;