// import { urlFor } from "@/sanity";
import VideoBox from "../elements/VideoBox";
import { useEffect, useState } from "react";

const list_points = [
    "Establishment of the company in just 5 days", "Secured corporate account", "360° carefree service", "Zero taxes on foreign transactions", "Over 450 companies established"
]

export default function Banner4() {

    const [showIntroVideo, setShowIntroVideo] = useState(true)
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth
    });

    const handleResize = () => {
        setDimensions({
            width: window.innerWidth,
        });
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize, false)
    }, [])

    return (
        <>
            <div className="banner_section_hm_16 pd_left_100 pd_right_100 md_pd_left_15 md_pd_right_15">
                <div className="inner_section bg_op_1" style={{ background: 'url(/assets/images/business-background-3.jpg)', backgroundPosition: "top", objectFit: "contain", position: "relative" }}>
                    <div className="mainHeaderGradient" style={{ position: 'absolute', width: "100%", height: "100%", borderRadius: "30px", }}></div>
                    <div className="default-container">
                        <div className="row gutter_30px">
                            <div className="col-lg-12 pd_zero">
                                <div className="team_intro_box team_intro_box_container">
                                    <div className="team_intro_inner">
                                        <div className="team_intro_start">

                                            <div className="banner_intro_dd">
                                                <div className="title title_dd">
                                                    <h6>Set up your</h6>
                                                    <h1 className="">Company in Dubai</h1>
                                                </div>

                                                {/* LIST ITEMS */}
                                                <div className="list_items_container_dd">
                                                    {
                                                        list_points.map((point, index) => {
                                                            return <div key={index} className="list_item_dd">
                                                                <i className=" icon-checked" />
                                                                <p>{point}</p>
                                                            </div>
                                                        })
                                                    }

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
