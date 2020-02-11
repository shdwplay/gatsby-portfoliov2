import React, { useState } from 'react';
import Layout from '../components/Layout';
import Masonry from 'react-masonry-component';
import '../assets/styles/style.css';

import close from '../assets/images/close-gallery.png';
import sx from '../assets/images/sx.png';
import dx from '../assets/images/dx.png';

import r1 from '../assets/images/ritratti/r1.png';
import r2 from '../assets/images/ritratti/r2.png';
import r3 from '../assets/images/ritratti/r3.png';
import r4 from '../assets/images/ritratti/r4.png';
import r5 from '../assets/images/ritratti/r5.png';
import r6 from '../assets/images/ritratti/r6.png';
import r7 from '../assets/images/ritratti/r7.png';
import r8 from '../assets/images/ritratti/r8.png';
import r9 from '../assets/images/ritratti/r9.png';
import r10 from '../assets/images/ritratti/r10.png';
import r11 from '../assets/images/ritratti/r11.png';
import r12 from '../assets/images/ritratti/r12.png';
import r13 from '../assets/images/ritratti/r13.png';
import r14 from '../assets/images/ritratti/r14.png';
import r15 from '../assets/images/ritratti/r15.png';
import r16 from '../assets/images/ritratti/r16.png';
import r17 from '../assets/images/ritratti/r17.png';
import r18 from '../assets/images/ritratti/r18.png';
import r19 from '../assets/images/ritratti/r19.png';
import r20 from '../assets/images/ritratti/r20.png';
import r21 from '../assets/images/ritratti/r21.png';
import r22 from '../assets/images/ritratti/r22.png';
import r23 from '../assets/images/ritratti/r23.png';
import r24 from '../assets/images/ritratti/r24.png';
import r25 from '../assets/images/ritratti/r25.png';
import r26 from '../assets/images/ritratti/r26.png';
import r27 from '../assets/images/ritratti/r27.png';
import r28 from '../assets/images/ritratti/r28.png';
import r29 from '../assets/images/ritratti/r29.png';
import r30 from '../assets/images/ritratti/r30.png';
import r31 from '../assets/images/ritratti/r31.png';
import r32 from '../assets/images/ritratti/r32.png';
import r33 from '../assets/images/ritratti/r33.png';
import r34 from '../assets/images/ritratti/r34.png';
import r35 from '../assets/images/ritratti/r35.png';
import r36 from '../assets/images/ritratti/r36.png';
import r37 from '../assets/images/ritratti/r37.png';
import r38 from '../assets/images/ritratti/r38.png';
import r39 from '../assets/images/ritratti/r39.png';
import r40 from '../assets/images/ritratti/r40.png';
import r41 from '../assets/images/ritratti/r41.png';
import r42 from '../assets/images/ritratti/r42.png';
import r43 from '../assets/images/ritratti/r43.png';
import r44 from '../assets/images/ritratti/r44.png';
import r45 from '../assets/images/ritratti/r45.png';
import r46 from '../assets/images/ritratti/r46.png';
import r47 from '../assets/images/ritratti/r47.png';
import r48 from '../assets/images/ritratti/r48.png';
import r49 from '../assets/images/ritratti/r49.png';
import r50 from '../assets/images/ritratti/r50.png';
import r51 from '../assets/images/ritratti/r51.png';
import r52 from '../assets/images/ritratti/r52.png';
import r53 from '../assets/images/ritratti/r53.png';
import r54 from '../assets/images/ritratti/r54.png';
import r55 from '../assets/images/ritratti/r55.png';
import r56 from '../assets/images/ritratti/r56.png';
import r57 from '../assets/images/ritratti/r57.png';
import r58 from '../assets/images/ritratti/r58.png';
import r59 from '../assets/images/ritratti/r59.png';
import r60 from '../assets/images/ritratti/r60.png';
import r61 from '../assets/images/ritratti/r61.png';
import r62 from '../assets/images/ritratti/r62.png';
import r63 from '../assets/images/ritratti/r63.png';
import r64 from '../assets/images/ritratti/r64.png';
import r65 from '../assets/images/ritratti/r65.png';
import r66 from '../assets/images/ritratti/r66.png';
import r67 from '../assets/images/ritratti/r67.png';
import r68 from '../assets/images/ritratti/r68.png';
import r69 from '../assets/images/ritratti/r69.png';
import r70 from '../assets/images/ritratti/r70.png';
import r71 from '../assets/images/ritratti/r71.png';
import r72 from '../assets/images/ritratti/r72.png';
import r73 from '../assets/images/ritratti/r73.png';
import r74 from '../assets/images/ritratti/r74.png';
import r75 from '../assets/images/ritratti/r75.png';
import r76 from '../assets/images/ritratti/r76.png';
import r77 from '../assets/images/ritratti/r77.png';
import r78 from '../assets/images/ritratti/r78.png';
import r79 from '../assets/images/ritratti/r79.png';
import r80 from '../assets/images/ritratti/r80.png';

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
