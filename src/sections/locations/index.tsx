import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const LocationsSection = () => {
  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
        <div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
          <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            See what <span className="text-green-600">home</span> best fits your
            needs
          </h2>
        </div>
      </div>
      <div className="grid gap-8 row-gap-5 md:grid-cols-2">
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-green-600 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-green-600 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-green-600 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-green-600 group-hover:scale-y-100" />
          <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
            <div className="mb-6 mr-6 lg:mb-0">
              <StaticImage
                className="flex items-center justify-center w-20 h-20 overflow-hidden rounded-full lg:w-32 lg:h-32"
                placeholder="blurred"
                src="../../assets/images/locations/main-langebaan.jpg"
                alt="Overview of Langebaan"
              />
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <h6 className="mb-2 font-semibold leading-5">
                  Gerimed Langebaan
                </h6>
                <p className="mb-2 text-sm text-gray-900">
                  Aptly referred to as the 'Jewel of the West Coast', the
                  picturesque town of Langebaan hugs the shores of the Langebaan
                  Lagoon.
                </p>
              </div>
              <Link
                to="/langebaan"
                className="inline-flex items-center text-sm font-semibold text-green-600 transition-colors duration-200 hover:text-green-800"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-green-600 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-green-600 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-green-600 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-green-600 group-hover:scale-y-100" />
          <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
            <div className="mb-6 mr-6 lg:mb-0">
              <StaticImage
                className="flex items-center justify-center w-20 h-20 overflow-hidden rounded-full lg:w-32 lg:h-32"
                placeholder="blurred"
                src="../../assets/images/locations/main-kleinmond.jpg"
                alt="Overview of Kleinmond"
              />
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <h6 className="mb-2 font-semibold leading-5">
                  Gerimed Kleinmond
                </h6>
                <p className="mb-2 text-sm text-gray-900">
                  With stunning beaches ideal for walking, swimming as well as
                  some of the best mouth watering restaurants on offer, and a
                  stunning 18-hole golf course.
                </p>
              </div>
              <Link
                to="/kleinmond"
                className="inline-flex items-center text-sm font-semibold text-green-600 transition-colors duration-200 hover:text-green-800"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationsSection
