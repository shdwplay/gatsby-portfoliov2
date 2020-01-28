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

const IndexPage = () => {

const sections = [
    {
        sectionTitle: "ritratti",
        images: [
            ritratti,
            ritratti,
            ritratti,
            ritratti,
            ritratti
        ]
    },
    {
        sectionTitle: "eventi",
        images: [
            eventi,
            eventi,
            eventi,
            eventi,
            eventi,
            eventi,
        ]
    },
    {
        sectionTitle: "altro",
        images: [
            altro,
            altro,
            altro,
            altro,
            altro,
            altro,
            altro
        ]
    }
]

return (
    <Layout fullMenu>
        <article id="main">
            <header>
                <h2>Gallery</h2>
                <p>Aliquam ut ex ut interdum donec amet imperdiet eleifend</p>
            </header>
            <section className="wrapper style5">
                <div className="inner">
                    <section>
                        {sections.map((section, i) => (
                            <>
                                <a name={section.sectionTitle}>{section.sectionTitle}</a>
                                <div className="box alt" id={section.sectionTitle}>
                                    <div className="row gtr-50 gtr-uniform">
                                        {section.images.map((img, i) => (
                                            <div className="col-4" key={i}>
                                                <ModalImage
                                                    small={img}
                                                    medium={img}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </>
                        ))}
                    </section>
                </div>
            </section>
        </article>

    </Layout>
);
                    }
export default IndexPage;