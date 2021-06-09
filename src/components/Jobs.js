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
        companyInfo
        date
        desc {
          id
          name
        }
        stack {
          id
          title
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
  const { date, desc, position, stack, companyInfo } = jobs[selectedCompany]

  return (
    <section className="section jobs">
      <Title title="經歷" />
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
          <h3>
            {position}
            <span className="job-date">{date}</span>
          </h3>
          {stack.map(item => {
            return <h4 key={item.id}>{item.title}</h4>
          })}
          <p dangerouslySetInnerHTML={{ __html: companyInfo }}></p>
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
        更多資訊
      </Link>
    </section>
  )
}

export default Jobs
