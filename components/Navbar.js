import React from 'react'
import Link from 'next/link'
import siteConfig from '../siteConfig'
import InstallButton from '../components/InstallButton'

function Navbar({ installBtn }) {
  return (
    <div className="nav-container flex w-screen items-center justify-evenly p-3">
      <div className="second  m-auto w-[80%] items-center justify-between md:flex">
        <Link href="/">
          <div className="logo-box md:m-2 md:cursor-pointer ">
            <img
              className="h-[50px] w-[130px] object-contain"
              src={siteConfig.logo}
              alt={siteConfig.siteName}
            />
          </div>
        </Link>
        <div className="ml-0 mt-4  md:m-0 lg:m-0 xl:m-0">
          <InstallButton installBtn={installBtn} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
