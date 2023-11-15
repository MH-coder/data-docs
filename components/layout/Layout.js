import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import ContactFab from "../elements/ContactFab"
import Breadcrumb from './Breadcrumb'
import Header16 from "./header/Header16"
import MobileMenu from './MobileMenu'
import ModalPopup from './ModalPopup'
import Footer16 from "./footer/Footer16"

export default function Layout({ breadcrumbTitle, children, blogMetaSingle }) {
    // Contact popup
    const [isContactPopup, setContactPopup] = useState(false)
    const handleContactPopup = () => setContactPopup(!isContactPopup)

    // Moblile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => setMobileMenu(!isMobileMenu)

    // Scroll Header
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })

    return (
        <>
            <div id="page" className={`page_wapper hfeed site ${scroll ? "fixed-header floating-menu" : ""} ${isMobileMenu ? "crt_mobile_menu-visible" : ""}`}>
                <div id="wrapper_full" className="content_all_warpper">
                    <Header16 handleContactPopup={handleContactPopup} handleMobileMenu={handleMobileMenu} />
                    {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} blogMetaSingle={blogMetaSingle} />}
                    <div id="content" className="site-content">
                        {children}
                    </div>
                </div>
                <Footer16 />

                <MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
                <ModalPopup isContactPopup={isContactPopup} handleContactPopup={handleContactPopup} />
            </div>
            <ContactFab />
            <BackToTop />
        </>
    )
}
