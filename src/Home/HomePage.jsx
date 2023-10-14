import Home from './Home'
import Hero from './Hero'
import JoinUs from './JoinUs'
import AllInOne from './AllInOne'
import Navbar from '../common/Navbar'

function HomePage() {
  return (
    <>
    <Home>
     <Navbar/>
     <Hero/>
     </Home>
     <JoinUs></JoinUs>
     <AllInOne></AllInOne>
    </>
  )
}

export default HomePage