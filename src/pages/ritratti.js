import React, { useState } from 'react';
import Masonry from 'react-masonry-component';
import '../assets/styles/style.css';
import Layout from '../components/Layout';

import ritratti from '../assets/images/ritratti.jpg';
import eventi from '../assets/images/eventi.jpg';
import eventi1 from '../assets/images/eventi1.jpg';
import altro from '../assets/images/altro.jpg';
import aaa from '../assets/images/aaa.jpg';
import aaa1 from '../assets/images/aaa1.jpg';
import close from '../assets/images/xxx.png';
import sx from '../assets/images/sx.png';

const photos = [
  { url: ritratti },
  { url: aaa },
  { url: altro },
  { url: eventi },
  { url: aaa1 },
  { url: aaa },
  { url: aaa1 },
  { url: eventi1 },
  { url: altro },
  { url: eventi },
  { url: aaa },
  { url: ritratti },
  { url: ritratti },
  { url: aaa1 },
  { url: altro },
  { url: eventi },
  { url: eventi1 },
  { url: ritratti },
];

export default function App() {
  const [lightBox, setLightbox] = useState({
    open: false,
    index: null,
    url: '',
  });

  const showLightbox = (url, index) => {
    setLightbox({
      open: true,
      index,
      url,
    });
  };

  const navigate = direction => {
    if (direction === 'next') {
      setLightbox({
        open: true,
        index: lightBox.index + 1,
        url: photos[lightBox.index + 1].url,
      });
    } else if (direction === 'prev') {
      setLightbox({
        open: true,
        index: lightBox.index - 1,
        url: photos[lightBox.index - 1].url,
      });
    }
  };

  const closeLightbox = () => {
    setLightbox({
      open: false,
      index: null,
      url: '',
    });
  };

  return (
    <Layout fullMenu>
      <article id="main">
        <header>
          <h2>Galleria Ritratti</h2>
          <p>Aliquam ut ex ut interdum donec amet imperdiet eleifend</p>
        </header>
        <div className="masonry-wrapper">
          <div className="masonry-container">
            <Masonry className={'masonry'} elementType={'div'}>
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
      </article>

      {lightBox.open && (
        <div className="lightbox">
          <button className="close" onClick={() => closeLightbox()}>
            <img className="prova" src={close} />
          </button>
          {lightBox.index !== 0 && (
            <button className="leftBtn" onClick={() => navigate('prev')}>
              <img className="prova" src={sx} />
            </button>
          )}
          <img src={lightBox.url} />
          {lightBox.index !== photos.length - 1 && (
            <button className="rightBtn" onClick={() => navigate('next')}>
              <img className="prova" src={sx} />
            </button>
          )}
        </div>
      )}
    </Layout>
  );
}
