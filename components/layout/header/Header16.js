import Link from "next/link"
import Navbar from "../Navbar"
export default function Header16({ handleContactPopup, handleMobileMenu }) {
    return (
        <>
            <div className="header_area" id="header_contents">
                <header className="main-header header header_v13">
                    <div className="header_top">
                        <div className="default-container">
                            <div className="header_top_inner">
                                <div className="top_left">
                                    <ul className="top-links clearfix">
                                        <li>
                                            <Link href="#" className="get_a_quote">Get a quote </Link>
                                        </li><li>
                                        </li><li>Welcome to our consulting company.</li>
                                    </ul>
                                </div>
                                <div className="top_right text-right">
                                    <ul className="contact_info_two">
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
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar_outer get_sticky_header">
                        <div className="default-container">
                            <nav className="inner_box">
                                <div className="header_logo_box">
                                    <Link href="/" className="logo navbar-brand" style={{ display: 'flex', alignItems: "center", maxHeight: "70px" }}>
                                        <img src="assets/images/logo-default.png" alt="Creote" className="logo_default" style={{ width: "100%", height: "220px", objectFit: "contain" }} />
                                        <img src="assets/images/logo-default.png" alt="Creote" className="logo__sticky" />
                                    </Link>
                                </div>
                                <div className="navbar_togglers hamburger_menu" onClick={handleMobileMenu}>
                                    <span className="line" />
                                    <span className="line" />
                                    <span className="line" />
                                </div>
                                <div className="header_content header_content_collapse">
                                    <div className="header_menu_box">
                                        <div className="navigation_menu">
                                            <Navbar />
                                        </div>
                                    </div>
                                    <ul className="navbar_right navbar_nav ">
                                        <li>
                                            <button type="button" className="contact-toggler" onClick={handleContactPopup}><i className="icon-menu1" /></button>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
                {/* end of the loop */}
            </div>

        </>
    )
}