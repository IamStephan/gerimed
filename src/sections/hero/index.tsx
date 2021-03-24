import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Logo from "../../assets/svgs/logo_big.svg"

const HeroSection = () => {
  return (
    <section className="relative flex flex-col-reverse py-16 pt-20 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="relative inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <div className="relative w-full h-56 overflow-hidden rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full">
          <div
            className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-25"
            style={{
              zIndex: -49,
            }}
          />
          <StaticImage
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            objectFit="cover"
            placeholder="blurred"
            src="../../assets/images/homepage/hero.jpg"
            alt="Family enjoying the outdoors"
            style={{
              zIndex: -50,
            }}
          />
        </div>
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-32 lg:max-w-lg lg:pr-5">
          <Logo className="max-w-full mb-7" />
          {/* <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Everything you
            <br className="hidden md:block" />
            can imagine{" "}
            <span className="inline-block text-green-800">is real</span>
          </h2> */}
          <p className="pr-5 text-base text-gray-700 mb-7 md:text-lg">
            We are a privately owned health care company and leaders at elderly
            health care in the Western Cape of South Africa.
          </p>
          <div className="flex items-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-green-600 rounded hover:bg-green-800 focus:shadow-outline focus:outline-none"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
