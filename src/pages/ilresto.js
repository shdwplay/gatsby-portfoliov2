import React, { useState } from 'react';

import Layout from '../components/Layout';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 

import ritratti from '../assets/images/ritratti.jpg';
import eventi from '../assets/images/eventi.jpg';
import altro from '../assets/images/altro.jpg';

const IndexPage = () => {

const [photoIndex, setPhotoIndex] = useState(0)
const [isOpen, setIsOpen] = useState(false)
const [_section, _setSection] = useState("")

const sections = [
    {
        sectionTitle: "ritratti",
        images: [
            ritratti,
            eventi,
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

const showPicture = (index, sectionTitle) => {
    setIsOpen(true)
    setPhotoIndex(index)
    _setSection(sectionTitle)
}

// Debug
console.log("photoindex", photoIndex)
console.log("isOpen", isOpen)
console.log("current section", _section)

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
                            <div key={i}>
                                <a name={section.sectionTitle}>{section.sectionTitle}</a>
                                <div className="box alt" id={section.sectionTitle}>
                                    <div className="row gtr-50 gtr-uniform">
                                        {section.images.map((img, i) => (
                                            <>
                                            <div className="col-4" key={i}>
                                                <img 
                                                    src={img} 
                                                    alt="add_a_alt_text_here" 
                                                    width="100%" 
                                                    onClick={() => showPicture(i, section.sectionTitle)}
                                                />
                                            </div>
                                            {isOpen && _section === section.sectionTitle && photoIndex === i && (
                                                <Lightbox
                                                    mainSrc={section.images[photoIndex]}
                                                    nextSrc={section.images[(photoIndex + 1) % section.images.length]}
                                                    prevSrc={section.images[(photoIndex + section.images.length - 1) % section.images.length]}
                                                    onCloseRequest={() => setIsOpen(false)}
                                                    onMovePrevRequest={() => setPhotoIndex((photoIndex + section.images.length -1) % section.images.length)}
                                                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % section.images.length)}
                                                    enableZoom={false}
                                                />
                                            )} 
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            </section>                             
        </article>
    </Layout>
);
                    }
export default IndexPage;
