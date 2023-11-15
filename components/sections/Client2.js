
import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

export default function Client2() {
    const swiperOptions = {
        // General
        direction: 'horizontal',
        modules: [Autoplay,],
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1199: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
            1350: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
        }
    }
    return (
        <>
            <section className="client-section">
                {/*===============spacing==============*/}
                {/* <div className="pd_top_50" /> */}
                {/*===============spacing==============*/}
                <div className="partners_container_dd container">

                    {/* <img src="/assets/images/partner-logos/logos.png" alt="" /> */}
                    <div className="image_dd">
                        <img src="/assets/images/partner-logos/gov_dubai.png" alt="clients-logo" className="img-fluid" style={{ width: "160px", height: "160px" }} />
                    </div>

                    <div className="image_dd">
                        <img src="/assets/images/partner-logos/dubai_economy.png" alt="clients-logo" className="img-fluid" />
                    </div>


                    <div className="image_dd pb-0">
                        <img src="/assets/images/partner-logos/dubai_muncipality.png" alt="clients-logo" className="img-fluid" />
                    </div>


                    <div className="image_dd">
                        <img src="/assets/images/partner-logos/dubai_chamber.png" alt="clients-logo" className="img-fluid" />
                    </div>


                    <div className="image_dd">
                        <img src="/assets/images/partner-logos/dubai_courts.png" alt="clients-logo" className="img-fluid" />
                    </div>
                </div>

                {/*===============spacing==============*/}
                {/* <div className="pd_bottom_50" /> */}
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
