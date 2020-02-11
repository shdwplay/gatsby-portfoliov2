import React, { useState } from 'react';
import Layout from '../components/Layout';
import Masonry from 'react-masonry-component';
import '../assets/styles/style.css';

import close from '../assets/images/close-gallery.png';
import sx from '../assets/images/sx.png';
import dx from '../assets/images/dx.png';

import r1 from '../assets/images/ritratti/r1.jpg';
import r2 from '../assets/images/ritratti/r2.jpg';
import r3 from '../assets/images/ritratti/r3.jpg';
import r4 from '../assets/images/ritratti/r4.jpg';
import r5 from '../assets/images/ritratti/r5.jpg';
import r6 from '../assets/images/ritratti/r6.jpg';
import r7 from '../assets/images/ritratti/r7.jpg';
import r8 from '../assets/images/ritratti/r8.jpg';
import r9 from '../assets/images/ritratti/r9.jpg';
import r10 from '../assets/images/ritratti/r10.jpg';
import r11 from '../assets/images/ritratti/r11.jpg';
import r12 from '../assets/images/ritratti/r12.jpg';
import r13 from '../assets/images/ritratti/r13.jpg';
import r14 from '../assets/images/ritratti/r14.jpg';
import r15 from '../assets/images/ritratti/r15.jpg';
import r16 from '../assets/images/ritratti/r16.jpg';
import r17 from '../assets/images/ritratti/r17.jpg';
import r18 from '../assets/images/ritratti/r18.jpg';
import r19 from '../assets/images/ritratti/r19.jpg';
import r20 from '../assets/images/ritratti/r20.jpg';
import r21 from '../assets/images/ritratti/r21.jpg';
import r22 from '../assets/images/ritratti/r22.jpg';
import r23 from '../assets/images/ritratti/r23.jpg';
import r24 from '../assets/images/ritratti/r24.jpg';
import r25 from '../assets/images/ritratti/r25.jpg';
import r26 from '../assets/images/ritratti/r26.jpg';
import r27 from '../assets/images/ritratti/r27.jpg';
import r28 from '../assets/images/ritratti/r28.jpg';
import r29 from '../assets/images/ritratti/r29.jpg';
import r30 from '../assets/images/ritratti/r30.jpg';
import r31 from '../assets/images/ritratti/r31.jpg';
import r32 from '../assets/images/ritratti/r32.jpg';
import r33 from '../assets/images/ritratti/r33.jpg';
import r34 from '../assets/images/ritratti/r34.jpg';
import r35 from '../assets/images/ritratti/r35.jpg';
import r36 from '../assets/images/ritratti/r36.jpg';
import r37 from '../assets/images/ritratti/r37.jpg';
import r38 from '../assets/images/ritratti/r38.jpg';
import r39 from '../assets/images/ritratti/r39.jpg';
import r40 from '../assets/images/ritratti/r40.jpg';
import r41 from '../assets/images/ritratti/r41.jpg';
import r42 from '../assets/images/ritratti/r42.jpg';
import r43 from '../assets/images/ritratti/r43.jpg';
import r44 from '../assets/images/ritratti/r44.jpg';
import r45 from '../assets/images/ritratti/r45.jpg';
import r46 from '../assets/images/ritratti/r46.jpg';
import r47 from '../assets/images/ritratti/r47.jpg';
import r48 from '../assets/images/ritratti/r48.jpg';
import r49 from '../assets/images/ritratti/r49.jpg';
import r50 from '../assets/images/ritratti/r50.jpg';
import r51 from '../assets/images/ritratti/r51.jpg';
import r52 from '../assets/images/ritratti/r52.jpg';
import r53 from '../assets/images/ritratti/r53.jpg';
import r54 from '../assets/images/ritratti/r54.jpg';
import r55 from '../assets/images/ritratti/r55.jpg';
import r56 from '../assets/images/ritratti/r56.jpg';
import r57 from '../assets/images/ritratti/r57.jpg';
import r58 from '../assets/images/ritratti/r58.jpg';
import r59 from '../assets/images/ritratti/r59.jpg';
import r60 from '../assets/images/ritratti/r60.jpg';
import r61 from '../assets/images/ritratti/r61.jpg';
import r62 from '../assets/images/ritratti/r62.jpg';
import r63 from '../assets/images/ritratti/r63.jpg';
import r64 from '../assets/images/ritratti/r64.jpg';
import r65 from '../assets/images/ritratti/r65.jpg';
import r66 from '../assets/images/ritratti/r66.jpg';
import r67 from '../assets/images/ritratti/r67.jpg';
import r68 from '../assets/images/ritratti/r68.jpg';
import r69 from '../assets/images/ritratti/r69.jpg';
import r70 from '../assets/images/ritratti/r70.jpg';
import r71 from '../assets/images/ritratti/r71.jpg';
import r72 from '../assets/images/ritratti/r72.jpg';
import r73 from '../assets/images/ritratti/r73.jpg';
import r74 from '../assets/images/ritratti/r74.jpg';
import r75 from '../assets/images/ritratti/r75.jpg';
import r76 from '../assets/images/ritratti/r76.jpg';
import r77 from '../assets/images/ritratti/r77.jpg';
import r78 from '../assets/images/ritratti/r78.jpg';
import r79 from '../assets/images/ritratti/r79.jpg';
import r80 from '../assets/images/ritratti/r80.jpg';

const photos = [
  { url: r1 },
  { url: r2 },
  { url: r3 },
  { url: r4 },
  { url: r5 },
  { url: r6 },
  { url: r7 },
  { url: r8 },
  { url: r9 },
  { url: r10 },
  { url: r11 },
  { url: r12 },
  { url: r13 },
  { url: r14 },
  { url: r15 },
  { url: r16 },
  { url: r17 },
  { url: r18 },
  { url: r19 },
  { url: r20 },
  { url: r21 },
  { url: r22 },
  { url: r23 },
  { url: r24 },
  { url: r25 },
  { url: r26 },
  { url: r27 },
  { url: r28 },
  { url: r29 },
  { url: r30 },
  { url: r31 },
  { url: r32 },
  { url: r33 },
  { url: r34 },
  { url: r35 },
  { url: r36 },
  { url: r37 },
  { url: r38 },
  { url: r39 },
  { url: r40 },
  { url: r41 },
  { url: r42 },
  { url: r43 },
  { url: r44 },
  { url: r45 },
  { url: r46 },
  { url: r47 },
  { url: r48 },
  { url: r49 },
  { url: r50 },
  { url: r51 },
  { url: r52 },
  { url: r53 },
  { url: r54 },
  { url: r55 },
  { url: r56 },
  { url: r57 },
  { url: r58 },
  { url: r59 },
  { url: r60 },
  { url: r61 },
  { url: r62 },
  { url: r63 },
  { url: r64 },
  { url: r65 },
  { url: r66 },
  { url: r67 },
  { url: r68 },
  { url: r69 },
  { url: r70 },
  { url: r71 },
  { url: r72 },
  { url: r73 },
  { url: r74 },
  { url: r75 },
  { url: r76 },
  { url: r77 },
  { url: r78 },
  { url: r79 },
  { url: r80 },
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
          <h2>Ritratti</h2>
          <p>La mia collezione di volti</p>
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
