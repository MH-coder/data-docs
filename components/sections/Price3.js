import { ApiEndpoints } from "@/Constants/ApiEndpoints";
import ApiRequest from "@/Constants/ApiRequest";
import { errorAlert } from "@/utils/alerts";
import Link from "next/link"
import { useEffect } from "react";
import { useState } from "react";
import ModalPopup from "../layout/ModalPopup";
import { FcCheckmark } from "react-icons/fc";
import { CgClose } from "react-icons/cg";
import { GoIssueClosed } from "react-icons/go";
import { SlClose } from "react-icons/sl";
import { IoCloseCircle } from "react-icons/io5";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { useTranslations } from 'next-intl';


export default function Price3() {
    const [activeIndex2, setActiveIndex2] = useState(1);
    const [packages, setPackages] = useState([]);
    const [isContactPopup, setContactPopup] = useState(false)
    const handleContactPopup = () => setContactPopup(false)
    const t = useTranslations();

    const handleOnClick2 = (index) => {
        setActiveIndex2(index);
    };

    const fetchAllPackages = async () => {
        const res = await ApiRequest().request({
            method: ApiEndpoints.GET_ALL_PACKAGES.method,
            url: ApiEndpoints.GET_ALL_PACKAGES.url,
        })

        console.log("packages: ", res);

        if (!res?.data?.success) {
            // errorAlert(res?.data?.message)
        } else {
            const suggestions = ["Recommended", "Most Recommended", "Popular"]
            setPackages(res?.data?.data.map((pricePackage, index) => {
                return { ...pricePackage, suggestion: suggestions[index] }
            }))
        }
    }

    useEffect(() => {
        fetchAllPackages()
    }, [])

    return (
        <>
            <ModalPopup isContactPopup={isContactPopup} handleContactPopup={handleContactPopup} />

            <section className="pricing-section bg_light_2 position-relative" style={{ marginTop: "", zIndex: 0 }}>
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="padding_dd">
                    <div className="row align-items-end">
                        <div className="col-lg-8 col-md-12">
                            <div className="title_all_box style_six dark_color">
                                <div className="title_sections">
                                    <div className="before_title">
                                        <span className="icon-briefcase icon" />
                                        {t("Our Exclusive Packages")}
                                    </div>
                                    <div className="" style={{ width: "100%" }}>{t("The prices indicated below always include the assistance of a professional who will guide you in choosing the best solution to form your company in Dubai")}</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_20" />
                    {/*===============spacing==============*/}
                    {/* <section className="price_plan_with_tab price_tb_style_two">
                        <div className="row">
                            <div className="col-lg-12 ml-auto">
                                <div className="tab_pricing_list">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist" style={{ marginBottom: "20px" }}>
                                        <li className="nav-item" role="presentation">
                                            <button className={activeIndex2 === 1 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick2(1)}>
                                                Monthly</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className={activeIndex2 === 2 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick2(2)}>
                                                Anually</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    <div className="row">
                        {
                            packages?.map((_package) => {
                                return <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="pricing_plan_box type_one">
                                        <div className="tags">{_package?.suggestion}</div>
                                        <div className="pricing_plan_box_inner package_shadow_dd">
                                            <div className="upper_content">
                                                <div className="title_s">
                                                    <h2>{_package?.name}</h2>
                                                </div>
                                                <div className="price_rs">
                                                    <h6><small>{_package?.price} AED</small></h6>
                                                </div>
                                                <p>Power of choice is untrammelled and do what we like best.</p>
                                            </div>
                                            <div className="lower_content">
                                                <ul>
                                                    {
                                                        _package?.services?.map((service, index) => {
                                                            return <li key={index} className={"price_list_item_dd"} >
                                                                {
                                                                    service?.available ?
                                                                        <span className=""><FaCircleCheck size={20} color="#388e3c

" /></span> :
                                                                        <span className="text-danger" style={{ fontWeight: 800 }}>
                                                                            <FaCircleXmark size={20} color="#d32f2f" />
                                                                        </span>

                                                                }
                                                                <p className={`mb-0`} style={{ fontSize: "14px", fontWeight: service?.available && 700, marginLeft: "7px" }}>{service?.name}</p></li>

                                                        })
                                                    }

                                                </ul>
                                            </div>
                                            <div className="get_start_button theme_btn_all mx-4">
                                                <button className="theme-btn one" onClick={() => setContactPopup(true)}>Get
                                                    Started<span className="icon-arrow-right" /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }

                        {/* <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="pricing_plan_box type_one">
                                <div className="tags">Most Recommended</div>
                                <div className="pricing_plan_box_inner">
                                    <div className="upper_content">
                                        <div className="title_s">
                                            <h2>Standard Pack</h2>
                                        </div>
                                        <div className="price_rs">
                                            <h6><small>59$</small> / <span>Year</span></h6>
                                        </div>
                                        <p>Matters to principle of selection our pleasures to secure.</p>
                                    </div>
                                    <div className="lower_content">
                                        <ul>
                                            <li>
                                                <span className="yes_ico fa fa-check-circle-o" />
                                                4-5 Weeks from to finish </li>
                                            <li>
                                                <span className="yes_ico fa fa-check-circle-o" />
                                                Organisational Strategy
                                            </li>
                                            <li>
                                                <span className="yes_ico fa fa-check-circle-o" />
                                                20 Days of support
                                            </li>
                                            <li>
                                                <span className="yes_ico fa fa-check-circle-o" />
                                                Data sprint
                                                Results revision </li>
                                            <li>
                                                <span className="no_ico fa fa-times-circle-o" />
                                                Data sprint
                                                Results revision </li>
                                        </ul>
                                    </div>
                                    <div className="get_start_button theme_btn_all">
                                        <Link href="#" className="theme-btn one">Get
                                            Started<span className="icon-arrow-right" /></Link >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="pricing_plan_box type_one">
                                <div className="tags">Popular Pack</div>
                                <div className="pricing_plan_box_inner">
                                    <div className="upper_content">
                                        <div className="title_s">
                                            <h2>Advanced Pack</h2>
                                        </div>
                                        <div className="price_rs">
                                            <h6><small>99$</small> / <span>Year</span></h6>
                                        </div>
                                        <p>These cases are perfectly simple &amp; easy to distinguish.</p>
                                    </div>
                                    <div className="lower_content">
                                        <ul>
                                            <li>
                                                <span className="yes_ico fa fa-check-circle-o" />
                                                4-5 Weeks from to finish </li>
                                            <li>
                                                <span className="yes_ico fa fa-check-circle-o" />
                                                Organisational Strategy
                                            </li>
                                            <li>
                                                <span className="yes_ico fa fa-check-circle-o" />
                                                20 Days of support
                                            </li>
                                            <li>
                                                <span className="yes_ico fa fa-check-circle-o" />
                                                Data sprint
                                                Results revision </li>
                                            <li>
                                                <span className="yes_ico fa fa-check-circle-o" />
                                                Data sprint
                                                Results revision </li>
                                        </ul>
                                    </div>
                                    <div className="get_start_button theme_btn_all">
                                        <Link href="#" className="theme-btn one">Get
                                            Started<span className="icon-arrow-right" /></Link >
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                {/*===============spacing==============*/}
                {/* <div className="pd_bottom_70" /> */}
                {/*===============spacing==============*/}
                {/* <div className="position_absolute curve_shape_bottom_1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="none">
                        <path className="elementor-shape-fill" d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7	s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7	c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z M260.8,11.3	c-0.7-1-2-0.4-4.3-0.4c-2.3,0-6.1-1.2-5.8-1.1c0.3,0.1,3.1,1.5,6,1.9C259.7,12.2,261.4,12.3,260.8,11.3z M242.4,8.6	c0,0-2.4-0.2-5.6-0.9c-3.2-0.8-10.3-2.8-15.1-3.5c-8.2-1.1-15.8,0-15.1,0.1c0.8,0.1,9.6-0.6,17.6,1.1c3.3,0.7,9.3,2.2,12.4,2.7	C239.9,8.7,242.4,8.6,242.4,8.6z M185.2,8.5c1.7-0.7-13.3,4.7-18.5,6.1c-2.1,0.6-6.2,1.6-10,2c-3.9,0.4-8.9,0.4-8.8,0.5	c0,0.2,5.8,0.8,11.2,0c5.4-0.8,5.2-1.1,7.6-1.6C170.5,14.7,183.5,9.2,185.2,8.5z M199.1,6.9c0.2,0-0.8-0.4-4.8,1.1	c-4,1.5-6.7,3.5-6.9,3.7c-0.2,0.1,3.5-1.8,6.6-3C197,7.5,199,6.9,199.1,6.9z M283,6c-0.1,0.1-1.9,1.1-4.8,2.5s-6.9,2.8-6.7,2.7	c0.2,0,3.5-0.6,7.4-2.5C282.8,6.8,283.1,5.9,283,6z M31.3,11.6c0.1-0.2-1.9-0.2-4.5-1.2s-5.4-1.6-7.8-2C15,7.6,7.3,8.5,7.7,8.6	C8,8.7,15.9,8.3,20.2,9.3c2.2,0.5,2.4,0.5,5.7,1.6S31.2,11.9,31.3,11.6z M73,9.2c0.4-0.1,3.5-1.6,8.4-2.6c4.9-1.1,8.9-0.5,8.9-0.8	c0-0.3-1-0.9-6.2-0.3S72.6,9.3,73,9.2z M71.6,6.7C71.8,6.8,75,5.4,77.3,5c2.3-0.3,1.9-0.5,1.9-0.6c0-0.1-1.1-0.2-2.7,0.2	C74.8,5.1,71.4,6.6,71.6,6.7z M93.6,4.4c0.1,0.2,3.5,0.8,5.6,1.8c2.1,1,1.8,0.6,1.9,0.5c0.1-0.1-0.8-0.8-2.4-1.3	C97.1,4.8,93.5,4.2,93.6,4.4z M65.4,11.1c-0.1,0.3,0.3,0.5,1.9-0.2s2.6-1.3,2.2-1.2s-0.9,0.4-2.5,0.8C65.3,10.9,65.5,10.8,65.4,11.1	z M34.5,12.4c-0.2,0,2.1,0.8,3.3,0.9c1.2,0.1,2,0.1,2-0.2c0-0.3-0.1-0.5-1.6-0.4C36.6,12.8,34.7,12.4,34.5,12.4z M152.2,21.1	c-0.1,0.1-2.4-0.3-7.5-0.3c-5,0-13.6-2.4-17.2-3.5c-3.6-1.1,10,3.9,16.5,4.1C150.5,21.6,152.3,21,152.2,21.1z">
                        </path>
                        <path className="elementor-shape-fill" d="M269.6,18c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3	C267.7,18.8,269.7,18,269.6,18z">
                        </path>
                        <path className="elementor-shape-fill" d="M227.4,9.8c-0.2-0.1-4.5-1-9.5-1.2c-5-0.2-12.7,0.6-12.3,0.5c0.3-0.1,5.9-1.8,13.3-1.2	S227.6,9.9,227.4,9.8z">
                        </path>
                        <path className="elementor-shape-fill" d="M204.5,13.4c-0.1-0.1,2-1,3.2-1.1c1.2-0.1,2,0,2,0.3c0,0.3-0.1,0.5-1.6,0.4	C206.4,12.9,204.6,13.5,204.5,13.4z">
                        </path>
                        <path className="elementor-shape-fill" d="M201,10.6c0-0.1-4.4,1.2-6.3,2.2c-1.9,0.9-6.2,3.1-6.1,3.1c0.1,0.1,4.2-1.6,6.3-2.6	S201,10.7,201,10.6z">
                        </path>
                        <path className="elementor-shape-fill" d="M154.5,26.7c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3	C152.6,27.5,154.6,26.8,154.5,26.7z">
                        </path>
                        <path className="elementor-shape-fill" d="M41.9,19.3c0,0,1.2-0.3,2.9-0.1c1.7,0.2,5.8,0.9,8.2,0.7c4.2-0.4,7.4-2.7,7-2.6	c-0.4,0-4.3,2.2-8.6,1.9c-1.8-0.1-5.1-0.5-6.7-0.4S41.9,19.3,41.9,19.3z">
                        </path>
                        <path className="elementor-shape-fill" d="M75.5,12.6c0.2,0.1,2-0.8,4.3-1.1c2.3-0.2,2.1-0.3,2.1-0.5c0-0.1-1.8-0.4-3.4,0	C76.9,11.5,75.3,12.5,75.5,12.6z">
                        </path>
                        <path className="elementor-shape-fill" d="M15.6,13.2c0-0.1,4.3,0,6.7,0.5c2.4,0.5,5,1.9,5,2c0,0.1-2.7-0.8-5.1-1.4	C19.9,13.7,15.7,13.3,15.6,13.2z">
                        </path>
                    </svg>
                </div> */}
            </section>

        </>
    )
}
