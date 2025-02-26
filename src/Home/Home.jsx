import 'react'
import Header from '../Component/Header'
import Banner from '../Component/Banner'
import About from '../Component/About'
// import Contact from '../Component/Contact'
import Services from '../Component/Services'
import Project from '../Component/Project'
const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <About/>
      {/* <Contact/> */}
      
      <Services/>
      <Project/>
      
    </div>
  )
}

export default Home