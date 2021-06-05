import React from 'react'
import { FaCode, FaSketch, FaAndroid } from 'react-icons/fa'
const services = [
  {
    id: 1,
    icon: <FaSketch className="service-icon" />,
    title: '網頁設計',
    text: `使用Media Queries完成各行動裝置的RWD版面。<br />擅用SCSS模組化CSS的程式碼，提升撰寫效率以及維護性`,
  },
  {
    id: 2,
    icon: <FaCode className="service-icon" />,
    title: '網頁開發',
    text: `熟悉使用React/Vue的前端JavaScript框架。<br/>熟悉搭配使用Redux/Vuex做狀態管理`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: 'app 開發',
    text: `熟悉使用React Native 建構 iOS 以及 Android App`,
  },
]

export default services
