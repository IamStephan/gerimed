import React from "react"
import { Link } from "gatsby"
import Logo from "../../assets/svgs/logo.svg"

const ContactHeaderSection = () => {
  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-screen-sm sm:text-center sm:mx-auto">
        <Link
          to="/"
          aria-label="Gerimed"
          title="Gerimed"
          className="inline-block mb-5 rounded-full sm:mx-auto"
        >
          <div className="flex items-center justify-start w-auto h-auto mb-4 rounded-full md:justify-center">
            <Logo className="w-auto h-10" />
          </div>
        </Link>
        <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Let us get in touch
        </h2>
        <p className="text-base text-gray-700 md:text-lg sm:px-4">
          We are professional and well trained staff, willing to help and
          support our clients in all our locations. Get in touch with us and
          let's work together.
        </p>
      </div>
    </section>
  )
}

export default ContactHeaderSection
