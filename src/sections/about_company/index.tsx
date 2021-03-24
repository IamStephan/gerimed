import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const AboutCompanySection = () => {
  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          Our history and values as{" "}
          <span className="text-red-600">Gerimed</span>
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          We all believe in caring for the elderly in the best way possible.
          With their vision and passion, Gerimed became a leader in elderly
          care.
        </p>
      </div>
      <div className="mx-auto mb-10 lg:max-w-2xl md:mb-12">
        <div className="relative w-full transition-shadow duration-300">
          <StaticImage
            className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
            placeholder="blurred"
            src="../../assets/images/about/about.jpg"
            alt="Gerimed Langebaan storefront"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="max-w-xl md:mx-auto sm:text-left lg:max-w-2xl">
        <p className="mb-6 text-base text-gray-700 md:text-lg md:mb-12">
          Gerimed started off as Kogelpark Clinic in Kogelpark Retirement
          Village and opened their doors on 1 July 2001 in Kleinmond with only 1
          patient. In 2004 it was renamed to Gerimed to incorporate the clinic
          in Langebaan. Gerimed Langebaan opened their doors on 3 May 2005 in
          the Langebaan Retirement Village.
        </p>

        <p className="mb-6 text-base text-gray-700 md:text-lg md:mb-12">
          Today Gerimed consists of two Care Centres which together consist of
          50 beds for Sub-acute and Frail Care n single & double rooms and 60
          Assisted Apartments in Kleinmond and Langebaan.
        </p>

        <h3 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
          Our Mission
        </h3>

        <p className="mb-6 text-base text-gray-700 md:text-lg md:mb-12">
          Our mission is to improved quality of life through quality service and
          care in a safe and comfortable environment.
        </p>

        <h3 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
          Our Vision
        </h3>

        <p className="text-base text-gray-700 md:text-lg">
          Gerimed strives to improve dignity and quality of life for their
          residents & Patients through the high standards of companionship and
          care to their residents and patients and to become known as an
          institution that really cares and focuses on the Kingdom of God.
        </p>
      </div>
    </section>
  )
}

export default AboutCompanySection
