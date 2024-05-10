import React from 'react'
import Link from 'next/link'

function Terms({ terms }) {
  return (
    <div className="m-auto mb-20 mt-10 w-[80%] text-justify">
      <div className="privacyContainer h-auto w-[100%] rounded-md border-2 border-green-800 p-5">
        <h2 className="p-4 text-center text-4xl">{terms.mainheading}</h2>
        <p className="px-3">
          {terms.mainpara}{' '}
          <Link className="text-[#188b18]" href="/">
            fancodeparty.com
          </Link>{' '}
          <span>{terms.mainparaspan}</span>
        </p>
        <h3 className="p-3 text-2xl">{terms.heading1}</h3>
        <p className="px-3">
          {terms.para1}{' '}
          <Link className="text-[#188b18]" href="/privacy-policy">
            {terms.PrivacyPolicy}
          </Link>
          <span>{terms.para1span}</span>
        </p>
        <h3 className="p-3 text-2xl">{terms.heading2}</h3>
        <p className="px-3">{terms.para2}</p>
        <h3 className="p-3 text-2xl">{terms.heading3}</h3>
        <h4 className="px-3 py-2 text-xl">{terms.subheading31}</h4>
        <p className="px-3">{terms.subpara31}</p>
        <h4 className="px-3 py-2 text-xl">{terms.subheading32}</h4>
        <p className="px-3">{terms.subpara32}</p>
        <h3 className="p-3 text-2xl">{terms.heading4}</h3>
        <p className="px-3">{terms.para4}</p>
        <h3 className="p-3 text-2xl">{terms.heading5}</h3>
        <p className="px-3">
          {terms.para5}{' '}
          <Link className="text-[#188b18]" href="/affiliate-disclosure">
            {terms.readmore}
          </Link>{' '}
        </p>
        <h3 className="p-3 text-2xl">{terms.heading6}</h3>
        <p className="px-3">{terms.para6}</p>
        <h3 className="p-3 text-2xl">{terms.heading7}</h3>
        <p className="px-3">{terms.para7}</p>
        <h3 className="p-3 text-2xl">{terms.heading8}</h3>
        <p className="px-3">{terms.para8}</p>
        <h3 className="p-3 text-2xl">{terms.heading9}</h3>
        <p className="px-3">{terms.para9}</p>
        <h3 className="p-3 text-2xl">{terms.heading10}</h3>
        <p className="px-3">{terms.para10}</p>
        <h3 className="p-3 text-2xl">{terms.heading11}</h3>
        <p className="px-3">{terms.para11}</p>
        <h3 className="p-3 text-2xl">{terms.heading12}</h3>
        <p className="px-3">{terms.para12}</p>
        <h3 className="p-3 text-2xl">{terms.heading13}</h3>
        <p className="px-3">{terms.para13}</p>
        <h3 className="p-3 text-2xl">{terms.heading14}</h3>
        <h4 className="px-3 py-2 text-xl">{terms.subheading141}</h4>
        <p className="px-3">{terms.subpara141}</p>
        <h4 className="px-3 py-2 text-xl">{terms.subheading142}</h4>
        <p className="px-3">{terms.subpara142}</p>
        <h3 className="p-3 text-2xl">{terms.heading15}</h3>
        <p className="px-3">{terms.para15}</p>
        <h3 className="p-3 text-2xl">{terms.heading16}</h3>
        <p className="px-3">{terms.para16}</p>
        <h3 className="p-3 text-2xl">{terms.heading17}</h3>
        <p className="px-3">{terms.para17}</p>
        <ul className="p-2 px-3">
          <li>{terms.li171}</li>
          <li>
            {terms.li172}{' '}
            <Link
              className="text-[#188b18]"
              href="mailto:team@fancodeparty.com"
            >
              team@fancodeparty.com
            </Link>{' '}
          </li>
          <li>
            {terms.li173}{' '}
            <Link className="text-[#188b18]" href="/">
              fancodeparty.com
            </Link>
          </li>
          <li className="mt-3 font-bold">{terms.li174}</li>
        </ul>
      </div>
    </div>
  )
}

export default Terms
