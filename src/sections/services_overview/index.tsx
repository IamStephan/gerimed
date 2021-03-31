import React from "react"
import { Link } from "gatsby"

const ServicesOverviewSection = () => {
  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          An overview of our <span className="text-red-700">services</span>
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          We mainly offer 3 main services to our customers. You can view each
          service in more detail below.
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-green-600 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-green-600 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-green-600 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-green-600 group-hover:scale-y-100" />
          <div className="relative p-5 bg-white rounded-sm">
            <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
              <h6 className="font-semibold leading-5">Frail Care</h6>
            </div>
            <p className="mb-2 text-sm text-gray-900 line-clamp-2">
              Frail care is the care you need when you are no longer able to
              look after yourself because of physical frailty or mental
              incapacity.
            </p>
            <Link
              to="/services/#frail-care"
              className="inline-flex items-center text-sm font-semibold text-green-600 transition-colors duration-200 hover:text-green-800"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-green-600 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-green-600 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-green-600 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-green-600 group-hover:scale-y-100" />
          <div className="relative p-5 bg-white rounded-sm">
            <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
              <h6 className="font-semibold leading-5">
                Sub-acute Care / Step Down
              </h6>
            </div>
            <p className="mb-2 text-sm text-gray-900 line-clamp-2">
              Merging the sophisticated technology of a hospital and the
              efficiency of a skilled nursing facility to reduce the cost of
              services while maintaining quality of care.
            </p>
            <Link
              to="/services/#step-down"
              className="inline-flex items-center text-sm font-semibold text-green-600 transition-colors duration-200 hover:text-green-800"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-green-600 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-green-600 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-green-600 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-green-600 group-hover:scale-y-100" />
          <div className="relative p-5 bg-white rounded-sm">
            <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
              <h6 className="font-semibold leading-5">
                Assisted Living Apartments
              </h6>
            </div>
            <p className="mb-2 text-sm text-gray-900 line-clamp-2">
              These apartments are ideal if you want your freedom but still need
              some extra care when needed.
            </p>
            <Link
              to="/services/#apartments"
              className="inline-flex items-center text-sm font-semibold text-green-600 transition-colors duration-200 hover:text-green-800"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesOverviewSection
