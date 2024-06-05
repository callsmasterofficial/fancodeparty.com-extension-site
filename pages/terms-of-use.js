import Terms from "../components/Terms"
import Navbar from "../components/Navbar"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import { getAllmeta, getHome, getTerms } from '../locale/index'

export async function getStaticProps({ locale }) {
    const home = getHome(locale)
    const terms = getTerms(locale)
    const allmeta = getAllmeta(locale)
    return {
        props: {
            home,
            terms,
            allmeta,
            meta: {
                title: allmeta.termofusemetatitle,
                description: allmeta.termofusemetadescription,
                keywords: allmeta.homeMetakeywords,
                pageUrl: 'https://www.disneyplusgroupwatch.com/',
                featuredImage: '/logo.png',
            },
        },
    }
}

export default function privacy({ home, terms }) {
    return (
        <>
            <Navbar installBtn={home.header.installBtn} />
            <Banner heading={home.header.navBarHeading} />
            <Terms terms={terms} />
            <Footer installBtn={home.header.installBtn} footer={home.footer} />
        </>
    )
}