import React from "react"
import Page from "@components/page"
import LocationHeaderLangebaanSection from "@sections/location_header_langebaan"
import ContactLangebaanDivisionSection from "@sections/contact_langebaan_division"
import LocationCTALangebaanSection from "@sections/location_cta_langebaan"

const LangebaanPage = () => {
  return (
    <Page title="Langebaan" description="asd">
      <LocationHeaderLangebaanSection />
      <LocationCTALangebaanSection />
      <ContactLangebaanDivisionSection />
    </Page>
  )
}

export default LangebaanPage
