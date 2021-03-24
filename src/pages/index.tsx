import React from "react"
import Page from "@components/page"
import HeroSection from "@sections/hero"
import AssociationsSection from "@sections/associations"
import LocationsSection from "@sections/locations"
import ServicesSection from "@sections/services"
import SocialProofSection from "@sections/social_proof"
import CTASection from "@sections/cta"

const IndexPage: React.FC = () => {
  return (
    <Page title="" description="" isHanging>
      <HeroSection />
      <AssociationsSection />
      <ServicesSection />
      <LocationsSection />
      <SocialProofSection />
      <CTASection />
    </Page>
  )
}

export default IndexPage
