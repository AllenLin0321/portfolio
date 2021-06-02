import React, { useState } from 'react'
import Title from './Title'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'

const query = graphql`
  {
    allStrapiJob(sort: { fields: created_at, order: DESC }) {
      nodes {
        strapiId
        company
        date
        desc {
          id
          name
        }
        position
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const { nodes: jobs } = data.allStrapiJob
  const [selectedCompany, setSelectedCompany] = useState(0)
  const { company, date, desc, position } = jobs[selectedCompany]

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button
                className={`job-btn ${selectedCompany === index ? 'active-btn' : ''}`}
                key={index}
                onClick={() => setSelectedCompany(index)}
              >
                {job.company}
              </button>
            )
          })}
        </div>

        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs
