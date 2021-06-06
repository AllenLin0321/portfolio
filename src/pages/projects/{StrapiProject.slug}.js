import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { FaGithubSquare, FaShareSquare } from 'react-icons/fa'
import Seo from '../../components/Seo'

const ImageWrapper = styled.img`
  max-width: 640px;
  height: 100%;
`

const ProejctWrapper = styled.div`
  display: flex;
  padding: 5rem 10rem;
  justify-content: space-evenly;
  align-items: center;
`

const SocialLinks = styled.div`
  margin-top: 10px;
`

const ProjectTemplate = ({ data }) => {
  const { title, description, image, github, url } = data.strapiProject
  return (
    <>
      <Seo title={title.toUpperCase()} description={description} image={image.localFile.publicURL} />
      <main className="project-template-page">
        <h2>{title}</h2>
        <ProejctWrapper>
          <ImageWrapper src={image.localFile.publicURL} alt={title} className="project-img"></ImageWrapper>
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
        </ProejctWrapper>
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
          publicURL
        }
      }
    }
  }
`

export default ProjectTemplate
