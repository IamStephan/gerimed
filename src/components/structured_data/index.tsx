import React from "react"
import Helmet from "react-helmet"

interface Props {
  data: Object
}

const StructuredData: React.FC<Props> = ({ data }) => {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  )
}

export default StructuredData
