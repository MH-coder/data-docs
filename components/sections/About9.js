import Link from "next/link"
import VideoBox from "../elements/VideoBox"
export default function About9() {
    return (
        <>
            <section className="about-section bg_op_1" style={{ backgroundImage: 'url(/assets/images/about-11-bg.jpg)' }}>
                {/*===============spacing==============*/}
                <div className="pd_top_90" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row gutter_30px align-items-center">
                        <div className="col-xl-6 col-lg-10 col-md-12">
                            <div className="title_all_box style_one  dark_color">
                                <div className="title_sections ">
                                    <div className="before_title"> Dedicated Team </div>
                                    <h2>Professional Individuals</h2>
                                    <p>Our power of choice is nothing prevents being able to do , We
                                        like best every pleasure. Countsy provides Finance, Accounting and HR Solutions to
                                        venture backed startups through a combination.</p>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_20" />
                            {/*===============spacing==============*/}
                            <div className="progress_bar style_two">
                                <div className="progress_new">
                                    <div className="ProgressBar ProgressBar--animateText" data-progress={84}>
                                        <svg className="ProgressBar-contentCircle" height={170} width={170}>
                                            <circle className="ProgressBar-background" cx={85} cy={85} r={75} />
                                            <circle transform="rotate(-90, 85, 85)" className="ProgressBar-circle" cx={85} cy={85} r={75} style={{ strokeDasharray: 471, strokeDashoffset: '75.36px' }} />
                                        </svg>
                                    </div>
                                    <div className="progress-value">
                                        <div>
                                            <h6>Year of 2020 </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="content_box">
                                    <h2>84%</h2>
                                    <h3>Income Statement </h3>
                                    <p>Certain circumstances seds owing to the claims duty righteous indignation and so
                                        beguiled. </p>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_20" />
                            {/*===============spacing==============*/}
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="theme_btn_all color_one">
                                        <Link href="#" className="theme-btn one"> Download </Link>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-12">
                                    <div className="extra_content image_with_content dark_color">
                                        <div className="simple_image">
                                            <img src="/assets/images/cuntry-1.png" alt="img" />
                                            <h2> Since 1998,<br />Operating in Birmingham.</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12">
                            <div className="image_boxes style_seven">
                                <div className="image_box">
                                    <img src="/assets/images/about/about-3.jpg" className="img-fluid height_500 object-fit-cover" alt="about" />
                                    <div className="video_inner type_seven">
                                        <VideoBox />
                                    </div>
                                    <div className="experience">
                                        <div className="experience_inner">
                                            <h2> 25+ Years Of Experience </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_90" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
