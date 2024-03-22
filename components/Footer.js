import React from 'react'
import Link from 'next/link'
import InstallButton from './InstallButton'
import siteConfig from '../siteConfig'
import { useRouter } from 'next/router'
import { languageMap } from '../constants/languages'
import { i18n } from '../next.config'

function Footer({ installBtn, footer }) {
  const router = useRouter()
  const localeChangeHandler = (e) => {
    const locale = e.target.value

    router.push(
      {
        route: router.pathname,
        query: router.query,
      },
      router.asPath,
      { locale }
    )
  }
  return (
    <div className="footer-container mt-[20%] w-screen md:mt-[10%]">
      <div className="footer-box -mt-14 border-t-2 border-white"></div>

      <div className=" mt-8 flex items-center  justify-center">
        <p className="primary_text_color pb-5 text-xl font-semibold">
          {footer.letUsKnow}
        </p>
      </div>
      <div className="heading flex items-center justify-center">
        <h3 className="primary_text_color text-xl font-bold md:text-3xl">
          {footer.anyQuestions}
        </h3>
      </div>

      <div className="btn-box m-10 flex w-auto items-center justify-center border-b-2 border-[#1F183B]">
        <div className="install_btn -mt-6 mb-5 mr-10 items-center justify-center md:mt-0">
          <InstallButton installBtn={installBtn} />
        </div>

        <button className="-mt-6 mb-5 flex w-auto items-center justify-center rounded-[4px] border-2 border-[#1F183B] bg-white p-2 text-xl transition-all duration-200 hover:bg-[#1F183B] hover:text-white md:mt-0">
          <Link href={`${siteConfig.blogUrl}`}>
            <span className="px-2 text-base font-bold">{footer.blog}</span>
          </Link>
        </button>

        <button className="-mt-6 mb-5 ml-4 flex w-auto items-center justify-center rounded-[4px] border-2 border-[#1F183B] bg-white p-2 text-xl transition-all duration-200 hover:bg-[#1F183B] hover:text-white md:mt-0">
          <Link href="/privacy">
            <span className="px-2 text-base font-bold "> {footer.privacy}</span>
          </Link>
        </button>
        <div className="-mt-6 mb-5 flex w-auto items-center justify-center rounded-[4px] p-2 text-xl text-white transition-all duration-200  md:mt-0">
          <select
            onChange={localeChangeHandler}
            className="mt-2 h-8 w-[100px] rounded-md bg-[#1f183b] pl-3"
            value={router.locale}
          >
            {i18n.locales.map((item) => (
              <option value={item} key={item}>
                {languageMap[item]}
              </option>
            ))}
          </select>
        </div>
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
              {footer.popularSearches} :
            </h4>
            <span className="primary_text_color mr-1">:</span>
            <p className="primary_text_color text-justify text-xs md:text-base">
              {footer.footerTags.map((item, index) => {
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
              {footer.disclaimer}
            </h4>
            <span className="primary_text_color ml-5 mr-5">:</span>
            <p className="primary_text_color text-base">
              {footer.disclaimerContent}
            </p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
