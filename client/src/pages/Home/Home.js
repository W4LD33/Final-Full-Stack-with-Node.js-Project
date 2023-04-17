import React from 'react'

const Home = ({ topics }) => {
    return (
      <div>
        {topics.map((topic) => 
          <h1>{topic.title}</h1>
        )}
      </div>
    )
  }
  

export default Home
