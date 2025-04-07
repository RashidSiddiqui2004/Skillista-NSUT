
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Wrapper = ({ children }) => {
  return (
    <div className='relative bg-slate-950 min-h-screen'>
      <Navbar />
      <div>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Wrapper