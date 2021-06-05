import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../../components/Seo'

const ProjectTemplate = ({ data }) => {
  const { title, description, image } = data.strapiProject

  return (
    <>
      <Seo title={title.toUpperCase()} description={description} image={image.localFile.publicURL} />
      <main className="project-template-page">
        <h2>{title}</h2>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
      </main>
    </>
  )
}

export const query = graphql`
  query singleProject($slug: String) {
    strapiProject(slug: { eq: $slug }) {
      title
      description
      image {
        localFile {
          publicURL
        }
      }
    }
  }
`

export default ProjectTemplate
