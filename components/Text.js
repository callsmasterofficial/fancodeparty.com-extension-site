import React from 'react'
import Textques from './Textques'
import siteConfig from '../siteConfig'
import InstallButton from './InstallButton'
import CustomVideo from './CustomVideo'
function Text() {
  // linksUri

  // function for question

  return (
    <div className="main-container m-auto w-screen ">
      {/* first text container  */}
      <div className="text-container m-auto  -mt-5 mb-10 flex  h-16 w-[80%]  items-center justify-center  md:m-5 md:w-[100%]">
        <h2 className="primary_text_color  ml-2 text-2xl font-semibold md:text-[32px]">
          {` ${siteConfig.section.first.heading}`}
        </h2>
      </div>

      {/* Second text contaner start here */}
      <div className="second-container mb-10  flex">
        <div className="innner-text-container m-auto -mt-[20px]  w-[80%] md:mt-0 md:flex">
          <div className="paragraph-box w-[100%] pt-5 md:w-[50%]">
            <div
              className="p-tag primary_text_color -mt-6 mb-[28px] mr-[20px] p-[4px] text-justify"
              dangerouslySetInnerHTML={{
                __html: siteConfig.section.first.html,
              }}
            />
            {/* button tag start here */}
            <div className="mt-6 md:mt-12">
              <InstallButton />
            </div>
          </div>

          <div className="paragraph-box mb-16 w-[100%] md:w-[50%]">
            <img
              src="./screenshot-1.jpg"
              height="0"
              width="600"
              alt="how to host"
            />
          </div>
          {/* video */}
          {/* <div className="paragraph-box mb-16 w-[100%] md:w-[50%]">
            <CustomVideo src={siteConfig.section.first.video} />
          </div> */}
        </div>
      </div>
      {/* middle buttons */}

      {/* after video text section  */}
      <div
        className="after-video-container -mt-14  md:mt-14"
        style={{ boxShadow: '0 0 8px #1F183B', padding: ' 50px 0' }}
      >
        <div className="text-box  m-auto mb-5  w-[80%]">
          <div className=" flex justify-center ">
            <h3 className="primary_text_color text-xl font-bold md:text-[30px]">
              {siteConfig.section.second.heading}
            </h3>
          </div>

          {/* afterborder_text */}
          <div className="after-border-text mt-5 flex items-center justify-center">
            <p className="primary_text_color mb-10 text-justify">
              {siteConfig.section.second.subHeading}
            </p>
          </div>

          {/* afterborder_video & text*/}
          <div className="m-auto mb-24 w-[95%]">
            <div className="main-video-text-container mt-5 md:flex ">
              <div className="paragraph-box mb-16 w-[100%] md:w-[50%] mr-5">
                <img
                  src="./screenshot-2.jpg"
                  height="0"
                  width="600"
                  alt="Host Fancode Party_ Stream"
                />
              </div>
              {/* textcontainer start here */}

              <div className="text-border-container mt-8 h-fit w-[100%] cursor-pointer md:mt-0  md:w-[50%]">
                <Textques />
              </div>
            </div>
          </div>
          {/* text & video ends here */}
          <div className="-mt-10 flex  w-[100%] items-center justify-center md:mt-0  md:w-[100%]">
            <InstallButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Text
