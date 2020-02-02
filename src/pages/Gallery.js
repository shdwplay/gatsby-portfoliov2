import React from 'react';

import Layout from '../components/Layout';
import { Link } from 'gatsby';

import ritratti from '../assets/images/ritratti.jpg';
import eventi from '../assets/images/eventi.jpg';
import ilresto from '../assets/images/altro.jpg';
import aaa from '../assets/images/aaa.jpg';

const IndexPage = () => (
    <Layout fullMenu>
        <article id="main">
            <header>
                <h2>Gallery</h2>
                <p>Aliquam ut ex ut interdum donec amet imperdiet eleifend</p>
            </header>
            <section className="wrapper style5">
                <div className="inner">
                    <section>
                        <h4>Ritratti</h4>
                        <div className="box alt" id="ritratti">
                            <div className="row gtr-50 gtr-uniform">
                                <div className="col-4"><span className="image fit"><Link to="/ritratti"><img src={ritratti} alt="" /></Link></span></div>
                                <div className="col-4"><span className="image fit"><Link to="/ritratti"><img src={aaa} alt="" /></Link></span></div>
                                <div className="col-4"><span className="image fit"><Link to="/ritratti"><img src={ritratti} alt="" /></Link></span></div>
                                <div className="col-4"><span className="image fit"><Link to="/ritratti"><img src={ritratti} alt="" /></Link></span></div>
                                <div className="col-4"><span className="image fit"><Link to="/ritratti"><img src={ritratti} alt="" /></Link></span></div>
                                <div className="col-4"><span className="image fit"><Link to="/ritratti"><img src={ritratti} alt="" /></Link></span></div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <h4 align="right">Eventi</h4>
                        <div className="box alt">
                            <div className="row gtr-50 gtr-uniform">
                                <div className="col-4"><span className="image fit"><Link to="/eventi"><img src={eventi} alt="" /></Link></span></div>
                                <div className="col-4"><span className="image fit"><Link to="/eventi"><img src={eventi} alt="" /></Link></span></div>
                                <div className="col-4"><span className="image fit"><Link to="/eventi"><img src={eventi} alt="" /></Link></span></div>
                                <div className="col-4"><span className="image fit"><Link to="/eventi"><img src={eventi} alt="" /></Link></span></div>
                                <div className="col-4"><span className="image fit"><Link to="/eventi"><img src={eventi} alt="" /></Link></span></div>
                                <div className="col-4"><span className="image fit"><Link to="/eventi"><img src={eventi} alt="" /></Link></span></div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <h4>Altro</h4>
                        <div className="box alt">
                            <div className="row gtr-50 gtr-uniform">
                                <div className="col-4"><span className="image fit"><Link to="/ilresto"><img src={ilresto} alt="" /></Link></span></div>
                                <div className="col-4"><span className="image fit"><Link to="/ilresto"><img src={ilresto} alt="" /></Link></span></div>
                                <div className="col-4"><span className="image fit"><Link to="/ilresto"><img src={ilresto} alt="" /></Link></span></div>
                                <div className="col-4"><span className="image fit"><Link to="/ilresto"><img src={ilresto} alt="" /></Link></span></div>
                                <div className="col-4"><span className="image fit"><Link to="/ilresto"><img src={ilresto} alt="" /></Link></span></div>
                                <div className="col-4"><span className="image fit"><Link to="/ilresto"><img src={ilresto} alt="" /></Link></span></div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <h4 align="right">Video</h4>
                        <div className="box alt">
                            <div className="row gtr-50 gtr-uniform">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/s8B5-F7B9qk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </article>

    </Layout>
);

export default IndexPage;