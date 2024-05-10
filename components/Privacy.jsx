import React from 'react'
import Link from 'next/link'

export default function Privacy({ privacy }) {
  return (
    <div className="m-auto mb-20 mt-10 w-[80%] text-justify">
      <div className="privacyContainer h-auto w-[100%] rounded-md border-2 border-green-800 p-5">
        <h2 className="p-4 text-center text-4xl">{privacy.mainheading}</h2>
        <h3 className="p-3 text-2xl">{privacy.overview}</h3>
        <p className="px-3">
          {privacy.overviewpara}{' '}
          <Link className="text-[#188b18]" href="/">
            fancodeparty.com
          </Link>{' '}
          <span>{privacy.overviewspan}</span>
        </p>
        <h3 className="p-3 text-2xl">{privacy.heading1}</h3>
        <h4 className="px-3 py-2 text-xl">{privacy.subheading11}</h4>
        <p className="px-3">{privacy.subpara11}</p>
        <ul className="list-disc px-10 py-2">
          <li>{privacy.li01}</li>
          <li>{privacy.li02}</li>
          <li>{privacy.li03}</li>
          <li>{privacy.li04}</li>
          <li>{privacy.li05}</li>
        </ul>
        <h4 className="px-3 py-2 text-xl">{privacy.subheading12}</h4>
        <p className="px-3">{privacy.subpara12}</p>
        <h3 className="p-3 text-2xl">{privacy.heading2}</h3>
        <p className="px-3">{privacy.para2}</p>
        <h3 className="p-3 text-2xl">{privacy.heading3}</h3>
        <p className="px-3">{privacy.para3}</p>
        <h3 className="p-3 text-2xl">{privacy.heading4}</h3>
        <p className="px-3">{privacy.para4}</p>
        <h3 className="p-3 text-2xl">{privacy.heading5}</h3>
        <p className="px-3">
          {privacy.para5}{' '}
          <Link className="text-[#188b18]" href="/affiliate-disclosure">
            {privacy.readmore}
          </Link>{' '}
        </p>
        <h3 className="p-3 text-2xl">{privacy.heading6}</h3>
        <h4 className="px-3 py-2 text-xl">{privacy.subheading61}</h4>
        <p className="px-3">{privacy.subpara61}</p>
        <h4 className="px-3 py-2 text-xl">{privacy.subheading62}</h4>
        <p className="px-3">{privacy.subpara62}</p>
        <h4 className="px-3 py-2 text-xl">{privacy.subheading63}</h4>
        <p className="px-3">{privacy.subpara63}</p>
        <h3 className="p-3 text-2xl">{privacy.heading7}</h3>
        <p className="px-3">{privacy.para7}</p>
        <h3 className="p-3 text-2xl">{privacy.heading8}</h3>
        <p className="px-3">{privacy.para8}</p>
        <ul className="p-3">
          <li>{privacy.li81}</li>
          <li>
            {privacy.li82}{' '}
            <Link
              className="text-[#188b18]"
              href="mailto:team@fancodeparty.com"
            >
              team@fancodeparty.com
            </Link>{' '}
          </li>
          <li>
            {privacy.li83}{' '}
            <Link className="text-[#188b18]" href="/">
              fancodeparty.com
            </Link>{' '}
          </li>
        </ul>
        <h3 className="p-3 text-2xl">{privacy.heading9}</h3>
        <p className="px-3">{privacy.para9}</p>
        <h3 className="p-3 text-2xl">{privacy.heading10}</h3>
        <p className="px-3">{privacy.para101}</p>
        <p className="mt-3 px-3">{privacy.para102}</p>
        <h3 className="p-3 text-2xl">{privacy.heading11}</h3>
        <p className="px-3">{privacy.para11}</p>
        <ul className="p-3">
          <li>{privacy.li111}</li>
          <li>
            {privacy.li112}{' '}
            <Link
              className="text-[#188b18]"
              href="mailto:team@fancodeparty.com"
            >
              team@fancodeparty.com
            </Link>{' '}
          </li>
          <li>
            {privacy.li113}{' '}
            <Link className="text-[#188b18]" href="/">
              fancodeparty.com
            </Link>{' '}
          </li>
        </ul>
        <h3 className="p-3 text-2xl">{privacy.heading12}</h3>
        <p className="px-3">{privacy.para12}</p>
        <ul className="list-disc p-3 px-8">
          <li>{privacy.li121}</li>
          <li>{privacy.li122}</li>
          <li>{privacy.li123}</li>
        </ul>
        <h3 className="p-3 text-2xl">{privacy.heading13}</h3>
        <p className="px-3">{privacy.para13}</p>
        <ul className="list-disc p-3 px-8">
          <li>{privacy.li131}</li>
          <li>{privacy.li132}</li>
          <li>{privacy.li133}</li>
        </ul>
        <h3 className="p-3 text-2xl">{privacy.heading14}</h3>
        <p className="mb-3 px-3">{privacy.para141}</p>
        <p className="px-3">{privacy.para142}</p>
        <h3 className="p-3 text-2xl">{privacy.heading15}</h3>
        <p className="px-3">{privacy.para15}</p>
        <ul className=" p-3 ">
          <li>{privacy.li151}</li>
          <li>
            {privacy.li152}
            <Link
              className="text-[#188b18]"
              href="mailto:team@fancodeparty.com"
            >
              team@fancodeparty.com
            </Link>{' '}
          </li>
          <li>
            {privacy.li153}
            <Link className="text-[#188b18]" href="/">
              fancodeparty.com
            </Link>{' '}
          </li>
        </ul>
        <h3 className="p-3 text-2xl">{privacy.heading16}</h3>
        <p className="px-3">{privacy.para16}</p>
        <h3 className="p-3 text-2xl">{privacy.heading17}</h3>
        <p className="px-3">{privacy.para17}</p>
        <h3 className="p-3 text-2xl">{privacy.heading18}</h3>
        <p className="px-3">{privacy.para18}</p>
        <h3 className="p-3 text-2xl">{privacy.heading19}</h3>
        <p className="px-3">
          {privacy.para19}{' '}
          <Link className="text-[#188b18]" href="/terms-of-use">
            {privacy.terms}
          </Link>{' '}
        </p>
        <h3 className="p-3 text-2xl">{privacy.heading20}</h3>
        <p className="px-3">{privacy.para20}</p>
        <h3 className="p-3 text-2xl">{privacy.heading21}</h3>
        <p className="px-3">{privacy.para21}</p>
        <h3 className="p-3 text-2xl">{privacy.heading22}</h3>
        <p className="px-3">{privacy.para22}</p>
        <h3 className="p-3 text-2xl">{privacy.heading23}</h3>
        <p className="px-3">{privacy.para23}</p>
        <ul className=" p-3 ">
          <li>{privacy.li231}</li>
          <li>
            {privacy.li232}{' '}
            <Link
              className="text-[#188b18]"
              href="mailto:team@fancodeparty.com"
            >
              team@fancodeparty.com
            </Link>{' '}
          </li>
          <li>
            {privacy.li233}{' '}
            <Link className="text-[#188b18]" href="/">
              fancodeparty.com
            </Link>{' '}
          </li>
          <li className="mt-3 font-bold">{privacy.li234}</li>
        </ul>
      </div>
    </div>
  )
}
