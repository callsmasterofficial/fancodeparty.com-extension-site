import React from 'react'

export default function Privacy({ privacy }) {
  const renderContent = (content) => {
    return { __html: content }
  }

  return (
    <div className="m-auto mb-20 mt-10 w-[80%] text-justify">
      <div className="privacyContainer h-auto w-[100%] rounded-md border-2 border-green-800 p-5">
        <h5 className="p-4 text-center text-2xl font-semibold md:text-3xl">
          {privacy.headingOne}
        </h5>
        {privacy.sectionOne.map((item) => (
          <p
            className="p-2"
            key={item.id}
            dangerouslySetInnerHTML={renderContent(item.answer)}
          />
        ))}
        <h5 className="p-2 text-center text-2xl font-semibold">
          {privacy.headingTwo}
        </h5>
        {privacy.sectionTwo.map((item) => (
          <p
            className="p-2"
            key={item.id}
            dangerouslySetInnerHTML={renderContent(item.answer)}
          />
        ))}
        <h5 className="p-2 text-center text-2xl font-semibold">
          {privacy.headingThree}
        </h5>
        {privacy.sectionThree.map((item) => (
          <p
            className="p-2"
            key={item.id}
            dangerouslySetInnerHTML={renderContent(item.answer)}
          />
        ))}
        <h5 className="p-2 text-center text-2xl font-semibold">
          {privacy.headingFour}
        </h5>
        {privacy.sectionFour.map((item) => (
          <p
            className="p-2"
            key={item.id}
            dangerouslySetInnerHTML={renderContent(item.answer)}
          />
        ))}
        <h5 className="p-2 text-center text-2xl font-semibold">
          {privacy.headingFive}
        </h5>
        {privacy.sectionFive.map((item) => (
          <p
            className="p-2"
            key={item.id}
            dangerouslySetInnerHTML={renderContent(item.answer)}
          />
        ))}
        <h5 className="p-2 text-center text-2xl font-semibold">
          {privacy.headingSix}
        </h5>
        {privacy.sectionSix.map((item) => (
          <p
            className="p-2"
            key={item.id}
            dangerouslySetInnerHTML={renderContent(item.answer)}
          />
        ))}
        <h5 className="p-2 text-center text-2xl font-semibold">
          {privacy.headingSeven}
        </h5>
        {privacy.sectionSeven.map((item) => (
          <p
            className="p-2"
            key={item.id}
            dangerouslySetInnerHTML={renderContent(item.answer)}
          />
        ))}
        <h5 className="p-2 text-center text-2xl font-semibold">
          {privacy.headingEight}
        </h5>
        {privacy.sectionEight.map((item) => (
          <p
            className="p-2"
            key={item.id}
            dangerouslySetInnerHTML={renderContent(item.answer)}
          />
        ))}
      </div>
    </div>
  )
}
