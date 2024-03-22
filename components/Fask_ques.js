import { useState } from 'react'
import CustomAccordion from './CustomAccordion'

function Fask_question({ home }) {
  const [show, setShow] = useState('')

  function toggleFunc(item) {
    if (item.id === show) return setShow('')
    setShow(item.id)
  }
  return (
    <>
      <div className="pb-14" style={{ boxShadow: '0 0 6px #1F183B' }}>
        <div className="f-ask-container m-auto mt-14 w-[80%]">
          {/* text section */}
          <div className="f-ask-box  mb-10 flex items-center justify-center border-b-2  border-white">
            <h4 className="primary_text_color mb-5 p-2 pt-5 text-2xl font-semibold md:text-3xl">
              {home.faq.heading}
            </h4>
          </div>

          <div className="accordion" id="accordionExample">
            {home.faq.accordian.map((item) => (
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
      </div>
    </>
  )
}

export default Fask_question
