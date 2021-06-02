import React from 'react'
import { graphql } from 'gatsby'

const ProjectTemplate = ({ data }) => {
  const { title, description } = data.strapiProject

  return (
    <>
      <main className="project-template-page">
        <h2>{title}</h2>
        <p>{description}</p>
      </main>
    </>
  )
}

export const query = graphql`
  query singleProject($title: String) {
    strapiProject(title: { eq: $title }) {
      title
      description
    }
  }
`

export default ProjectTemplate
