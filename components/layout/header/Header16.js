"use client"
import Link from "next/link"
import Navbar from "../Navbar"
import { useState } from "react"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useRef } from "react"

export default function Header16({ handleContactPopup, handleMobileMenu }) {
    const [languageHovered, setLanguageHovered] = useState(false)
    const [selectedLangauge, setSelectedLangauge] = useState('it')
    const languageDropDownRef = useRef(null)
    const router = useRouter()

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (languageDropDownRef.current && !languageDropDownRef.current.contains(event.target)) {
                setLanguageHovered(false);
            }
        };

        // Attach the event listener to the document
        document.addEventListener('click', handleClickOutside);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [])
    return (
        <>
            <div className="header_area" id="header_contents">
                <header className="main-header header header_v13">
                    <div className="header_top">
                        <div className="default-container">
                            <div className="header_socails_dd">
                                <Link href="#"> <span className="fa fa-facebook social_dd text-white" />
                                    {/* <small>facebook</small> */}
                                </Link>

                                <Link href="#"> <span className="fa fa-whatsapp social_dd text-white" />
                                    {/* <small>facebook</small> */}
                                </Link>

                                <Link href="#">
                                    <img src="/assets/images/pngs/twitter1.png" className=" text-white" alt="" style={{ width: "35px", height: "35px", padding: "10px" }} />
                                    {/* <span className="fa fa-twitter " /> */}
                                    {/* <small>twitter</small> */}
                                </Link>

                                <Link href="#"> <span className="fa fa-skype social_dd text-white" />
                                    {/* <small>skype</small> */}
                                </Link>

                                <Link href="#"> <span className="fa fa-instagram social_dd text-white" />
                                    {/* <small>instagram</small> */}
                                </Link>

                                <Link href="#"> <span className="fa fa-youtube social_dd text-white" />
                                    {/* <small>youtube</small> */}
                                </Link>

                                <Link href="#"> <span className="fa fa-envelope-o social_dd text-white" />
                                    {/* <small>youtube</small> */}
                                </Link>
                            </div>

                            {/* <div className="top_left">
                                    <ul className="top-links clearfix">
                                        <li>
                                            <Link href="#" className="get_a_quote">Get a quote </Link>
                                        </li><li>Welcome to our consulting company.</li>
                                    </ul>
                                </div> */}
                            {/* <div className="top_right text-right" style={{ justifyContent: "center" }}> */}
                            {/* <ul className="contact_info_two">
                                        <li className="single">
                                            <p> <span className="icon-telephone" style={{ color: "white" }} /> <Link href="tel:+98 060 712 34">+98
                                                060 712
                                                34</Link>
                                            </p>
                                        </li>
                                        <li className="single">
                                            <p><span className="icon-mail" style={{ color: "white" }} /><Link href="mailto:sendmail@creote.com">sendmail@creote.com</Link>
                                            </p>
                                        </li>
                                        <li className="single">
                                            <p> <span className="icon-location2" style={{ color: "white" }} />
                                                61W Business Str Hobert, LA </p>
                                        </li>
                                    </ul> */}

                            {/* <Link href="/about-us" locale="es">Spanish</Link>
                                    <Link href="/" locale="it">Italian</Link>
                                    <Link href="/" locale="en">English</Link> */}

                            {/* <Link href={"/en"} locale="en">English</Link> */}

                            {/* </div> */}
                        </div>
                    </div>
                    <div className="navbar_outer get_sticky_header">
                        <div className="default-container">
                            <nav className="inner_box d-flex justify-between">
                                <div className="header_logo_box">
                                    <Link href="/" className="logo navbar-brand" style={{ display: 'flex', alignItems: "center", maxHeight: "70px" }}>
                                        <img src="assets/images/logo-default.png" alt="Creote" className="logo_default" />
                                        <img src="assets/images/logo-default.png" alt="Creote" className="logo__sticky" />
                                    </Link>
                                </div>

                                <ul className="navbar_right d-flex items-center">
                                    <li ref={languageDropDownRef}>
                                        {/* LANGUAGE DROPDOWN */}
                                        <div className="language_dropdown_dd mt-1" style={{ backgroundImage: `url(/assets/images/flags/${selectedLangauge}.png)`, backgroundSize: "cover" }} onClick={() => setLanguageHovered(state => !state)}>
                                            {languageHovered && <>
                                                <div className="language_items_dd">
                                                    <Link href={router.pathname} locale="en" className="language_item_dd" onClick={() => setSelectedLangauge('en')}>
                                                        <img src="/assets/images/flags/en.png" alt="" />
                                                        <span>English</span>
                                                    </Link>

                                                    <Link href={router.pathname} locale="it" className="language_item_dd" onClick={() => setSelectedLangauge('it')}>
                                                        <img src="/assets/images/flags/it.png" alt="" />
                                                        <span>Italian</span>
                                                    </Link>

                                                    <Link href={router.pathname} locale="es" className="language_item_dd" onClick={() => setSelectedLangauge('es')}>
                                                        <img src="/assets/images/flags/es.png" alt="" />
                                                        <span>Spanish</span>
                                                    </Link>
                                                </div>
                                            </>}
                                        </div>
                                    </li>
                                    <li>
                                        <button type="button" className="contact-toggler" onClick={handleContactPopup}><i className="icon-menu1" /></button>
                                    </li>
                                </ul>

                                {/* <div className="navbar_togglers hamburger_menu" onClick={handleMobileMenu}>
                                    <span className="line" />
                                    <span className="line" />
                                    <span className="line" />
                                </div> */}

                                {/* <div className="header_content header_content_collapse">
                                    <div className="header_menu_box">
                                        <div className="navigation_menu">
                                            <Navbar />
                                        </div>
                                    </div>
                                </div> */}
                            </nav>
                        </div>
                    </div >
                </header >
                {/* end of the loop */}
            </div >

        </>
    )
}
