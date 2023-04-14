import React, {useState,useEffect,useRef } from 'react'
import { FaqsContainer } from '../containers/faq'
import { Feature, OptForm } from '../components'
import Jumbotron from '../containers/jumbotron'
import Header from '../containers/header'
import styled from 'styled-components/macro'
import Disqus from "disqus-react"
import YouTube from 'react-youtube';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const MovieSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
  background-color: #000;
  color: #fff;
`;

const MovieTitle = styled.h1`
  font-size: 36px;
`;

const PlaylistSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  width: 100%;
`;

const PlaylistContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  max-width: 1200px;
  padding: 0 24px;
`;

const PlaylistItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px;
  background-color: #1c1c1c;
  color: #fff;
  font-size: 24px;
  padding: 16px;
`;






// Styled video container
const StyledVideoContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

// Styled video component
const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  outline: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
`;

// Styled overlay for play button
const StyledOverlay = styled.div`

`;

// Styled play button
const StyledPlayButton = styled.i`
  font-size: 48px;
  color: #fff;
`;

// Styled comment section
const StyledCommentSection = styled.div`
  margin-top: 16px;
`;

// Styled comment input
const StyledCommentInput = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: none;
  border-bottom: 1px solid #ddd;
  outline: none;
`;

// Styled comment list
const StyledCommentList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

// Styled comment item
const StyledCommentItem = styled.li`
  margin-bottom: 8px;
  font-size: 14px;
`;



export default function Mome() {



  const [magnetData, setMagnetData] = useState(null);

    const disqusShortname = "narutopia-netlify-app"
    const disqusConfig = {
      url: "http://localhost:3000",
      identifier: "article-id",
      title: "Title of Your Article"
    }

  useEffect(() => {
    // Fetch the magnet data from your Flask server
    fetch('http://127.0.0.1:5000/play') // Replace with your Flask server endpoint
      .then(response => response.json())
     .then(data => {
        const magnetLink = data; // Replace with the key for your magnet link in the JSON data
        setMagnetLink(magnetLink);
      })
      .catch(error => console.error('Error fetching magnet data:', error));
  }, []);

  const videoRef = useRef(null);

  // Function to play the video
  const playVideo = () => {
    videoRef.current.play();
  };
  return (
    <div>

  <Feature>
     <StyledVideoContainer>
      <StyledVideo controls>
         {/* Video player */}
      
      <video ref={videoRef} width="640" height="360" controls>
        <source src="https://2embed.org/embed/movie?imdb=tt18924468" type="video/mp4" />
        {/* Add additional source elements for different video formats */}
        Your browser does not support the video tag.
      </video>

      {/* Button to play the video */}
      <button onClick={playVideo}>Play Video</button>
      </StyledVideo>
      <StyledOverlay>
        <StyledPlayButton className="fas fa-play-circle" />
      </StyledOverlay>


  <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
    

    </StyledVideoContainer>


  
        </Feature>




    </div>
  )
}
