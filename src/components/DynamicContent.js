import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useEffect } from "react"

export const DynamicContent = () => {
  useEffect(() => {
    console.log(data)
  }, [data])

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
