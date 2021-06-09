import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Title from '../components/Title'
import Seo from '../components/Seo'

const About = ({ data }) => {
  const { title, info, stack, image } = data.strapiAbout
  const imageURL = getImage(image.localFile)
  return (
    <>
      <Seo title="About" />
      <section className="about-page">
        <div className="section-center about-center">
          <GatsbyImage image={imageURL} alt={title} className="about-img-svg" />
          <article className="about-text">
            <Title title={title} />
            <p dangerouslySetInnerHTML={{ __html: info }}></p>
            <div className="about-stack">
              {stack.map(itme => {
                return <span key={itme.id}>{itme.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  {
    strapiAbout {
      info
      title
      stack {
        id
        title
      }
      image {
        localFile {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 700)
          }
        }
      }
    }
  }
`

export default About
