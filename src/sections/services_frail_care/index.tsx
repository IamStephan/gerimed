import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const ServicesFrailCareSection = () => {
  return (
    <section
      id="frail-care"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="mx-auto sm:text-center lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Frail Care
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Frail care is the care you need when you are no longer able to look
            after yourself because of physical frailty or mental incapacity.
          </p>
        </div>
        <div className="mb-4 transition-shadow duration-300 lg:mb-6">
          <StaticImage
            className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
            placeholder="blurred"
            src="../../assets/images/homepage/service-1.jpg"
            alt="Nurse taking care of an elderly woman"
            style={{
              filter: "brightness(0.75)",
            }}
          />
        </div>
        <ul className="max-w-xl mb-4 text-base text-left text-gray-700 list-disc sm:mx-auto">
          <li>
            Qualified nursing staff 24 hours per day, care affectionately for
            the elderly
          </li>
          <li>Private and double rooms</li>
          <li>
            Full assistance towards:
            <ul className="max-w-xl pl-8 text-base text-left text-gray-700 list-disc sm:mx-auto">
              <li>Personal Hygiene</li>
              <li>Mobility</li>
              <li>
                Medicine and General Health monitored in conjunction with family
                and local doctors
              </li>
            </ul>
          </li>
          <li>Balanced Diets</li>
          <li>Registered with B.H.F., S.A.A.H.A. and Department of Health</li>
          <li>
            All rooms fitted with:
            <ul className="max-w-xl pl-8 text-base text-left text-gray-700 list-disc sm:mx-auto">
              <li>24 Hour emergency nurse call system</li>
              <li>Telephone points</li>
              <li>DSTV and SABC connection points</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default ServicesFrailCareSection
