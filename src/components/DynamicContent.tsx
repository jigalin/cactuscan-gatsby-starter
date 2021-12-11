import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const DynamicContent = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allSitePage {
        nodes {
          path
        }
      }
    }
  `)
  return (
    <div>
      <h1>Dynamic Component</h1>
    </div>
  )
}
