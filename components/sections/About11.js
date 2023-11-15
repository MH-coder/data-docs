import Link from "next/link"
import VideoBox from "../elements/VideoBox"

const bulletPoints = [
    {
        title: "5-Day Genesis",
        bullet: "Establishment of the company in just 5 days"
    },
    {
        title: "Secure Enterprise Profile",
        bullet: "Secured corporate account"
    },
    {
        title: "Complete Serenity",
        bullet: "360° carefree service"
    },
    {
        title: "Global Trade Freedom",
        bullet: "Zero taxes on foreign transactions"
    },
    {
        title: "Enterprise Surge",
        bullet: "Over 450 companies established"
    },
]

export default function About11() {
    return (
        <>
            <section className="about-section">
                {/*===============spacing==============*/}
                {/* <div className="pd_top_70" /> */}
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="image_box_new type_one clearfix">
                                <div className="image_one">
                                    <img src="/assets/images/about/about-11.jpg" className="img-fluid height_570px object-fit-cover" alt="img" />
                                    <div className="year_experience">
                                        <h2>10+ Years Of experience</h2>
                                    </div>
                                </div>
                                <div className="video_box video-inner text-center">
                                    <VideoBox />
                                </div>
                                <div className="image_two">
                                    <img src="/assets/images/about/about-9.jpg" className="img-fluid" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="title_all_box style_six  dark_color">
                                <div className="title_sections">
                                    <div className="before_title">
                                        <span className="icon-briefcase icon" />
                                        ABOUT US
                                    </div>
                                    <div className="title"> Take Your Business To The Next Level</div>
                                    <p className="description_text">
                                        It's simple and discreet with Italian professionals on site
                                    </p>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            {/* <div className="pd_bottom_25" /> */}
                            {/*===============spacing==============*/}
                            <div className="row gutter_25px bullets_container">
                                {
                                    bulletPoints.map((bullet) => {
                                        return <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="bullet_container">
                                                <div className="icon_container">
                                                    <img src="/assets/images/idea.png" className="icon" alt="icon png" />
                                                </div>
                                                <div className="text_box">
                                                    <h5>{bullet.title}
                                                    </h5>
                                                    <p>{bullet.bullet}</p>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_30" />
                            <div className="row gutter_25px">
                                <div className="col-ms-12">
                                    <div className="theme_btn_all color_one ">
                                        <Link href="#" className="theme-btn one about_consultation_button">
                                            Book a consultation now</Link>
                                    </div>
                                    <div className="pd_bottom_25" />
                                </div>
                                {/* <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="image">
                                        <img src="/assets/images/sign.png" className="img-fluid" alt="img" />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_80" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
