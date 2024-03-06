import React from 'react'

const Stars = () => {
  return (
    <div className="stars-container">
        {[...Array(50)].map((_, i) => (
        <div key={i} className="star" style={{ 
            top: `${Math.random() * 100}%`, 
            left: `${Math.random() * 100}%`, 
            animationDuration: `${Math.random() * 3 + 2}s` 
        }}></div>
        ))}
  </div>
  )
}

export default Stars
