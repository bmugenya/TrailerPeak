import React, {useState,useEffect,useRef } from 'react'
import { FaqsContainer } from '../containers/faq'
import { Feature, OptForm } from '../components'
import Jumbotron from '../containers/jumbotron'
import Header from '../containers/header'
import styled from 'styled-components/macro'
import Disqus from "disqus-react"
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import videos from '../utils/data'


export default function Mome() {


    const disqusShortname = "narutopia-netlify-app"
    const disqusConfig = {
      url: "https://trailerpeak.onrender.com",
      identifier: "article-id",
      title: "Title of Your Article"
    }




  const { name } = useParams();
const selectedVideo = videos.find(video => video.title === name);

  return (
  <div>
      <Feature>
        <Feature.Title>{name}</Feature.Title>
        {selectedVideo && (
          <iframe
        title={selectedVideo.title}
        src={selectedVideo.videoURL}
        frameBorder="0"
        height="481"
        width="608"
        scrolling="no"
      ></iframe>
        )}
      
      </Feature>
    </div>
  )
}
