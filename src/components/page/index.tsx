import React from "react"
import Navbar from "@components/navbar"
import FooterComp from "@components/footer_comp"
import SEO from "@components/seo"

interface Props {
  title: string
  description: string
  isHanging?: boolean
}

const PageTemplate: React.FC<Props> = ({
  title,
  description,
  isHanging,
  children,
}) => {
  return (
    <>
      <SEO title={title} description={description} />
      <Navbar isHanging={isHanging} />
      <main>{children}</main>
      <FooterComp />
    </>
  )
}

export default PageTemplate
