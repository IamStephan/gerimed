import React from "react"
import Page from "@components/page"
import AboutCompanySection from "@sections/about_company"
import FoundersSection from "@sections/founders"
import AboutCTASection from "@sections/about_cta"

const AbouPage = () => {
  return (
    <Page
      title="About Us"
      description="Gerimed is a private elderly care business."
    >
      <AboutCompanySection />
      <FoundersSection />
      <AboutCTASection />
    </Page>
  )
}

export default AbouPage
