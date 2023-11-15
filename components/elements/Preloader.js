export default function Preloader() {
    return (
        <>
            <div className="preloader-wrap">
                <div className="preloader" style={{ backgroundImage: 'url(/assets/images/preloader.svg)', backgroundSize: "56px" }}>
                </div>
                <div className="overlay" />
            </div>
        </>
    )
}
