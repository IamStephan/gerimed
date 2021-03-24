import React from "react"
import { Link } from "gatsby"

const ContactKleinmondDivisionSection = () => {
  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3294.6379134574563!2d19.03350421578038!3d-34.33423955079751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdd998782f7d45%3A0xfc46b306ba2d84ec!2sKogelpark%20Clinic!5e0!3m2!1sen!2sza!4v1616486305845!5m2!1sen!2sza"
            className="object-cover w-full h-56 bg-gray-200 rounded shadow-lg sm:h-96"
            loading="lazy"
          />
        </div>
        <div className="order-1 lg:pr-10 lg:order-2">
          <Link
            to="/kleinmond"
            className="inline-block mb-5"
            title="Go to Kleinmond"
            aria-label="Map pin"
          >
            <div className="flex items-center justify-center w-12 h-12 border rounded-full">
              <svg
                className="w-8 h-8 text-green-700"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z"
                  fill="currentColor"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </Link>
          <h5 className="mb-8 text-4xl font-extrabold leading-none">
            Gerimed <span className="inline-block text-red-700">Kleinmond</span>{" "}
            <br className="hidden md:block" />
            Kogelpark Clinic
          </h5>
          <div className="grid gap-8 row-gap-8 lg:grid-cols-2">
            <div className="flex">
              <div>
                <h6 className="mb-2 font-semibold leading-5">Get in touch</h6>
                <div className="flex">
                  <p className="mr-1 text-gray-800">Tel:</p>
                  <a
                    href="tel:028 271 3994"
                    aria-label="Our phone"
                    title="Our phone"
                    className="text-green-700 transition-colors duration-300 hover:text-green-800"
                  >
                    028 271 3994
                  </a>
                </div>
                <div className="flex">
                  <p className="mr-1 text-gray-800">Fax:</p>
                  <a
                    href="tel:028 271 3488"
                    aria-label="Our email"
                    title="Our email"
                    className="text-green-700 transition-colors duration-300 hover:text-green-800"
                  >
                    028 271 3488
                  </a>
                </div>
              </div>
            </div>
            <div className="flex">
              <div>
                <h6 className="mb-2 font-semibold leading-5">Location</h6>
                <div className="flex">
                  <p className="mr-1 text-gray-800">
                    Kogelpark Retirement Village, Botriver Road,
                  </p>
                </div>
                <div className="flex">
                  <p className="mr-1 text-gray-800">
                    P.O. Box 585, Kleinmond, 7195
                  </p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div>
                <h6 className="mb-2 font-semibold leading-5">Business hours</h6>
                <div className="flex">
                  <p className="mr-1 text-gray-800">Mon-Fri: 09:00 - 17:00</p>
                </div>
                <div className="flex">
                  <p className="mr-1 text-gray-800">Sat: 09:00 - 13:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactKleinmondDivisionSection
