import React, { useState } from 'react'
import siteConfig from '../siteConfig'
import CustomAccordion from './CustomAccordion'

function Video_content() {
  const [show, setShow] = useState('')

  function toggleFunc(item) {
    if (item.id === show) return setShow('')
    setShow(item.id)
  }
  return (
    <div className="m-auto w-[80%] pt-[20px]">
      <div className="text2-inner_container  md:mb-10 md:mt-0">
        <div className="text-box flex items-center justify-center ">
          <h3 className="primary_text_color -mt-8 mb-5 p-2 pt-5 text-2xl font-semibold md:mt-0 md:text-3xl">
            {siteConfig.section.forth.heading}
          </h3>
        </div>
        <p className="primary_text_color text-justify">
          {siteConfig.section.forth.subHeading}
        </p>
      </div>

      <div className="accordion" id="accordionExample">
        {siteConfig.section.forth.accordian.map((item) => (
          <div className="accordion-item" key={item.id}>
            <CustomAccordion
              item={item}
              show={show}
              toggleFunc={toggleFunc}
              key={item.id}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Video_content
