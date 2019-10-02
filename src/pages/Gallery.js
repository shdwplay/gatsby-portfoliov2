import React from 'react';

import Layout from '../components/Layout';

// import pic1 from '../assets/images/pic01.jpg';
// import pic2 from '../assets/images/pic02.jpg';
// import pic3 from '../assets/images/pic03.jpg';
// import pic4 from '../assets/images/pic04.jpg';
// import pic5 from '../assets/images/pic05.jpg';
// import banner from '../assets/images/bannerdef.jpg';
import ritratti from '../assets/images/ritratti.jpg';
import eventi from '../assets/images/eventi.jpg';
import altro from '../assets/images/altro.jpg';

import ModalImage from 'react-modal-image';

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
                        {/* <h4>Gallery</h4> */}
                        <a name="ritratti"><h4>Ritratti</h4></a>
                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/wcaZcbain2s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                        <div className="box alt" id="ritratti">
                            <div className="row gtr-50 gtr-uniform">
                                <div className="col-4">
                                    <ModalImage
                                        small={ritratti}
                                        medium={ritratti}
                                    />
                                </div>
                                <div className="col-4">
                                    <ModalImage
                                        small={eventi}
                                        medium={eventi}
                                    />
                                </div>
                                <div className="col-4">
                                    <ModalImage
                                        small={altro}
                                        medium={altro}
                                    />
                                </div>
                                <div className="col-4">
                                    <ModalImage
                                        small={altro}
                                        medium={altro}
                                    />
                                </div>
                                <div className="col-4">
                                    <ModalImage
                                        small={eventi}
                                        medium={eventi}
                                    />
                                </div>
                                <div className="col-4">
                                    <ModalImage
                                        small={ritratti}
                                        medium={ritratti}
                                    />
                                </div>
                                <div className="col-4">
                                    <ModalImage
                                        small={ritratti}
                                        medium={ritratti}
                                    />
                                </div>
                                <div className="col-4">
                                    <ModalImage
                                        small={eventi}
                                        medium={eventi}
                                    />
                                </div>
                                <div className="col-4">
                                    <ModalImage
                                        small={altro}
                                        medium={altro}
                                    />
                                </div>
                                {/* <div className="col-12"><span className="image fit"><img src={banner} alt="" /></span></div> */}
                                {/* <div className="col-4"><span className="image fit"> <img src={ritratti} alt="" /></span></div>
                                <div className="col-4"><span className="image fit"><img src={eventi} alt="" /></span></div>
                                <div className="col-4"><span className="image fit"><img src={altro} alt="" /></span></div>
                                <div className="col-4"><span className="image fit"><img src={altro} alt="" /></span></div>
                                <div className="col-4"><span className="image fit"><img src={eventi} alt="" /></span></div>
                                <div className="col-4"><span className="image fit"><img src={ritratti} alt="" /></span></div>
                                <div className="col-4"><span className="image fit"><img src={ritratti} alt="" /></span></div>
                                <div className="col-4"><span className="image fit"><img src={eventi} alt="" /></span></div>
                                <div className="col-4"><span className="image fit"><img src={altro} alt="" /></span></div> */}
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <a name="eventi"><h4 align="right">Eventi</h4></a>
                        <div className="box alt">
                            <div className="row gtr-50 gtr-uniform">
                            <div className="col-4">
                                    <ModalImage
                                        small={ritratti}
                                        medium={ritratti}
                                    />
                                </div>
                                <div className="col-4">
                                    <ModalImage
                                        small={eventi}
                                        medium={eventi}
                                    />
                                </div>
                                <div className="col-4">
                                    <ModalImage
                                        small={altro}
                                        medium={altro}
                                    />
                                </div>
                                <div className="col-4">
                                    <ModalImage
                                        small={altro}
                                        medium={altro}
                                    />
                                </div>
                                <div className="col-4">
                                    <ModalImage
                                        small={eventi}
                                        medium={eventi}
                                    />
                                </div>
                                <div className="col-4">
                                    <ModalImage
                                        small={ritratti}
                                        medium={ritratti}
                                    />
                                </div>
                                <div className="col-4">
                                    <ModalImage
                                        small={ritratti}
                                        medium={ritratti}
                                    />
                                </div>
                                <div className="col-4">
                                    <ModalImage
                                        small={eventi}
                                        medium={eventi}
                                    />
                                </div>
                                <div className="col-4">
                                    <ModalImage
                                        small={altro}
                                        medium={altro}
                                    />
                                </div>
                                {/* <div className="col-12"><span className="image fit"><img src={banner} alt="" /></span></div> */}
                                {/* <div className="col-4"><span className="image fit"><img src={ritratti} alt="" /></span></div>
                                <div className="col-4"><span className="image fit"><img src={eventi} alt="" /></span></div>
                                <div className="col-4"><span className="image fit"><img src={altro} alt="" /></span></div>
                                <div className="col-4"><span className="image fit"><img src={altro} alt="" /></span></div>
                                <div className="col-4"><span className="image fit"><img src={eventi} alt="" /></span></div>
                                <div className="col-4"><span className="image fit"><img src={ritratti} alt="" /></span></div>
                                <div className="col-4"><span className="image fit"><img src={ritratti} alt="" /></span></div>
                                <div className="col-4"><span className="image fit"><img src={eventi} alt="" /></span></div>
                                <div className="col-4"><span className="image fit"><img src={altro} alt="" /></span></div> */}
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <a name="altro"><h4>Altro</h4></a>
                        <div className="box alt">
                            <div className="row gtr-50 gtr-uniform">
                            <div className="col-4">
                                    <ModalImage
                                        small={ritratti}
                                        medium={ritratti}
                                    />
                                </div>
                                <div className="col-4">
                                    <ModalImage
                                        small={eventi}
                                        medium={eventi}
                                    />
                                </div>
                                <div className="col-4">
                                    <ModalImage
                                        small={altro}
                                        medium={altro}
                                    />
                                </div>
                                <div className="col-4">
                                    <ModalImage
                                        small={altro}
                                        medium={altro}
                                    />
                                </div>
                                <div className="col-4">
                                    <ModalImage
                                        small={eventi}
                                        medium={eventi}
                                    />
                                </div>
                                <div className="col-4">
                                    <ModalImage
                                        small={ritratti}
                                        medium={ritratti}
                                    />
                                </div>
                                <div className="col-4">
                                    <ModalImage
                                        small={ritratti}
                                        medium={ritratti}
                                    />
                                </div>
                                <div className="col-4">
                                    <ModalImage
                                        small={eventi}
                                        medium={eventi}
                                    />
                                </div>
                                <div className="col-4">
                                    <ModalImage
                                        small={altro}
                                        medium={altro}
                                    />
                                </div>
                                {/* <div className="col-12"><span className="image fit"><img src={banner} alt="" /></span></div> */}
                                {/* <div className="col-4"><span className="image fit"><img src={ritratti} alt="" /></span></div>
                                <div className="col-4"><span className="image fit"><img src={eventi} alt="" /></span></div>
                                <div className="col-4"><span className="image fit"><img src={altro} alt="" /></span></div>
                                <div className="col-4"><span className="image fit"><img src={altro} alt="" /></span></div>
                                <div className="col-4"><span className="image fit"><img src={eventi} alt="" /></span></div>
                                <div className="col-4"><span className="image fit"><img src={ritratti} alt="" /></span></div>
                                <div className="col-4"><span className="image fit"><img src={ritratti} alt="" /></span></div>
                                <div className="col-4"><span className="image fit"><img src={eventi} alt="" /></span></div>
                                <div className="col-4"><span className="image fit"><img src={altro} alt="" /></span></div> */}
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <a name="altro"><h4 align="right">Video</h4></a>
                        <div className="box alt">
                            <div className="row gtr-50 gtr-uniform">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/s8B5-F7B9qk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                            {/* <div className="col-4">
                                    <ModalImage
                                        small={ritratti}
                                        medium={ritratti}
                                    />
                                </div>
                                <div className="col-4">
                                    <ModalImage
                                        small={eventi}
                                        medium={eventi}
                                    />
                                </div>
                                <div className="col-4">
                                    <ModalImage
                                        small={altro}
                                        medium={altro}
                                    />
                                </div>
                                <div className="col-4">
                                    <ModalImage
                                        small={altro}
                                        medium={altro}
                                    />
                                </div>
                                <div className="col-4">
                                    <ModalImage
                                        small={eventi}
                                        medium={eventi}
                                    />
                                </div>
                                <div className="col-4">
                                    <ModalImage
                                        small={ritratti}
                                        medium={ritratti}
                                    />
                                </div>
                                <div className="col-4">
                                    <ModalImage
                                        small={ritratti}
                                        medium={ritratti}
                                    />
                                </div>
                                <div className="col-4">
                                    <ModalImage
                                        small={eventi}
                                        medium={eventi}
                                    />
                                </div>
                                <div className="col-4">
                                    <ModalImage
                                        small={altro}
                                        medium={altro}
                                    />
                                </div> */}
                                {/* <div className="col-12"><span className="image fit"><img src={banner} alt="" /></span></div> */}
                                {/* <div className="col-4"><span className="image fit"><img src={ritratti} alt="" /></span></div>
                                <div className="col-4"><span className="image fit"><img src={eventi} alt="" /></span></div>
                                <div className="col-4"><span className="image fit"><img src={altro} alt="" /></span></div>
                                <div className="col-4"><span className="image fit"><img src={altro} alt="" /></span></div>
                                <div className="col-4"><span className="image fit"><img src={eventi} alt="" /></span></div>
                                <div className="col-4"><span className="image fit"><img src={ritratti} alt="" /></span></div>
                                <div className="col-4"><span className="image fit"><img src={ritratti} alt="" /></span></div>
                                <div className="col-4"><span className="image fit"><img src={eventi} alt="" /></span></div>
                                <div className="col-4"><span className="image fit"><img src={altro} alt="" /></span></div> */}
                            </div>
                        </div>
                        {/* <h5>Left &amp; Right</h5>
                        <p><span className="image left"><img src={pic4} alt="" /></span>Morbi mattis mi consectetur tortor elementum, varius pellentesque velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis lacinia velit aliquet. Duis non efficitur nisi, id malesuada justo. Maecenas sagittis felis ac sagittis semper. Curabitur purus leo, tempus sed finibus eget, fringilla quis risus. Maecenas et lorem quis sem varius sagittis et a est. Maecenas iaculis iaculis sem. Donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ut aliquet justo. Donec id neque ipsum. Integer eget ultricies odio. Nam vel ex a orci fringilla tincidunt. Aliquam eleifend ligula non velit accumsan cursus. Etiam ut gravida sapien. Morbi mattis mi consectetur tortor elementum, varius pellentesque velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis lacinia velit aliquet. Duis non efficitur nisi, id malesuada justo. Maecenas sagittis felis ac sagittis semper. Curabitur purus leo, tempus sed finibus eget, fringilla quis risus. Maecenas et lorem quis sem varius sagittis et a est. Maecenas iaculis iaculis sem. Donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ut aliquet justo. Donec id neque ipsum. Integer eget ultricies odio. Nam vel ex a orci fringilla tincidunt. Aliquam eleifend ligula non velit accumsan cursus. Etiam ut gravida sapien.</p>
                        <p><span className="image right"><img src={pic5} alt="" /></span>Vestibulum ultrices risus velit, sit amet blandit massa auctor sit amet. Sed eu lectus sem. Phasellus in odio at ipsum porttitor mollis id vel diam. Praesent sit amet posuere risus, eu faucibus lectus. Vivamus ex ligula, tempus pulvinar ipsum in, auctor porta quam. Proin nec dui cursus, posuere dui eget interdum. Fusce lectus magna, sagittis at facilisis vitae, pellentesque at etiam. Quisque posuere leo quis sem commodo, vel scelerisque nisi scelerisque. Suspendisse id quam vel tortor tincidunt suscipit. Nullam auctor orci eu dolor consectetur, interdum ullamcorper ante tincidunt. Mauris felis nec felis elementum varius. Nam sapien ante, varius in pulvinar vitae, rhoncus id massa. Donec varius ex in mauris ornare, eget euismod urna egestas. Etiam lacinia tempor ipsum, sodales porttitor justo. Aliquam dolor quam, semper in tortor eu, volutpat efficitur quam. Fusce nec fermentum nisl. Aenean erat diam, tempus aliquet erat. Etiam iaculis nulla ipsum, et pharetra libero rhoncus ut. Phasellus rutrum cursus velit, eget condimentum nunc blandit vel. In at pulvinar lectus. Morbi diam ante, vulputate et imperdiet eget, fermentum non dolor. Ut eleifend sagittis tincidunt. Sed viverra commodo mi, ac rhoncus justo. Duis neque ligula, elementum ut enim vel, posuere finibus justo. Vivamus facilisis maximus nibh quis pulvinar. Quisque hendrerit in ipsum id tellus facilisis fermentum. Proin mauris dui.</p> */}
                    </section>

                </div>
            </section>
        </article>

    </Layout>
);

export default IndexPage;
