import React from "react"
import Page from "@components/page"
import ContactHeaderSection from "@sections/contact_header"
import LangebaanDivisionSection from "@sections/contact_langebaan_division"
import KleinmondDivisionSection from "@sections/contact_kleinmond_division"

const ContactPage = () => {
  return (
    <Page
      title="Contact Us"
      description="Gerimed contact: Kleinmond and Langebaan"
    >
      <ContactHeaderSection />
      <LangebaanDivisionSection />
      <KleinmondDivisionSection />
    </Page>
  )
}

export default ContactPage
