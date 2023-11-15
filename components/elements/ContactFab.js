import Link from "next/link"
import { useEffect, useState } from "react"

export default function ContactFab() {

    const [hasScrolled, setHasScrolled] = useState("false")
    const [showContacts, setShowContacts] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", onScroll)
        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    })

    const onScroll = () => {
        if (window.scrollY > 100 && !hasScrolled) {
            setHasScrolled(true)
        } else if (window.scrollY < 100 && hasScrolled) {
            setHasScrolled(false)
        }
    }

    return (
        <>
            <div className={`menu ${showContacts && "active"}`} style={{ bottom: hasScrolled && "40px" }}>
                <div className={`toggle`} onClick={() => { setShowContacts(showContacts => !showContacts) }}>
                    {!showContacts ? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 15 15"><path fill="white" d="M2.5 6a2.49 2.49 0 0 0-1.414.438a6.502 6.502 0 0 1 12.828 0A2.488 2.488 0 0 0 12.5 6A1.5 1.5 0 0 0 11 7.5v4a1.5 1.5 0 0 0 .947 1.395A1.5 1.5 0 0 1 10.5 14H8v1h2.5a2.5 2.5 0 0 0 2.458-2.042A2.5 2.5 0 0 0 15 10.5v-3a7.5 7.5 0 0 0-15 0v3A2.5 2.5 0 0 0 2.5 13A1.5 1.5 0 0 0 4 11.5v-4A1.5 1.5 0 0 0 2.5 6Z" /></svg> : <span className="fa fa-close"></span>}
                </div>

                <li style={{ "--i": 0 }}>
                    <a href="#"><span className="fa fa-whatsapp"></span></a>
                </li>
                <li style={{ "--i": 1 }}>
                    <a href="#"><span className="fa fa-facebook"></span></a>
                </li>
                <li style={{ "--i": 2 }}>
                    <a href="#"><span className="fa fa-phone"></span></a>
                </li>
            </div>
        </>
    )
}