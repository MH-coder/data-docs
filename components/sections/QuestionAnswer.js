import React, { useState } from 'react'
import { useTranslations } from 'next-intl';

const QuestionAnswer = () => {
    const t = useTranslations();

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
                                <div className="before_title">{t("FAQ")}</div>
                                {/* <h2>Question &amp; Answer</h2>
                                <p>Check our FAQs for quick answers to frequently asked questions we receive.<br /> If you have other questions write.</p> */}
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
                                            {t("How long does a work/entrepreneur visa last in Dubai?")}<span className="icon-play" />
                                        </dt>
                                        <dd className="accordion-content hide" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                            <p>{t("Work and entrepreneur visas are valid for 2 years")}</p>
                                        </dd>
                                        <dt className={isActive.key == 2 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(2)}>
                                            {t("Do I have to reside in Dubai all year round?")}<span className="icon-play" />
                                        </dt>
                                        <dd className="accordion-content hide" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                            <p>{t("No Staying in Dubai for at least 24 hours once every 6 months is sufficient")}</p>
                                        </dd>
                                        <dt className={isActive.key == 3 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(3)}>
                                            {t("Can I get a Visa to reside in Dubai without opening a company?")}<span className="icon-play" />
                                        </dt>
                                        <dd className="accordion-content hide" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                            <p>{t("Certainly Contact our professionals who will provide you with all the necessary information")}</p>
                                        </dd>
                                        <dt className={isActive.key == 7 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(7)}>{t("Can I visit your office in Dubai?")}<span className="icon-play" />
                                        </dt>
                                        <dd className="accordion-content hide" style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
                                            <p>{t("Yes You can directly visit our offices and our professionals who will follow you throughout the process until the opening of your company")}</p>
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
                                            {t("How many days does it take to set up a company in Dubai?")}<span className="icon-play" />
                                        </dt>
                                        <dd className="accordion-content hide" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                            <p>{t("It takes 3 to 5 days to set up a company")}</p>
                                        </dd>
                                        <dt className={isActive.key == 5 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(5)}>{t("Is it possible to have local assistance for all the necessary procedures during my stay in Dubai?")}<span className="icon-play" />
                                        </dt>
                                        <dd className="accordion-content hide" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                            <p>{t("Yes For any need you will be supported by a professional")}</p>
                                        </dd>
                                        <dt className={isActive.key == 6 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(6)}>{t("Is it mandatory to rent an office when I set up a company in Dubai?")}<span className="icon-play" />
                                        </dt>
                                        <dd className="accordion-content hide" style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                            <p>{t("No For companies in the Free Zone there are no obligations to have an office for rent")}</p>
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