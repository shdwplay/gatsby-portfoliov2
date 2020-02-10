import React from 'react';
import Layout from '../components/Layout';
import '../assets/styles/style.css';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Contatti</h2>
        {/* <p>Aliquam ut ex ut interdum donec amet imperdiet eleifend</p> */}
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>Social</h3>
          <br />
          <a href="https://www.instagram.com/annadellabadia/">
            <i class="fab white fa-instagram"></i> @annadellabadia
          </a>
          <br />
          <br />
          <a href="https://www.facebook.com/AnnadellabadiaPh/">
            <i class="fab white fa-facebook"></i> Anna Della Badia Photography
          </a>
          <br />
          <br />
          <a href="https://www.flickr.com/photos/annadb/">
            <i class="fab white fa-flickr"></i> Anna Della Badia
          </a>
          <br />
          <br />
          <a href="https://www.linkedin.com/in/annadellabadia/">
            <i class="fab white fa-linkedin"></i> Anna Della Badia
          </a>
          <br />
          <br />
          <a href="https://www.imdb.com/name/nm10148210/">
            <i class="fab white fa-imdb"></i> Anna Della Badia
          </a>
          <br />
          <br />
          <hr />
          <h4>Mail</h4>
          <br />
          <p>Puoi scrivermi una mail qui:</p>
          <a href="mailto:annadellabadiart@gmail.com">
            <i class="fas white fa-envelope"></i> annadellabadiart@gmail.com
            <br />
          </a>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
