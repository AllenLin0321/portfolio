import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import Project from './Project'
import { Link } from 'gatsby'
import { FaArrowRight } from 'react-icons/fa'

const ShowMoreBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Projects = ({ showLink = false, title, projects }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          <ShowMoreBtn>
            看更多
            <FaArrowRight className="social-icon" />
          </ShowMoreBtn>
        </Link>
      )}
    </section>
  )
}

export default Projects
