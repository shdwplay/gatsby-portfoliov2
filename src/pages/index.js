import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';
import { Link } from 'gatsby';

// import pic1 from '../assets/images/pic01.jpg';
// import pic2 from '../assets/images/pic02.jpg';
// import pic3 from '../assets/images/pic03.jpg';

import ritratti from '../assets/images/ritratti.jpg';
import eventi from '../assets/images/eventi.jpg';
import altro from '../assets/images/altro.jpg';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/Gallery" className="button primary">
                Gallery
              </a>
            </Scroll>
            {/* <Link to="/Gallery">Gallery</Link> */}
            {/* <Scroll type="id" element="one">
              <a href="#two" className="button primary">
                Video
              </a>
            </Scroll> */}
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            Creativa, amante dell'arte
            <br />affascinata dal mondo digitale.
          </h2>
          <p>
            Nella fotografia ho trovato la mia principale forma d'espressione.
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <Link to="/Gallery#ritratti">
            <img src={ritratti} alt="" />
          </Link>
        </div>
        <div className="content">
          <h2>
            Ritratti
          </h2>
          <p>
            La mia collezione di volti.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <Link to="/Gallery#eventi">
            <img src={eventi} alt="" />
          </Link>
        </div>
        <div className="content">
          <h2>
            Eventi
          </h2>
          <p>
            Concerti, manifestazioni e momenti speciali visti da dietro
            la mia macchina fotografica.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <Link to="/Gallery#altro">
            <img src={altro} alt="" />
          </Link>
        </div>
        <div className="content">
          <h2>
            Miscellanea
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={ritratti} alt="" />
        </div>
        <div className="content">
          <h2>
            Video
          </h2>
          <p>
            I miei lavori di fotografia in movimento.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          {/* <h2>Accumsan mus tortor nunc aliquet</h2> */}
          <p>
            "Mi avvicinai alla fotografia come un'anatra si avvicina all'acqua. Non ho mai voluto fare niente altro." 
            <br />Berenice Abbott
          </p>
        </header>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Contatti</h2>
          <p>
            Per qualsiasi informazione:
            annadellabadiart@gmail.com  
          </p>
        </header>
        <ul className="actions stacked">
          <li>
          <Link to="/Gallery#ritratti">
          <a href="/#" className="button fit primary">
              About Me
            </a>
          </Link>
            {/* <a href="/#" className="button fit primary">
              About Me
            </a> */}
          </li>
          <li>
            <a href="/#" className="button fit">
              Home
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
