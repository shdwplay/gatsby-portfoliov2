import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import { Link } from 'gatsby';

import ritratti from '../assets/images/ritratti.jpg';
import eventi from '../assets/images/eventi.jpg';
import ilresto from '../assets/images/altro.jpg';

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
          Learn More
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
          <Link to="/ritratti">
            <img src={ritratti} alt="" />
          </Link>
        </div>
        <div className="content">
          <h2>Ritratti</h2>
          <p>La mia collezione di volti.</p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <Link to="/eventi">
            <img src={eventi} alt="" />
          </Link>
        </div>
        <div className="content">
          <h2>Eventi</h2>
          <p>
            Concerti, manifestazioni e momenti speciali visti da dietro la mia
            macchina fotografica.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <Link to="/ilresto">
            <img src={ilresto} alt="" />
          </Link>
        </div>
        <div className="content">
          <h2>Il Resto</h2>
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
          <h2>Video</h2>
          <p>I miei lavori di fotografia in movimento.</p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          {/* <h2>Accumsan mus tortor nunc aliquet</h2> */}
          <p>
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
          <h2>Contatti</h2>
          <p>Per qualsiasi informazione: annadellabadiart@gmail.com</p>
        </header>
        <ul className="actions stacked">
          <li>
            <Link to="/generic">
              <p className="button fit primary">About Me</p>
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
