import './App.css'
import { Outlet } from 'react-router-dom'

import Footer from './common/Footer'

function App() {

  return (
    <>
    {/* <HomePage></HomePage> */}
    <Outlet/>
    <Footer></Footer>
     

    </>
  )
}

export default App
