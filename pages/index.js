import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Text from '../components/Text'
import Text2 from '../components/Text2'
import Footer from '../components/Footer'
import Script from 'next/script'
import Video_content from '../components/Video_content'
import Fask_question from '../components/Fask_ques'

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title:
          'Host Fancode Party: Stream Sports Events Worldwide In Real Time',
        description:
          'Host global streaming parties with Fancode Party Extension & enjoy real-time HD sync, controllability, live chat or personalized profiles. Free and fun for all. ',
        keywords:
          'Cricket live,Fancode Party,Fancode Party Extension, Fancode Party Chrome Extension, how to use Fancode Party, install Fancode Party, Fancode Party, Fancode watch party, Fancode Party Extension, Fancode Party Chrome Extension, Watch Fancode Party, Guide to Fancode Party, how to use Fancode Party, How to Make Fancode Party, How to Make a Fancode Party, How to Watch Fancode Together',
        pageUrl: 'https://fancodeparty.com',
        featuredImage: '/logo.png',
      },
    },
  }
}

const Home = () => {
  return (
    <div className="w-screen">
      <Script src="https://cdn.tailwindcss.com" />

      <Navbar />
      <Banner />
      {/* <ImageIcon/> */}
      <Text />
      <Text2 />
      <Video_content />
      <Fask_question />
      <Footer />

      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script>
    </div>
  )
}

export default Home
