import Link from "next/link"
import VideoBox from "../elements/VideoBox"
import { useState } from "react"
import ModalPopup from "../layout/ModalPopup"
export default function Content3() {
    const [isContactPopup, setContactPopup] = useState(false)
    const handleContactPopup = () => setContactPopup(false)

    return (
        <>
            <ModalPopup isContactPopup={isContactPopup} handleContactPopup={handleContactPopup} />

            <section className="content-section">
                <div className="row">
                    {/* <div className="col-xxl-5 col-xl-4 col-lg-4 col-md-12 pd_zero bg_op_2 content_three_dd">
                        <img src="/assets/images/projects/img-6.png" alt="" />
                    </div> */}
                    <div className="col-xxl-5 col-xl-4 col-lg-4 col-md-12 pd_zero bg_op_1" style={{ backgroundImage: 'url(/assets/images/banner-four-bg.jpg)' }}>
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
                                            <div className="before_title">WHO WILL BE INTERESTED IN IT?</div>
                                            <h2>9% corporate tax starting June 2023</h2>
                                            <p>WFrom 1 June 2023, a tax of 9% will be applied to the profit of companies operating in the territory of the United Arab Emirates and therefore generating profits from domestic sales.
                                                <br /><br />
                                                This means that restaurants, car rental companies, hairdressers etc who work with local customers will be subject to this new tax. The tax relief is AED 375,000 (approximately €95,000.00) of profits per calendar year. Once these profits are exceeded, 9% tax will be applied on the excess.
                                                <br /><br />
                                                In contrast, companies that generate their profits primarily from international customers are exempt from any taxes.
                                                <br /><br />
                                                If you are unsure whether this tax applies to you or whether you will be able to continue generating tax-free profits in Dubai, book a completely free consultation with just a few clicks.</p>
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
