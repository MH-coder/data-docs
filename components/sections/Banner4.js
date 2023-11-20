// import { urlFor } from "@/sanity";
import VideoBox from "../elements/VideoBox";
import { useEffect, useState } from "react";
import { useTranslations } from 'next-intl';

const list_points = [
    "Company incorporation in 3 days", "0% Foreign Transaction Tax", "Team of professionals in different languages", "+ than 200 companies started", "Company account opening guarantee", "No share capital to be paid to open a company"
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

    const t = useTranslations();

    return (
        <>
            <div className="banner_section_hm_16 pd_left_100 pd_right_100 md_pd_left_15 md_pd_right_15">
                {/* INNER SECTION */}
                <div className="inner_section bg_op_1">
                    {/* GRADIENT */}
                    <div className="mainHeaderGradient"></div>
                    {/* CONTAINER */}
                    <div className="default-container">
                        <div className="row gutter_30px">
                            <div className="col-lg-12 pd_zero">
                                <div className="team_intro_box team_intro_box_container">
                                    <div className="team_intro_inner">
                                        <div className="team_intro_start">

                                            <div className="banner_intro_dd">
                                                <div className="title title_dd">
                                                    <h1 style={{ marginBottom: "0px" }}>{t("Create your company in Dubai now")}</h1>
                                                    <h5 style={{ color: "white", marginBottom: "30px" }}>{t("Simple, Fast, with professionals at your service")}</h5>
                                                </div>

                                                {/* LIST ITEMS */}
                                                <div className="list_items_container_dd">
                                                    {
                                                        list_points.map((point, index) => {
                                                            return <div key={index} className="list_item_dd">
                                                                <i className=" icon-checked check_icon_dd" />
                                                                <p>{t(point)}</p>
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
