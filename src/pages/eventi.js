import React, { useState } from 'react';
import Layout from '../components/Layout';
import Masonry from 'react-masonry-component';
import '../assets/styles/style.css';

import close from '../assets/images/close-gallery.png';
import sx from '../assets/images/sx.png';
import dx from '../assets/images/dx.png';

import e1 from '../assets/images/eventi/e1.png';
import e2 from '../assets/images/eventi/e2.png';
import e3 from '../assets/images/eventi/e3.png';
import e4 from '../assets/images/eventi/e4.png';
import e5 from '../assets/images/eventi/e5.png';
import e6 from '../assets/images/eventi/e6.png';
import e7 from '../assets/images/eventi/e7.png';
import e8 from '../assets/images/eventi/e8.png';
import e9 from '../assets/images/eventi/e9.png';
import e10 from '../assets/images/eventi/e10.png';
import e11 from '../assets/images/eventi/e11.png';
import e12 from '../assets/images/eventi/e12.png';
import e13 from '../assets/images/eventi/e13.png';
import e14 from '../assets/images/eventi/e14.png';
import e15 from '../assets/images/eventi/e15.png';
import e16 from '../assets/images/eventi/e16.png';
import e17 from '../assets/images/eventi/e17.png';
import e18 from '../assets/images/eventi/e18.png';
import e19 from '../assets/images/eventi/e19.png';
import e20 from '../assets/images/eventi/e20.png';
import e21 from '../assets/images/eventi/e21.png';
import e22 from '../assets/images/eventi/e22.png';
import e23 from '../assets/images/eventi/e23.png';
import e24 from '../assets/images/eventi/e24.png';
import e25 from '../assets/images/eventi/e25.png';
import e26 from '../assets/images/eventi/e26.png';
import e27 from '../assets/images/eventi/e27.png';
import e28 from '../assets/images/eventi/e28.png';
import e29 from '../assets/images/eventi/e29.png';
import e30 from '../assets/images/eventi/e30.png';
import e31 from '../assets/images/eventi/e31.png';
import e32 from '../assets/images/eventi/e32.png';
import e33 from '../assets/images/eventi/e33.png';
import e34 from '../assets/images/eventi/e34.png';
import e35 from '../assets/images/eventi/e35.png';
import e36 from '../assets/images/eventi/e36.png';
import e37 from '../assets/images/eventi/e37.png';
import e38 from '../assets/images/eventi/e38.png';
import e39 from '../assets/images/eventi/e39.png';
import e40 from '../assets/images/eventi/e40.png';
import e41 from '../assets/images/eventi/e41.png';
import e42 from '../assets/images/eventi/e42.png';
import e43 from '../assets/images/eventi/e43.png';
import e44 from '../assets/images/eventi/e44.png';
import e45 from '../assets/images/eventi/e45.png';
import e46 from '../assets/images/eventi/e46.png';
import e47 from '../assets/images/eventi/e47.png';
import e48 from '../assets/images/eventi/e48.png';
import e49 from '../assets/images/eventi/e49.png';
import e50 from '../assets/images/eventi/e50.png';
import e51 from '../assets/images/eventi/e51.png';
import e52 from '../assets/images/eventi/e52.png';
import e53 from '../assets/images/eventi/e53.png';
import e54 from '../assets/images/eventi/e54.png';
import e55 from '../assets/images/eventi/e55.png';
import e56 from '../assets/images/eventi/e56.png';
import e57 from '../assets/images/eventi/e57.png';
import e58 from '../assets/images/eventi/e58.png';
import e59 from '../assets/images/eventi/e59.png';
import e60 from '../assets/images/eventi/e60.png';
import e61 from '../assets/images/eventi/e61.png';
import e62 from '../assets/images/eventi/e62.png';
import e63 from '../assets/images/eventi/e63.png';
import e64 from '../assets/images/eventi/e64.png';
import e65 from '../assets/images/eventi/e65.png';
import e66 from '../assets/images/eventi/e66.png';
import e67 from '../assets/images/eventi/e67.png';
import e68 from '../assets/images/eventi/e68.png';
import e69 from '../assets/images/eventi/e69.png';
import e70 from '../assets/images/eventi/e70.png';
import e71 from '../assets/images/eventi/e71.png';
import e72 from '../assets/images/eventi/e72.png';
import e73 from '../assets/images/eventi/e73.png';
import e74 from '../assets/images/eventi/e74.png';
import e75 from '../assets/images/eventi/e75.png';
import e76 from '../assets/images/eventi/e76.png';
import e77 from '../assets/images/eventi/e77.png';
import e78 from '../assets/images/eventi/e78.png';
import e79 from '../assets/images/eventi/e79.png';
import e80 from '../assets/images/eventi/e80.png';
import e81 from '../assets/images/eventi/e81.png';
import e82 from '../assets/images/eventi/e82.png';
import e83 from '../assets/images/eventi/e83.png';
import e84 from '../assets/images/eventi/e84.png';
import e85 from '../assets/images/eventi/e85.png';
import e86 from '../assets/images/eventi/e86.png';
import e87 from '../assets/images/eventi/e87.png';
import e88 from '../assets/images/eventi/e88.png';
import e89 from '../assets/images/eventi/e89.png';
import e90 from '../assets/images/eventi/e90.png';
import e91 from '../assets/images/eventi/e91.png';
import e92 from '../assets/images/eventi/e92.png';
import e93 from '../assets/images/eventi/e93.png';
import e94 from '../assets/images/eventi/e94.png';
import e95 from '../assets/images/eventi/e95.png';
import e96 from '../assets/images/eventi/e96.png';
import e97 from '../assets/images/eventi/e97.png';
import e98 from '../assets/images/eventi/e98.png';
import e99 from '../assets/images/eventi/e99.png';
import e100 from '../assets/images/eventi/e100.png';
import e101 from '../assets/images/eventi/e101.png';
import e102 from '../assets/images/eventi/e102.png';
import e103 from '../assets/images/eventi/e103.png';
import e104 from '../assets/images/eventi/e104.png';
import e105 from '../assets/images/eventi/e105.png';
import e106 from '../assets/images/eventi/e106.png';
import e107 from '../assets/images/eventi/e107.png';
import e108 from '../assets/images/eventi/e108.png';
import e109 from '../assets/images/eventi/e109.png';
import e110 from '../assets/images/eventi/e110.png';
import e111 from '../assets/images/eventi/e111.png';
import e112 from '../assets/images/eventi/e112.png';
import e113 from '../assets/images/eventi/e113.png';
import e114 from '../assets/images/eventi/e114.png';

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
