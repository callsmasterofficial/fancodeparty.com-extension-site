import Navbar from "../components/Navbar"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Affiliate from "../components/Affiliate"
import { getAllmeta, getHome, getAffiliate } from '../locale/index'



export async function getStaticProps({ locale }) {
    const home = getHome(locale)
    const affiliate = getAffiliate(locale)
    const allmeta = getAllmeta(locale)
    return {
        props: {
            home,
            affiliate,
            allmeta,
            meta: {
                title: allmeta.privacymetatitle,
                description: allmeta.blogMetadescription,
                keywords: allmeta.homeMetakeywords,
                pageUrl: 'https://www.disneyplusgroupwatch.com/',
                featuredImage: '/logo.png',
            },
        },
    }
}

export default function privacy({ home, affiliate }) {
    return (
        <>
            <Navbar installBtn={home.header.installBtn} />
            <Banner heading={home.header.navBarHeading} />
            <Affiliate affiliate={affiliate} />
            <Footer installBtn={home.header.installBtn} footer={home.footer} />
        </>
    )
}