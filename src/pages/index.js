import React from 'react'
import { graphql } from 'gatsby'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Jobs from '../components/Jobs'
import Projects from '../components/Projects'
import Seo from '../components/Seo'

const IndexPage = ({ data }) => {
  const { nodes: proejects } = data.allStrapiProject
  return (
    <>
      <Seo title="Home" />
      <main>
        <Hero />
        <Services />
        <Jobs />
        <Projects showLink title="作品集" projects={proejects} />
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProject(filter: { featured: { eq: true } }, sort: { fields: order, order: DESC }) {
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
export default IndexPage
