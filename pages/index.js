import Layout from "@/components/layout/Layout"
import Banner4 from "@/components/sections/Banner4"
// import {GetStaticPropsContext} from 'next';
// import { sanityClient } from "@/sanity";

// GROQ QUERIES
// import { getWelcomeSectionQuery } from "@/groq-queries"

import Price3 from "@/components/sections/Price3";
import Project10 from "@/components/sections/Project10";
import Testimonial10 from "@/components/sections/Testimonial10";
import Contact9 from "@/components/sections/Contact9";
import Client2 from "@/components/sections/Client2";
import QuestionAnswer from "@/components/sections/QuestionAnswer";
import Content3 from "@/components/sections/Content3";
import Process2 from "@/components/sections/Process2";
import Feature from "@/components/sections/Feature";

export default function Home() {
    return (
        <>
            <Layout>
                <Banner4 />
                <Client2 />
                <Process2 />
                <Content3 />
                <Project10 />
                <Price3 />
                <Feature />
                <Testimonial10 />
                <Contact9 />
                <QuestionAnswer />
            </Layout>
        </>
    )
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            messages: (await import(`../messages/${locale}.json`)).default
        }
    };
}

//  --  NEXTJS, will deploy this function while build
// export async function getStaticProps() {
//     //fetch data from an API
//     const welcomeSection = await sanityClient.fetch(getWelcomeSectionQuery)

//     return {
//         props: {
//             welcomeSection,
//         },
//         revalidate: 10
//     }
// };