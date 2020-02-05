import React from 'react';
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import { Link } from 'gatsby';
import '../assets/styles/style.css';

import ritratti from '../assets/images/ritratti.jpg';
import eventi from '../assets/images/eventi.jpg';
import ilresto from '../assets/images/altro.jpg';
import facebook from '../assets/images/dimmiquesta.png';
import instagram from '../assets/images/instagram.svg';
import mail from '../assets/images/imstagram1.png';
// import linkedin from '../assets/images/linkedin.svg';
// import flickr from '../assets/images/flickr.svg';

import config from '../../config';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            {/* <Link to="/gallery">
              <p className="button primary">Gallery</p>
            </Link> */}
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Sfoglia la galleria
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            Creativa, amante dell'arte,
            <br /> affascinata dal mondo digitale.
          </h2>
          <p>
            Nella fotografia ho trovato la mia principale forma d'espressione.
          </p>
        </header>

        <ul className="icons major">
          <li>
            <a href="https://www.instagram.com/annadellabadia/">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/AnnadellabadiaPh/">
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="mailto:annadellabadiart@gmail.com">
              <i class="far fa-envelope"></i>
              {/* <img src={mail} /> */}
            </a>
          </li>
          {/* <li>
            <span>
              <img src={mail} />
            </span>
          </li> */}
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <Link to="/ritratti">
            <img src={ritratti} alt="" />
          </Link>
        </div>
        <div className="content">
          <Link to="/ritratti">
            <h2>Ritratti</h2>
            <p>La mia collezione di volti.</p>
          </Link>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <Link to="/eventi">
            <img src={eventi} alt="" />
          </Link>
        </div>
        <div className="content">
          <Link to="/eventi">
            <h2>Eventi</h2>
            <p>
              Concerti, manifestazioni e momenti speciali visti da dietro la mia
              macchina fotografica.
            </p>
          </Link>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <Link to="/ilresto">
            <img src={ilresto} alt="" />
          </Link>
        </div>
        <div className="content">
          <Link to="/ilresto">
            <h2>Il Resto</h2>
            <p>
              Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
              imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
            </p>
          </Link>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <Link to="/video">
            <img src={ilresto} alt="" />
          </Link>
        </div>
        <div className="content">
          <Link to="/video">
            <h2>Video</h2>
            <p>I miei lavori di fotografia in movimento.</p>
          </Link>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          {/* <h2>Accumsan mus tortor nunc aliquet</h2> */}
          <p className="bottom-text">
            "Mi avvicinai alla fotografia come un'anatra si avvicina all'acqua.
            Non ho mai voluto fare niente altro."
            <br />
            Berenice Abbott
          </p>
        </header>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <Link to="/">
            <h2>Contatti</h2>
          </Link>
          <p>
            Per qualsiasi informazione:{' '}
            <a href="mailto:annadellabadiart@gmail.com">
              annadellabadiart@gmail.com
            </a>
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <Link to="/chisono">
              <p className="button fit primary">Chi Sono</p>
            </Link>
          </li>
          <li>
            <Link to="/">
              <p className="button fit">Home</p>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
