import React, { useState } from 'react';
import Layout from '../components/Layout';
import Masonry from 'react-masonry-component';
import '../assets/styles/style.css';

import close from '../assets/images/close-gallery.png';
import sx from '../assets/images/sx.png';
import dx from '../assets/images/dx.png';

import e1 from '../assets/images/eventi/e1.jpg';
import e2 from '../assets/images/eventi/e2.jpg';
import e3 from '../assets/images/eventi/e3.jpg';
import e4 from '../assets/images/eventi/e4.jpg';
import e5 from '../assets/images/eventi/e5.jpg';
import e6 from '../assets/images/eventi/e6.jpg';
import e7 from '../assets/images/eventi/e7.jpg';
import e8 from '../assets/images/eventi/e8.jpg';
import e9 from '../assets/images/eventi/e9.jpg';
import e10 from '../assets/images/eventi/e10.jpg';
import e11 from '../assets/images/eventi/e11.jpg';
import e12 from '../assets/images/eventi/e12.jpg';
import e13 from '../assets/images/eventi/e13.jpg';
import e14 from '../assets/images/eventi/e14.jpg';
import e15 from '../assets/images/eventi/e15.jpg';
import e16 from '../assets/images/eventi/e16.jpg';
import e17 from '../assets/images/eventi/e17.jpg';
import e18 from '../assets/images/eventi/e18.jpg';
import e19 from '../assets/images/eventi/e19.jpg';
import e20 from '../assets/images/eventi/e20.jpg';
import e21 from '../assets/images/eventi/e21.jpg';
import e22 from '../assets/images/eventi/e22.jpg';
import e23 from '../assets/images/eventi/e23.jpg';
import e24 from '../assets/images/eventi/e24.jpg';
import e25 from '../assets/images/eventi/e25.jpg';
import e26 from '../assets/images/eventi/e26.jpg';
import e27 from '../assets/images/eventi/e27.jpg';
import e28 from '../assets/images/eventi/e28.jpg';
import e29 from '../assets/images/eventi/e29.jpg';
import e30 from '../assets/images/eventi/e30.jpg';
import e31 from '../assets/images/eventi/e31.jpg';
import e32 from '../assets/images/eventi/e32.jpg';
import e33 from '../assets/images/eventi/e33.jpg';
import e34 from '../assets/images/eventi/e34.jpg';
import e35 from '../assets/images/eventi/e35.jpg';
import e36 from '../assets/images/eventi/e36.jpg';
import e37 from '../assets/images/eventi/e37.jpg';
import e38 from '../assets/images/eventi/e38.jpg';
import e39 from '../assets/images/eventi/e39.jpg';
import e40 from '../assets/images/eventi/e40.jpg';
import e41 from '../assets/images/eventi/e41.jpg';
import e42 from '../assets/images/eventi/e42.jpg';
import e43 from '../assets/images/eventi/e43.jpg';
import e44 from '../assets/images/eventi/e44.jpg';
import e45 from '../assets/images/eventi/e45.jpg';
import e46 from '../assets/images/eventi/e46.jpg';
import e47 from '../assets/images/eventi/e47.jpg';
import e48 from '../assets/images/eventi/e48.jpg';
import e49 from '../assets/images/eventi/e49.jpg';
import e50 from '../assets/images/eventi/e50.jpg';
import e51 from '../assets/images/eventi/e51.jpg';
import e52 from '../assets/images/eventi/e52.jpg';
import e53 from '../assets/images/eventi/e53.jpg';
import e54 from '../assets/images/eventi/e54.jpg';
import e55 from '../assets/images/eventi/e55.jpg';
import e56 from '../assets/images/eventi/e56.jpg';
import e57 from '../assets/images/eventi/e57.jpg';
import e58 from '../assets/images/eventi/e58.jpg';
import e59 from '../assets/images/eventi/e59.jpg';
import e60 from '../assets/images/eventi/e60.jpg';
import e61 from '../assets/images/eventi/e61.jpg';
import e62 from '../assets/images/eventi/e62.jpg';
import e63 from '../assets/images/eventi/e63.jpg';
import e64 from '../assets/images/eventi/e64.jpg';
import e65 from '../assets/images/eventi/e65.jpg';
import e66 from '../assets/images/eventi/e66.jpg';
import e67 from '../assets/images/eventi/e67.jpg';
import e68 from '../assets/images/eventi/e68.jpg';
import e69 from '../assets/images/eventi/e69.jpg';
import e70 from '../assets/images/eventi/e70.jpg';
import e71 from '../assets/images/eventi/e71.jpg';
import e72 from '../assets/images/eventi/e72.jpg';
import e73 from '../assets/images/eventi/e73.jpg';
import e74 from '../assets/images/eventi/e74.jpg';
import e75 from '../assets/images/eventi/e75.jpg';
import e76 from '../assets/images/eventi/e76.jpg';
import e77 from '../assets/images/eventi/e77.jpg';
import e78 from '../assets/images/eventi/e78.jpg';
import e79 from '../assets/images/eventi/e79.jpg';
import e80 from '../assets/images/eventi/e80.jpg';
import e81 from '../assets/images/eventi/e81.jpg';
import e82 from '../assets/images/eventi/e82.jpg';
import e83 from '../assets/images/eventi/e83.jpg';
import e84 from '../assets/images/eventi/e84.jpg';
import e85 from '../assets/images/eventi/e85.jpg';
import e86 from '../assets/images/eventi/e86.jpg';
import e87 from '../assets/images/eventi/e87.jpg';
import e88 from '../assets/images/eventi/e88.jpg';
import e89 from '../assets/images/eventi/e89.jpg';
import e90 from '../assets/images/eventi/e90.jpg';
import e91 from '../assets/images/eventi/e91.jpg';
import e92 from '../assets/images/eventi/e92.jpg';
import e93 from '../assets/images/eventi/e93.jpg';
import e94 from '../assets/images/eventi/e94.jpg';
import e95 from '../assets/images/eventi/e95.jpg';
import e96 from '../assets/images/eventi/e96.jpg';
import e97 from '../assets/images/eventi/e97.jpg';
import e98 from '../assets/images/eventi/e98.jpg';
import e99 from '../assets/images/eventi/e99.jpg';
import e100 from '../assets/images/eventi/e100.jpg';
import e101 from '../assets/images/eventi/e101.jpg';
import e102 from '../assets/images/eventi/e102.jpg';
import e103 from '../assets/images/eventi/e103.jpg';
import e104 from '../assets/images/eventi/e104.jpg';
import e105 from '../assets/images/eventi/e105.jpg';
import e106 from '../assets/images/eventi/e106.jpg';
import e107 from '../assets/images/eventi/e107.jpg';
import e108 from '../assets/images/eventi/e108.jpg';
import e109 from '../assets/images/eventi/e109.jpg';
import e110 from '../assets/images/eventi/e110.jpg';
import e111 from '../assets/images/eventi/e111.jpg';
import e112 from '../assets/images/eventi/e112.jpg';
import e113 from '../assets/images/eventi/e113.jpg';
import e114 from '../assets/images/eventi/e114.jpg';

const photos = [
  { url: e1 },
  { url: e2 },
  { url: e3 },
  { url: e4 },
  { url: e5 },
  { url: e6 },
  { url: e7 },
  { url: e8 },
  { url: e9 },
  { url: e10 },
  { url: e11 },
  { url: e12 },
  { url: e13 },
  { url: e14 },
  { url: e15 },
  { url: e16 },
  { url: e17 },
  { url: e18 },
  { url: e19 },
  { url: e20 },
  { url: e21 },
  { url: e22 },
  { url: e23 },
  { url: e24 },
  { url: e25 },
  { url: e26 },
  { url: e27 },
  { url: e28 },
  { url: e29 },
  { url: e30 },
  { url: e31 },
  { url: e32 },
  { url: e33 },
  { url: e34 },
  { url: e35 },
  { url: e36 },
  { url: e37 },
  { url: e38 },
  { url: e39 },
  { url: e40 },
  { url: e41 },
  { url: e42 },
  { url: e43 },
  { url: e44 },
  { url: e45 },
  { url: e46 },
  { url: e47 },
  { url: e48 },
  { url: e49 },
  { url: e50 },
  { url: e51 },
  { url: e52 },
  { url: e53 },
  { url: e54 },
  { url: e55 },
  { url: e56 },
  { url: e57 },
  { url: e58 },
  { url: e59 },
  { url: e60 },
  { url: e61 },
  { url: e62 },
  { url: e63 },
  { url: e64 },
  { url: e65 },
  { url: e66 },
  { url: e67 },
  { url: e68 },
  { url: e69 },
  { url: e70 },
  { url: e71 },
  { url: e72 },
  { url: e73 },
  { url: e74 },
  { url: e75 },
  { url: e76 },
  { url: e77 },
  { url: e78 },
  { url: e79 },
  { url: e80 },
  { url: e81 },
  { url: e82 },
  { url: e83 },
  { url: e84 },
  { url: e85 },
  { url: e86 },
  { url: e87 },
  { url: e88 },
  { url: e89 },
  { url: e90 },
  { url: e91 },
  { url: e92 },
  { url: e93 },
  { url: e94 },
  { url: e95 },
  { url: e96 },
  { url: e97 },
  { url: e98 },
  { url: e99 },
  { url: e100 },
  { url: e101 },
  { url: e102 },
  { url: e103 },
  { url: e104 },
  { url: e105 },
  { url: e106 },
  { url: e107 },
  { url: e108 },
  { url: e109 },
  { url: e110 },
  { url: e111 },
  { url: e112 },
  { url: e113 },
  { url: e114 },
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
          <h2>Eventi</h2>
          <p>
            Concerti, manifestazioni e momenti speciali visti da dietro la mia
            macchina fotografica
          </p>
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
            <img className="prova" src={close} alt="" />
          </button>
          {lightBox.index !== 0 && (
            <button className="leftBtn" onClick={() => navigate('prev')}>
              <img className="prova" src={sx} alt="" />
            </button>
          )}
          <img src={lightBox.url} alt={lightBox.url} />
          {lightBox.index !== photos.length - 1 && (
            <button className="rightBtn" onClick={() => navigate('next')}>
              <img className="prova" src={dx} alt="" />
            </button>
          )}
        </div>
      )}
    </Layout>
  );
}
