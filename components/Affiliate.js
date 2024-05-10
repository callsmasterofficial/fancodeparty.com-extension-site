import React from 'react'
import Link from 'next/link'

function Affiliate({ affiliate }) {
    return (
        <div className="m-auto mb-20 mt-10 w-[80%] text-justify">
            <div className="privacyContainer h-auto w-[100%] rounded-md border-2 border-green-800 p-5">
                <h2 className="p-4 text-center text-4xl">{affiliate.mainheading}</h2>
                <h3 className="p-3 text-2xl">{affiliate.overview}</h3>
                <p className="px-3">
                    {affiliate.overviewpara}{' '}
                    <Link className="text-[#188b18]" href="/">
                        fancodeparty.com
                    </Link>
                    <span>{affiliate.overviewparaspan}</span>
                </p>
                <h3 className="p-3 text-2xl">{affiliate.heading1}</h3>
                <h4 className="px-3 py-2 text-xl">{affiliate.subheading11}</h4>
                <p className="px-3">{affiliate.subpara11}</p>
                <h4 className="px-3 py-2 text-xl">{affiliate.subheading12}</h4>
                <p className="px-3">{affiliate.subpara12}</p>
                <h3 className="p-3 text-2xl">{affiliate.heading2}</h3>
                <h4 className="px-3 py-2 text-xl">{affiliate.subheading21}</h4>
                <p className="px-3">{affiliate.subpara21}</p>
                <h4 className="px-3 py-2 text-xl">{affiliate.subheading22}</h4>
                <p className="px-3">{affiliate.subpara22}</p>
                <h4 className="px-3 py-2 text-xl">{affiliate.subheading23}</h4>
                <p className="px-3">
                    {affiliate.subpara23}{' '}
                    <Link className="text-[#188b18]" href="/privacy-policy">
                        {affiliate.privacy}
                    </Link>
                    <span>{affiliate.and}</span>
                    <Link className="text-[#188b18]" href="/terms-of-use">
                        {affiliate.terms}
                    </Link>
                    <span>{affiliate.subpara23span2}</span>
                </p>
                <h3 className="p-3 text-2xl">{affiliate.heading3}</h3>
                <p className="px-3">{affiliate.para3}</p>
                <h3 className="p-3 text-2xl">{affiliate.heading4}</h3>
                <p className="px-3">{affiliate.para4}</p>
                <ul className="mt-3 px-3">
                    <li>{affiliate.li41}</li>
                    <li>
                        {affiliate.li42}{' '}
                        <Link
                            className="text-[#188b18]"
                            href="mailto:team@fancodeparty.com"
                        >
                            team@fancodeparty.com
                        </Link>
                    </li>
                    <li>
                        {affiliate.li43}{' '}
                        <Link className="text-[#188b18]" href="/">
                            fancodeparty.com
                        </Link>
                    </li>
                </ul>
                <h3 className="p-3 text-2xl">{affiliate.heading5}</h3>
                <h4 className="px-3 py-2 text-xl">{affiliate.subheading51}</h4>
                <p className="px-3">{affiliate.subpara51}</p>
                <h4 className="px-3 py-2 text-xl">{affiliate.subheading52}</h4>
                <p className="px-3">{affiliate.subpara52}</p>
                <h3 className="p-3 text-2xl">{affiliate.heading6}</h3>
                <h4 className="px-3 py-2 text-xl">{affiliate.subheading61}</h4>
                <p className="px-3">{affiliate.subpara61}</p>
                <h4 className="px-3 py-2 text-xl">{affiliate.subheading62}</h4>
                <p className="px-3">{affiliate.subpara62}</p>
                <h4 className="px-3 py-2 text-xl">{affiliate.subheading63}</h4>
                <p className="px-3">{affiliate.subpara63}</p>
                <h3 className="p-3 text-2xl">{affiliate.heading7}</h3>
                <p className="px-3">{affiliate.para7}</p>
                <h3 className="p-3 text-2xl">{affiliate.heading8}</h3>
                <p className="px-3">{affiliate.para8}</p>
            </div>
        </div>
    )
}

export default Affiliate