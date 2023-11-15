import Link from "next/link"
import VideoBox from "../elements/VideoBox"
export default function Process2() {
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
                                    <div className="before_title">COMPLETE SERVICE WITH MAXIMUM CONFIDENTIALITY</div>
                                    <h2>Advantages of opening a company in Dubai</h2>
                                    <p>
                                        Setting up a company in the United Arab Emirates offers numerous advantages that Italian entrepreneurs could not even imagine.
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
                                            <img src="/assets/images/projects/img-1.png" className="img-fluid svg_image" alt="icon png" />
                                        </div>
                                    </div>
                                    <div className="content_box">
                                        <h2><Link href="#" >0% Tax</Link ></h2>
                                        <p>In 95% of cases our clients are exempt from income, capital gains, company profits and sales taxes.</p>
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
                                            <img src="/assets/images/projects/img-2.png" className="img-fluid svg_image" alt="icon png" />
                                        </div>
                                    </div>
                                    <div className="content_box">
                                        <h2> <Link href="#" >
                                            Almost non-existent bureaucracy </Link>
                                        </h2>
                                        <p>The bureaucratic commitment for a company in Dubai is extremely reduced compared to European countries.</p>
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
                                            <img src="/assets/images/projects/img-3.png" className="img-fluid svg_image" alt="icon png" />
                                        </div>
                                    </div>
                                    <div className="content_box">
                                        <h2><Link href="#" >100% Anonymous</Link ></h2>
                                        <p>In Dubai and the United Arab Emirates there are no publicly available company registers and documents.</p>
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
                                            <img src="/assets/images/projects/img-4.png" className="img-fluid svg_image" alt="icon png" />
                                        </div>
                                    </div>
                                    <div className="content_box">
                                        <h2><Link href="#" >No residency requirement</Link></h2>
                                        <p>As a company owner, to keep your visa active you simply need to enter the country every 6 months for at least 24 hours.</p>
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
