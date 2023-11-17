import Link from "next/link"
import VideoBox from "../elements/VideoBox"
import { useState } from "react"
import ModalPopup from "../layout/ModalPopup"
import { useTranslations } from 'next-intl';

export default function Content3() {
    const [isContactPopup, setContactPopup] = useState(false)
    const handleContactPopup = () => setContactPopup(false)
    const t = useTranslations();

    return (
        <>
            <ModalPopup isContactPopup={isContactPopup} handleContactPopup={handleContactPopup} />

            <section className="content-section">
                <div className="row">
                    {/* <div className="col-xxl-5 col-xl-4 col-lg-4 col-md-12 pd_zero bg_op_2 content_three_dd">
                        <img src="/assets/images/projects/img-6.png" alt="" />
                    </div> */}
                    <div className="col-xxl-5 col-xl-4 col-lg-4 col-md-12 pd_zero bg_op_1" style={{ backgroundImage: 'url(/assets/images/corporate_tax.jpg)', backgroundPosition: "left center" }}>
                    </div>
                    <div className="col-xxl-7 col-xl-8 col-lg-8 col-md-12 bg_op_1" style={{ backgroundImage: 'url(/assets/images/home-10-content-1.jpg)' }}>
                        <div className="row">
                            <div className="col-xxl-1 col-xl-1 col-md-12" />
                            <div className="col-xxl-9 col-xl-9 col-md-12">
                                <div className="content-wrapper">
                                    {/*===============spacing==============*/}
                                    <div className="pd_top_80" />
                                    {/*===============spacing==============*/}
                                    <div className="title_all_box style_one light_color">
                                        <div className="title_sections left">
                                            {/* <div className="before_title">WHO WILL BE INTERESTED IN IT?</div> */}
                                            <h2 className="mb-4">{t("9% corporate income tax starting June 2023… but not for everyone")}</h2>
                                            <p>{t("On 1 June 2023, a 9% tax on profits was introduced for companies operating within the UAE, but only on profits generated in domestic sales")}
                                                <br /><br />
                                                {t("Local businesses such as pizzerias, pharmacies, supermarkets, hairdressers etc that provide a service to local customers will be subject to this tax The 9% for these companies will be applied if profits exceed 375,000 AED (approximately 95,000 euros)")}
                                                <br /><br />
                                                {t("Anyone who generates profits primarily from international clients is exempt from this tax Schedule your free consultation to find out if your business model falls under this exemption")}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="row gutter_15px">
                                        <div className="">
                                            <div className="theme_btn_all color_one">
                                                <button className="theme-btn one" onClick={() => setContactPopup(true)}>Book a free consultaiton now</button>
                                            </div>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_70" />
                                    {/*===============spacing==============*/}
                                </div>
                            </div>
                            <div className="col-xxl-2 col-xl-2 col-md-12" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
