import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Winding Accurate Guanaco</title>
        <meta property="og:title" content="Winding Accurate Guanaco" />
      </Helmet>
    </div>
  )
}

export default Home
