import React from "react"
import Page from "@components/page"
import LocationHeaderKleinmondSection from "@sections/location_header_kleinmond"
import ContactKleinmondDivisionSection from "@sections/contact_kleinmond_division"
import LocationCTAKleinmondSection from "@sections/location_cta_kleinmond"

const KleinmondPage = () => {
  return (
    <Page title="Kleinmond" description="Gerimed location: Kleinmond">
      <LocationHeaderKleinmondSection />
      <LocationCTAKleinmondSection />
      <ContactKleinmondDivisionSection />
    </Page>
  )
}

export default KleinmondPage
