import React from 'react'
import { graphql } from 'gatsby'
import Title from '../components/Title'
import Seo from '../components/Seo'

const About = ({ data }) => {
  const { title, info, stack, image } = data.strapiAbout
  return (
    <>
      <section className="about-page">
        <div className="section-center about-center">
          <img src={image.localFile.publicURL} alt={title} className="about-img-svg" />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
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
        }
      }
    }
  }
`

export default About
