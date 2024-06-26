import React from 'react'
import siteConfig from '../siteConfig'

function Banner({ heading }) {
  return (
    <div className="m-auto mb-10  w-[80%] items-center justify-center  bg-[#1F183B] p-0 py-2 md:flex md:w-screen md:bg-gradient-to-r md:p-3.5">
      <h1 className="primary_text_color md:secondary_text_color ml-4 text-lg  md:font-semibold  ">
        {siteConfig.siteName}
      </h1>

      <h5 className="primary_text_color md:secondary_text_color ml-4 text-lg md:ml-1.5 md:font-semibold ">
        {heading}
      </h5>
    </div>
  )
}

export default Banner
