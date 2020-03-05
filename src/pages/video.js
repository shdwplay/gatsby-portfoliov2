import React from 'react';
import Layout from '../components/Layout';
import '../assets/styles/style.css';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Video</h2>
        <p>I miei lavori di fotografia in movimento</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          {/* <h3>Lorem ipsum dolor</h3> */}
          <div className="video-wrapper">
            <iframe
              width="560"
              height="349"
              src="https://www.youtube.com/embed/bssu0O5mO9I"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
