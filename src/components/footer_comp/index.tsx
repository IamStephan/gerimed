import React from "react"
import { Link } from "gatsby"
import Logo from "../../assets/svgs/logo.svg"

const FooterComp = () => {
  return (
    <footer className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-1 mb-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Link to="/" title="Go home" aria-label="Gerimed">
            <Logo className="w-auto max-h-12" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-between pt-4 pb-10 border-t sm:flex-row">
        <p className="text-sm text-gray-700">
          © Copyright 2021 Gerimed. All rights reserved.
        </p>
        <div className="flex items-center mt-4 space-x-4 sm:mt-0">
          <a
            rel="noopener"
            target="_blank"
            title="Facebook"
            href=""
            className="text-gray-600 transition-colors duration-300 hover:text-green-700"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default FooterComp
