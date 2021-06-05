import React from 'react'
import { graphql } from 'gatsby'
import Projects from '../components/Projects'
import Seo from '../components/Seo'

const ProjectsPage = ({ data }) => {
  const { nodes: proejects } = data.allStrapiProject
  return (
    <>
      <Seo title="Projects" />
      <main className="projects-page">
        <Projects title="作品集" projects={proejects} />
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProject(sort: { fields: order }) {
      nodes {
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        description
        featured
        github
        id
        slug
        title
        url
        stack {
          id
          title
        }
      }
    }
  }
`

export default ProjectsPage
