import React, { useEffect } from "react";
import "./sections.css"

import AOS from 'aos';
import 'aos/dist/aos.css';

const SectionLayout = ({ section }) => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    const { id, content, name } = section

    let fadeAnimation = ""
    switch (id) {
        case "aboutMe":
            fadeAnimation = "fade-up-left"
            break
        case "highlights":
            fadeAnimation = "zoom-out"
            break
        case "technicalSkills":
            fadeAnimation = "flip-up"
            break
        default:
            fadeAnimation = "fade";
    }

    return (
        <section id={id} className="container-fluid ">
            <div className="row">
                <h3 className="col-12" data-aos="fade-left">{name}</h3>
                <div className="shape col-12" data-aos="slide-right"></div>
                <div className="container contentContainer row">
                    <div className="col-12 justify-content-center align-self-center align-content-center" data-aos={fadeAnimation}>
                        {content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionLayout;