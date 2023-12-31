import React from 'react'
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import Blogimg from '../../components/Blogimg'
import Footer from '../../components/Footer'
import db from '../../config/db'
import Blog from '../../models/blog'
import siteConfig from '../../siteConfig'

const site = siteConfig.siteId

export async function getStaticProps() {
  try {
    await db()
    const blogsRaw = await Blog.find(
      { site },
      'title slug featured_image createdAt cat tags author meta_description meta_keywords',
      { sort: { createdAt: -1 }, limit: 12 }
    )
      .populate('cat', 'name slug')
      .exec()
    const data = JSON.parse(JSON.stringify(blogsRaw))
    // return {
    //   props: {
    //     data,
    //   },
    //   revalidate: 86400,
    // };
    return {
      props: {
        meta: {
          title: 'Blog - fancodeparty',
          description: '',
          keywords: '',
          pageUrl: 'https://fancodeparty.com/blog',
          featuredImage: '',
        },
        data,
      },
    }
  } catch (err) {
    return {
      props: {
        err,
      },
    }
  }
}

function blog({ data }) {
  return (
    <div className="blogpage">
      <Navbar />
      <Banner />
      <Blogimg data={data} />
      <Footer />
    </div>
  )
}

export default blog
