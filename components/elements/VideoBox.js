import { useState } from "react"
import ModalVideo from 'react-modal-video'

export default function VideoBox({ videoId = "vfhzo499OeA", iconColor = "white", buttonBgColor = "" }) {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <a onClick={() => setOpen(true)} className="d-flex justify-content-center align-items-center" style={{ backgroundColor: buttonBgColor }}><i className="icon-play" style={{ color: iconColor }} /></a>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={videoId} onClose={() => setOpen(false)} />
        </>
    )
}
