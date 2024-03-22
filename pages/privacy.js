import React from 'react'
import Privacy from '../components/Privacy'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import { getHome, getPrivacy, getAllmeta } from '../locale'

export async function getStaticProps({ locale }) {
  const home = getHome(locale)
  const privacy = getPrivacy(locale)
  const allmeta = getAllmeta(locale)
  return {
    props: {
      home,
      privacy,
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

export default function privacy({ home, privacy }) {
  return (
    <>
      <Navbar installBtn={home.header.installBtn} />
      <Banner heading={home.header.navBarHeading} />
      <Privacy privacy={privacy} />
      <Footer installBtn={home.header.installBtn} footer={home.footer} />
    </>
  )
}
