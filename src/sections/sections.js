import React from "react";
import "./sections.css"

const SectionLayout = ({ section }) => {
    const { id, content, name } = section
    return (
        <section id={id} className="container-fluid ">
            <div className="row">
                <h3 className="col-12">{name}</h3>
                <div className="shape col-12"></div>
                <div className="container contentContainer row">
                    <div className="col-12 justify-content-center align-self-center align-content-center">
                        {content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionLayout;