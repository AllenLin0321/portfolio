import React from 'react'
import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaUserTie } from 'react-icons/fa'

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: 'https://www.facebook.com/yilun.lin.56',
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: 'https://www.linkedin.com/in/yi-lun-lin',
  },
  {
    id: 2,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: 'https://github.com/AllenLin0321',
  },
  {
    id: 4,
    icon: <FaUserTie className="social-icon" />,
    url: 'https://drive.google.com/file/d/1pi5O2t1oOT3nyVrsYJOuernl2mJIsghS/view?usp=sharing',
  },
]

export default data
