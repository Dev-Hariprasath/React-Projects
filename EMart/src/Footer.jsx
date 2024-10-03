import React from 'react'

const Footer = () => {
  const year = new Date();
  return (
    <div>
      <footer> 
        <p>Copyrights &copy; { year.getFullYear()}</p>
      </footer> 
    </div>
  )
}

export default Footer
