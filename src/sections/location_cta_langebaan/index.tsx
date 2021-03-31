import React from "react"
import { Link } from "gatsby"

const LocationCTALangebaanSection = () => {
  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto">
        <Link
          to="/kleinmond"
          className="mb-4 mr-8"
          title="Kleinmond"
          aria-label="Kleinmond"
        >
          <div className="flex items-center justify-center w-16 h-16 mb-4 border rounded-full">
            <svg
              className="w-10 h-10 text-green-700"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.63605 7.75735L7.05026 6.34314L12.7071 12L7.05029 17.6568L5.63608 16.2426L9.87869 12L5.63605 7.75735Z"
                fill="currentColor"
              />
              <path
                d="M12.7071 6.34314L11.2929 7.75735L15.5356 12L11.2929 16.2426L12.7072 17.6568L18.364 12L12.7071 6.34314Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </Link>
        <div>
          <p className="mb-2 text-xs font-semibold tracking-wide text-gray-800 uppercase">
            Other Location
          </p>
          <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            See what Kleinmond
            <br className="hidden md:block" />
            has to offer
          </h2>
          <p className="mb-4 text-base text-gray-700 md:text-lg">
            We operate in multiple locations and Kleinmond is one of them. Why
            not take a look and see if its a good fit for your needs.
          </p>
          <Link
            to="/kleinmond"
            className="inline-flex items-center text-sm font-semibold text-green-600 transition-colors duration-200 hover:text-green-800"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LocationCTALangebaanSection
