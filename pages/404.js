import React from 'react'
import Navbar from '../components/Navbar'
import Error from '../components/404'

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title:
          'Host Fancode Watch Parties: Stream Sports with Friends in Sync ',
        description:
          'Host global sports streaming parties with Fancode Party Extension: real-time sync, control, live chat, HD quality. Free fun for all sports enthusiasts. ',
        keywords:
          'Cricket live,Fancode Party,Fancode Party Extension, Fancode Party Chrome Extension, how to use Fancode Party, install Fancode Party, Fancode Party, Fancode watch party, Fancode Party Extension, Fancode Party Chrome Extension, Watch Fancode Party, Guide to Fancode Party, how to use Fancode Party, How to Make Fancode Party, How to Make a Fancode Party, How to Watch Fancode Together,',
        pageUrl: 'https://fancodeparty.com/',
        featuredImage: '/logo.png',
      },
    },
  }
}
function error() {
  return (
    <div className="error_404 ">
      <div>
        <Navbar />
      </div>
      <Error />
    </div>
  )
}

export default error
