import React from 'react'
import Link from 'next/link'
import InstallButton from './InstallButton'
import siteConfig from '../siteConfig'

function Footer() {
  return (
    <div className="footer-container mt-[20%] w-screen md:mt-[10%]">
      <div className="footer-box -mt-14 border-t-2 border-white"></div>

      <div className=" mt-8 flex items-center  justify-center">
        <p className="primary_text_color pb-5 text-xl font-semibold">
          {siteConfig.footer.subheading}
        </p>
      </div>
      <div className="heading flex items-center justify-center">
        <h3 className="primary_text_color text-xl font-bold md:text-3xl">
          {siteConfig.footer.title}
        </h3>
      </div>

      <div className="btn-box m-10 flex w-auto items-center justify-center border-b-2 border-[#1F183B]">
        <div className="install_btn -mt-6 mb-5 mr-10 items-center justify-center md:mt-0">
          <InstallButton />
        </div>

        <button className="-mt-6 mb-5 flex w-auto items-center justify-center rounded-[4px] border-2 border-[#1F183B] bg-white p-2 text-xl transition-all duration-200 hover:bg-[#1F183B] hover:text-white md:mt-0">
          <Link href={`${siteConfig.blogUrl}`}>
            <span className="px-2 text-base font-bold">Blog</span>
          </Link>
        </button>

        <button className="-mt-6 mb-5 ml-4 flex w-auto items-center justify-center rounded-[4px] border-2 border-[#1F183B] bg-white p-2 text-xl transition-all duration-200 hover:bg-[#1F183B] hover:text-white md:mt-0">
          <Link href="/privacy">
            <span className="px-2 text-base font-bold ">Privacy</span>
          </Link>
        </button>
      </div>
      <div className="popu_search_container mb-4">
        <div className="popu_search_box  -mt-6 flex items-center justify-center p-2 ">
          <span className="span  flex items-center">
            <img
              className="h-8 w-8 object-contain pr-2"
              src="https://img.icons8.com/ios-glyphs/344/ffffff/right3.png"
              alt="side_icon"
            />
            <h4 className="primary_text_color mr-1 text-sm font-bold md:text-lg">
              Popular Searches
            </h4>
            <span className="primary_text_color mr-1">:</span>
            <p className="primary_text_color text-justify text-xs md:text-base">
              {siteConfig.footer.tags.map((item, index) => {
                if (index == 0 || index == 1) {
                  return (
                    <span className="pr-2" key={`tags-${index}`}>
                      {item}
                    </span>
                  )
                } else {
                  return <span key={`tags-${index}`}>{item},</span>
                }
              })}
            </p>
          </span>
        </div>

        <div className="popu_search_box  flex items-center justify-center p-2">
          <span className="span  flex items-center">
            <h4 className="primary_text_color ml-8 mr-1 text-base font-bold ">
              Disclaimers
            </h4>
            <span className="primary_text_color ml-5 mr-5">:</span>
            <p className="primary_text_color text-base">
              {siteConfig.footer.disclaimer}
            </p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
