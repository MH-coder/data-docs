import React, { useState } from 'react'

const QuestionAnswer = () => {

    const [isActive, setIsActive] = useState({
        status: false,
        key: null,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    return (
        <section className="faqs-section">
            {/*===============spacing==============*/}
            <div className="pd_top_90" />
            {/*===============spacing==============*/}
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title_all_box style_one text-center dark_color">
                            <div className="title_sections">
                                <div className="before_title"> Find Useful</div>
                                <h2>Question &amp; Answer</h2>
                                <p>Check our FAQs for quick answers to frequently asked questions we receive.<br /> If you have other questions write.</p>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_top_15" />
                            {/*===============spacing==============*/}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="faq_section type_two">
                            <div className="block_faq">
                                <div className="accordion">
                                    <dl>
                                        <dt className={isActive.key == 1 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(1)}>
                                            What recruitment services do you offer?<span className="icon-play" />
                                        </dt>
                                        <dd className="accordion-content hide" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                            <p>Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.</p>
                                        </dd>
                                        <dt className={isActive.key == 2 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(2)}>
                                            What sectors or industries do you recruit for?<span className="icon-play" />
                                        </dt>
                                        <dd className="accordion-content hide" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                            <p>Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.</p>
                                        </dd>
                                        <dt className={isActive.key == 3 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(3)}>
                                            How can I register a job?<span className="icon-play" />
                                        </dt>
                                        <dd className="accordion-content hide" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                            <p>Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.</p>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <section className="faq_section type_two">
                            <div className="block_faq">
                                <div className="accordion">
                                    <dl>
                                        <dt className={isActive.key == 4 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(4)}>
                                            What sectors or industries do you recruit for?<span className="icon-play" />
                                        </dt>
                                        <dd className="accordion-content hide" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                            <p>Blinded by desire, that they cannot foresee the trouble that are bound to ensue; and equal blame belongs to those who fail in their duty which is the same as saying through shrinking. Nor again is there anyone who loves or pursues or desires to obtain pain itself is pains but circumstances great</p>
                                        </dd>
                                        <dt className={isActive.key == 5 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(5)}>What recruitment services do you offer?<span className="icon-play" />
                                        </dt>
                                        <dd className="accordion-content hide" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                            <p>Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.</p>
                                        </dd>
                                        <dt className={isActive.key == 6 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(6)}>Where will you advertise my job vacancy?<span className="icon-play" />
                                        </dt>
                                        <dd className="accordion-content hide" style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                            <p>Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.</p>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            {/*===============spacing==============*/}
            <div className="pd_bottom_60" />
            {/*===============spacing==============*/}
        </section>
    )
}

export default QuestionAnswer