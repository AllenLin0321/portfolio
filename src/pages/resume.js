import React from 'react'
import Seo from '../components/Seo'

const CvUrl = 'https://drive.google.com/file/d/1pi5O2t1oOT3nyVrsYJOuernl2mJIsghS/preview'

const Resume = () => {
  return (
    <>
      <Seo title="Resume" />
      <main className="resume-page">
        <iframe src={CvUrl} width="640" height="900" title="allen resume"></iframe>
      </main>
    </>
  )
}

export default Resume
