import React from "react"
import { NavLink } from "react-router-dom"

const About = () => {
  return (
    <div className='about'>
       <header className='header1'>
       <div className="content">
        <h1 className="title1">Welcome to the It-Company </h1>
        <p className='desc1'>It-Company is a website in Örebro that focuses on creating modern and selling websites for small businesses throughout Sweden.
                             If you need a new website for your business, we can probably help you.
                             Or do you have a great new idea for a web system or web application that you want to realize</p>
                            <p> Here you can see listOfJobs :</p>
                           <NavLink className="content-link" to="/jobs">Jobs</NavLink>
                           
      </div>
      </header>
     
      
    </div>
  )
}

export default About