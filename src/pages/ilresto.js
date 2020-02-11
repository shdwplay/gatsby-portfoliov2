import React, { useState } from 'react';
import Layout from '../components/Layout';
import Masonry from 'react-masonry-component';
import '../assets/styles/style.css';

import close from '../assets/images/close-gallery.png';
import sx from '../assets/images/sx.png';
import dx from '../assets/images/dx.png';

import i1 from '../assets/images/ilresto/i1.jpg';
import i2 from '../assets/images/ilresto/i2.jpg';
import i3 from '../assets/images/ilresto/i3.jpg';
import i4 from '../assets/images/ilresto/i4.jpg';
import i5 from '../assets/images/ilresto/i5.jpg';
import i6 from '../assets/images/ilresto/i6.jpg';
import i7 from '../assets/images/ilresto/i7.jpg';
import i8 from '../assets/images/ilresto/i8.jpg';
import i9 from '../assets/images/ilresto/i9.jpg';
import i10 from '../assets/images/ilresto/i10.jpg';
import i11 from '../assets/images/ilresto/i11.jpg';
import i12 from '../assets/images/ilresto/i12.jpg';
import i13 from '../assets/images/ilresto/i13.jpg';
import i14 from '../assets/images/ilresto/i14.jpg';
import i15 from '../assets/images/ilresto/i15.jpg';
import i16 from '../assets/images/ilresto/i16.jpg';
import i17 from '../assets/images/ilresto/i17.jpg';
import i18 from '../assets/images/ilresto/i18.jpg';
import i19 from '../assets/images/ilresto/i19.jpg';
import i20 from '../assets/images/ilresto/i20.jpg';
import i21 from '../assets/images/ilresto/i21.jpg';
import i22 from '../assets/images/ilresto/i22.jpg';
import i23 from '../assets/images/ilresto/i23.jpg';
import i24 from '../assets/images/ilresto/i24.jpg';
import i25 from '../assets/images/ilresto/i25.jpg';
import i26 from '../assets/images/ilresto/i26.jpg';
import i27 from '../assets/images/ilresto/i27.jpg';
import i28 from '../assets/images/ilresto/i28.jpg';
import i29 from '../assets/images/ilresto/i29.jpg';
import i30 from '../assets/images/ilresto/i30.jpg';
import i31 from '../assets/images/ilresto/i31.jpg';
import i32 from '../assets/images/ilresto/i32.jpg';
import i33 from '../assets/images/ilresto/i33.jpg';
import i34 from '../assets/images/ilresto/i34.jpg';
import i35 from '../assets/images/ilresto/i35.jpg';
import i36 from '../assets/images/ilresto/i36.jpg';
import i37 from '../assets/images/ilresto/i37.jpg';
import i38 from '../assets/images/ilresto/i38.jpg';
import i39 from '../assets/images/ilresto/i39.jpg';
import i40 from '../assets/images/ilresto/i40.jpg';
import i41 from '../assets/images/ilresto/i41.jpg';
import i42 from '../assets/images/ilresto/i42.jpg';
import i43 from '../assets/images/ilresto/i43.jpg';
import i44 from '../assets/images/ilresto/i44.jpg';
import i45 from '../assets/images/ilresto/i45.jpg';
import i46 from '../assets/images/ilresto/i46.jpg';
import i47 from '../assets/images/ilresto/i47.jpg';
import i48 from '../assets/images/ilresto/i48.jpg';
import i49 from '../assets/images/ilresto/i49.jpg';
import i50 from '../assets/images/ilresto/i50.jpg';
import i51 from '../assets/images/ilresto/i51.jpg';
import i52 from '../assets/images/ilresto/i52.jpg';
import i53 from '../assets/images/ilresto/i53.jpg';
import i54 from '../assets/images/ilresto/i54.jpg';
import i55 from '../assets/images/ilresto/i55.jpg';
import i56 from '../assets/images/ilresto/i56.jpg';
import i57 from '../assets/images/ilresto/i57.jpg';
import i58 from '../assets/images/ilresto/i58.jpg';
import i59 from '../assets/images/ilresto/i59.jpg';
import i60 from '../assets/images/ilresto/i60.jpg';
import i61 from '../assets/images/ilresto/i61.jpg';
import i62 from '../assets/images/ilresto/i62.jpg';
import i63 from '../assets/images/ilresto/i63.jpg';
import i64 from '../assets/images/ilresto/i64.jpg';
import i65 from '../assets/images/ilresto/i65.jpg';
import a1 from '../assets/images/ilresto/a1.jpg';
import a2 from '../assets/images/ilresto/a2.jpg';
import a3 from '../assets/images/ilresto/a3.jpg';
import a4 from '../assets/images/ilresto/a4.jpg';
import a5 from '../assets/images/ilresto/a5.jpg';
import a6 from '../assets/images/ilresto/a6.jpg';
import a7 from '../assets/images/ilresto/a7.jpg';

const photos = [
  { url: i1 },
  { url: i2 },
  { url: i3 },
  { url: i4 },
  { url: i5 },
  { url: i6 },
  { url: i7 },
  { url: i8 },
  { url: i9 },
  { url: i10 },
  { url: i11 },
  { url: i12 },
  { url: i13 },
  { url: i14 },
  { url: i15 },
  { url: i16 },
  { url: i17 },
  { url: i18 },
  { url: i19 },
  { url: i20 },
  { url: i21 },
  { url: i22 },
  { url: i23 },
  { url: i24 },
  { url: i25 },
  { url: i26 },
  { url: i27 },
  { url: i28 },
  { url: i29 },
  { url: i30 },
  { url: i31 },
  { url: i32 },
  { url: i33 },
  { url: i34 },
  { url: i35 },
  { url: i36 },
  { url: i37 },
  { url: i38 },
  { url: i39 },
  { url: i40 },
  { url: i41 },
  { url: i42 },
  { url: i43 },
  { url: i44 },
  { url: i45 },
  { url: i46 },
  { url: i47 },
  { url: i48 },
  { url: i49 },
  { url: i50 },
  { url: i51 },
  { url: i52 },
  { url: i53 },
  { url: i54 },
  { url: i55 },
  { url: i56 },
  { url: i57 },
  { url: i58 },
  { url: i59 },
  { url: i60 },
  { url: i61 },
  { url: i62 },
  { url: i63 },
  { url: i64 },
  { url: i65 },
  { url: a1 },
  { url: a2 },
  { url: a3 },
  { url: a4 },
  { url: a5 },
  { url: a6 },
  { url: a7 },
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
          <h2>Il Resto</h2>
          <p>Still life, luoghi, analogiche e piccoli particolari</p>
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
