import 'react'

import Banner from '../Component/Banner'
import About from '../Component/About'
// import Contact from '../Component/Contact'
import Services from '../Component/Services'
import Project from '../Component/Project'
const Home = () => {
  return (
    <div>
     
      <Banner/>
      <About/>
      {/* <Contact/> */}
      
      <Services/>
      <Project/>
      
    </div>
  )
}

export default Home