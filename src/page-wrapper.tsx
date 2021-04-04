import * as React from "react"
import { FunctionComponent } from "react"
import { StaticImage } from "gatsby-plugin-image"

const PageWrapper: FunctionComponent = ({ children }) => {
  return (
    <div>
      <StaticImage
        src="./images/gatsby-astronaut.png"
        alt="Blur test"
        layout="constrained"
        loading="eager"
        quality={100}
        height={200}
      />
      {children}
    </div>
  )
}

export default PageWrapper
