import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const ServicesStepDownSection = () => {
  return (
    <section
      id="step-down"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="mx-auto sm:text-center lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Sub-acute Care / Step Down
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Merging the sophisticated technology of a hospital and the
            efficiency of a skilled nursing facility to reduce the cost of
            services while maintaining quality of care.
          </p>
        </div>
        <div className="mb-4 transition-shadow duration-300 lg:mb-6">
          <StaticImage
            className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
            src="../../assets/images/homepage/service-2.jpg"
            placeholder="blurred"
            alt="Masks and sanitizers on a white table"
            style={{
              filter: "brightness(0.75)",
            }}
          />
        </div>
        <ul className="max-w-xl mb-4 text-base text-left text-gray-700 list-disc sm:mx-auto">
          <li>
            <b>Criteria for Admission:</b>
            <ul className="max-w-xl pl-8 text-base text-left text-gray-700 list-disc sm:mx-auto">
              <li>Surgical (post-operative cases, etc.)</li>
              <li>Medical (post-heart attack, etc.)</li>
              <li>Chronic patients (emphysema, etc.)</li>
              <li>Terminal patients (cancer, etc.)</li>
            </ul>
          </li>
          <li>
            <b>Excluding:</b>
            <ul className="max-w-xl pl-8 text-base text-left text-gray-700 list-disc sm:mx-auto">
              <li>Psychiatric</li>
              <li>Maternity</li>
            </ul>
          </li>
          <li>24 hour qualified nursing care</li>
          <li>fully equipped treatment room, B.H.F. - standard</li>
          <li>Registered with B.H.F. and Department of Health</li>
          <li>Registered with all Medical Aids</li>
        </ul>
      </div>
    </section>
  )
}

export default ServicesStepDownSection
