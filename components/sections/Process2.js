import Link from "next/link"
import VideoBox from "../elements/VideoBox"
import { useTranslations } from 'next-intl';

export default function Process2() {
    const t = useTranslations();

    return (
        <>
            <section className="process-section">
                {/*===============spacing==============*/}
                {/* <div className="pd_top_80" /> */}
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title_all_box style_three text-center dark_color">
                                <div className="title_sections three">
                                    {/* <div className="before_title">COMPLETE SERVICE WITH MAXIMUM CONFIDENTIALITY</div> */}
                                    <h2>{t("The advantages of opening your company in Dubai")}</h2>
                                    <p>
                                        {t("Setting up a company in the UAE offers huge benefits to entrepreneurs")}
                                    </p>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_25" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12 col-sm-12 mb-sm-5 mb-md-5 mb-lg-0 mb-xl-0">
                            <div className="process_box style_three dark_color">
                                <div className="process_box_outer_three left">
                                    <div className="icon">
                                        <div className="img">
                                            <img src="/assets/images/pngs/tax.png" className="img-fluid svg_image" alt="icon png" />
                                        </div>
                                    </div>
                                    <div className="content_box">
                                        <h2><Link href="#" >{t("0% Tax")}</Link></h2>
                                        <p>{t("The best solution to be exempt from income, capital gains, corporate profits and sales taxes")}</p>
                                    </div>
                                    {/* <div className="number">
                                        <h6>01</h6>
                                    </div> */}
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_top_30" />
                            {/*===============spacing==============*/}
                            <div className="divider_1" />
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_40" />
                            {/*===============spacing==============*/}
                            <div className="process_box style_three dark_color">
                                <div className="process_box_outer_three left">
                                    <div className="icon">
                                        <div className="img">
                                            <img src="/assets/images/pngs/docs-2.png" className="img-fluid svg_image" alt="icon png" />
                                        </div>
                                    </div>
                                    <div className="content_box">
                                        <h2> <Link href="#" >
                                            {t("Virtually non-existent bureaucracy")} </Link>
                                        </h2>
                                        <p>{t("The bureaucratic commitment to manage a company in Dubai is very low and fully assisted by our consultants")}</p>
                                    </div>
                                    {/* <div className="number">
                                        <h6> 02</h6>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 mb-sm-5 mb-md-5 mb-lg-0 mb-xl-0">
                            <div className="image_boxes style_three  border_yes ">
                                <img src="/assets/images/video-box-img-1.jpg" className="background_image" alt="image" />
                                <div className="video_box">
                                    <VideoBox />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="process_box style_three dark_color">
                                <div className="process_box_outer_three right">
                                    <div className="icon">
                                        <div className="img">
                                            <img src="/assets/images/pngs/privacy.png" className="img-fluid svg_image" alt="icon png" />
                                        </div>
                                    </div>
                                    <div className="content_box">
                                        <h2><Link href="#" >{t("100% anonymity")}</Link></h2>
                                        <p>{t("In Dubai there is no obligation to publish company documents or registers")}</p>
                                    </div>
                                    {/* <div className="number">
                                        <h6>03</h6>
                                    </div> */}
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_top_30" />
                            {/*===============spacing==============*/}
                            <div className="divider_1" />
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_40" />
                            {/*===============spacing==============*/}
                            <div className="process_box style_three dark_color">
                                <div className="process_box_outer_three right">
                                    <div className="icon">
                                        <div className="img">
                                            <img src="/assets/images/pngs/residance.png" className="img-fluid svg_image" alt="icon png" />
                                        </div>
                                    </div>
                                    <div className="content_box">
                                        <h2><Link href="#" >{t("No residency requirement")}</Link></h2>
                                        <p>{t("The physical presence of the business owner is not required It is sufficient to enter Dubai once every 6 months for a duration of at least 24 hours")}</p>
                                    </div>
                                    {/* <div className="number">
                                        <h6>04</h6>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_75" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
