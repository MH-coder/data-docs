import Preloader from "@/components/elements/Preloader"
import { useEffect, useState } from "react"
import 'swiper/css'
import "swiper/css/navigation"
import "swiper/css/pagination"

import "../public/assets/css/bootstrap.min.css"
import "../public/assets/css/owl.css"
import "../public/assets/css/flexslider.css"
import "../public/assets/css/font-awesome.min.css"
import "../public/assets/css/icomoon.css"
import "../public/assets/css/jquery.fancybox.min.css"
import "../public/assets/css/scss/elements/theme-css.css"
import "../public/assets/css/style.css"
import "../public/assets/css/woocommerce-layout.css"
import "../public/assets/css/woocommerce.css"
import "../public/assets/css/floating-circle-menu.css"

// TRANSLATION
// import '@/i18n/config'
import { useRouter } from 'next/router';
import { NextIntlClientProvider } from 'next-intl';

function MyApp({ Component, pageProps }) {
    console.log("Page Props: ", pageProps);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    const router = useRouter();

    return (
        <>
            <title>Creote - Corporate & Consulting Business NextJS Template</title>
            {!loading ? (
                <NextIntlClientProvider
                    locale={router.locale}
                    messages={pageProps.messages}
                    timeZone="Europe/Vienna"
                >
                    <Component {...pageProps} />
                </NextIntlClientProvider>
            ) : (
                <Preloader />
            )}
        </>
    )
} export default MyApp
