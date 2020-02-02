import React, { useState } from "react";
import Masonry from "react-masonry-component";
import "../assets/styles/style.css";
import Layout from '../components/Layout'

import ritratti from '../assets/images/ritratti.jpg';
import eventi from '../assets/images/eventi.jpg';
import altro from '../assets/images/altro.jpg';
import aaa from '../assets/images/aaa.jpg';

const photos = [
    { url: ritratti } ,
    { url: aaa }, 
    { url: altro }, 
    { url: eventi }, 
    { url: aaa }, 
    { url: ritratti },
 ];

export default function App() {
  const [lightBox, setLightbox] = useState({
    open: false,
    index: null,
    url: ""
  });

  const showLightbox = (url, index) => {
    setLightbox({
      open: true,
      index,
      url
    });
  };

  const navigate = direction => {
    if (direction === "next") {
      setLightbox({
        open: true,
        index: lightBox.index + 1,
        url: photos[lightBox.index + 1].url
      });
    } else if (direction === "prev") {
      setLightbox({
        open: true,
        index: lightBox.index - 1,
        url: photos[lightBox.index - 1].url
      });
    }
  };

  const closeLightbox = () => {
    setLightbox({
      open: false,
      index: null,
      url: ""
    });
  };

  return (
    <Layout fullMenu>
      <div className="masonry-wrapper">
      <div className="masonry-container">
        <Masonry className={"masonry"} elementType={"div"}>
          {photos &&
            photos.map((photo, i) => (
              <div className="masonry-box">
                <img
                  alt={photo.url}
                  src={photo.url}
                  onClick={() => showLightbox(photo.url, i)}
                />
              </div>
            ))}
        </Masonry>
      </div>
      </div>

      {lightBox.open && (
        <div className="lightbox">
          <button className="close" onClick={() => closeLightbox()}>
            close
          </button>
          {lightBox.index !== 0 && (
            <button className="leftBtn" onClick={() => navigate("prev")}>
              Prev
            </button>
          )}
          <img src={lightBox.url} />
          {lightBox.index !== photos.length - 1 && (
            <button className="rightBtn" onClick={() => navigate("next")}>
              Next
            </button>
          )}
        </div>
      )}
    </Layout>
  );
}
