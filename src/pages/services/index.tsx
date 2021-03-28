import React from "react"
import Page from "@components/page"
import ServicesOverviewSection from "@sections/services_overview"
import ServicesFrailCareSection from "@sections/services_frail_care"
import ServicesStepDownSection from "@sections/services_step_down"
import ServicesApartmentsSection from "@sections/services_apartments"

const ServicesPage = () => {
  return (
    <Page title="Services" description="">
      <ServicesOverviewSection />
      <ServicesFrailCareSection />
      <ServicesStepDownSection />
      <ServicesApartmentsSection />
    </Page>
  )
}

export default ServicesPage
