import React from 'react'
import './header.css'
import Resume from '../resumeApp/Resume'

const Header = () => {
  return (
    <div>
        
        <div className='banner'>
            <div className='navbar'>
                <h1 className='logo'>ResumeMaker</h1>
                <ul>
                  <li><a href="/"> Home </a></li>
                  <li><a href="/"> About </a></li>
                  <li><a href="/"> Templates </a></li>
                  </ul>
                 <div className='button'>
                  <button type='button' className='btn'><span></span> Log In </button>
                  <button type='button' className='btn'><span></span> Sign Up </button>
                 </div>
            </div>
            <div className="content">
            <h1>Free Build Own Resume</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, neque.
                <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div>
                <button type="button" onClick={<Resume/>}><span></span> GET TEMPLATES</button>
                <button type="button"><span></span> SIGN UP  </button>
            </div>
        </div>
        </div>



    </div>
  )
}

export default Header