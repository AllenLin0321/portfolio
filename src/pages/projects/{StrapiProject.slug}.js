import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FaGithubSquare, FaShareSquare } from 'react-icons/fa'
import Seo from '../../components/Seo'

const SocialLinks = styled.div`
  margin-top: 10px;
`

const ProjectTemplate = ({ data }) => {
  const { title, description, image, github, url } = data.strapiProject
  const imageURL = getImage(image.localFile)

  return (
    <>
      <Seo title={title.toUpperCase()} description={description} image={image.localFile.publicURL} />
      <main className="project-template-page">
        <h2>{title}</h2>
        <div className="project-template-content">
          <GatsbyImage image={imageURL} alt={title} className="project-template-img" />
          <div>
            <div className="project-links">
              <p dangerouslySetInnerHTML={{ __html: description }}></p>
              <SocialLinks>
                <a href={github} target="_blank" rel="noreferrer">
                  <FaGithubSquare className="project-icon" />
                </a>
                <a href={url} target="_blank" rel="noreferrer">
                  <FaShareSquare className="project-icon" />
                </a>
              </SocialLinks>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export const query = graphql`
  query singleProject($slug: String) {
    strapiProject(slug: { eq: $slug }) {
      title
      description
      github
      url
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 700)
          }
        }
      }
    }
  }
`

export default ProjectTemplate
