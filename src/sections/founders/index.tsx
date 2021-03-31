import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const FoundersSection = () => {
  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="relative mb-4 overflow-hidden border rounded-full w-28 h-28">
        <StaticImage
          src="../../assets/images/about/founders.png"
          placeholder="blurred"
          alt="Carel and Marisa Pieterse with their son"
          className="top-0 left-0 w-full h-full overflow-hidden rounded-full"
          style={{
            position: "absolute",
          }}
        />
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            The people that
            <br className="hidden md:block" />
            made it all{" "}
            <span className="inline-block text-red-700">happen</span>
          </h2>
        </div>
        <div className="lg:w-1/2">
          <p className="text-base text-gray-700">
            We are a family business with the founders and owners, Carel &
            Marisa Pieterse, working together to guarantee excellent care for
            the elderly, proven during the past ten years. We believe in caring
            for the elderly in the best way possible. With their vision and
            passion, Gerimed became a leader in elderly care.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FoundersSection
