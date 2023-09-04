import React from 'react'
import Text2ques from './Text2ques'
import siteConfig from '../siteConfig'
import InstallButton from './InstallButton'

function Text2() {
  return (
    <div className="text2Container w-screen bg-gray-100">
      <div
        className="text2-container m-auto mt-14  w-[80%] pb-[20px]"
        style={{}}
      >
        <div className="text2-inner_container  md:mt-0 ">
          <div className="text-box flex items-center justify-center ">
            <h3 className="primary_text_color -mt-8 mb-5 p-2 pt-5 text-2xl font-semibold md:mt-0 md:text-3xl">
              {siteConfig.section.three.heading}
            </h3>
          </div>
          <p className="primary_text_color text-justify">
            {siteConfig.section.three.subHeading}
          </p>
        </div>

        {/* video text container start here */}
        <div className="main-container  m-auto mt-10 w-[100%] md:flex ">
          <div className="-mt-1 h-fit cursor-pointer md:mr-2 md:w-[50%]">
            {/* first question */}
            <Text2ques />
          </div>
          {/* text ends here */}
          {/* video start here */}
          {/* <div className="video-box  ml-2 md:mt-0 md:w-[50%] ">
            <CustomVideo src={siteConfig.section.three.video} />
          </div> */}
        </div>
        <div className="mt-12 flex items-center   justify-center  md:w-[100%]">
          <InstallButton />
        </div>
      </div>
    </div>
  )
}

export default Text2
