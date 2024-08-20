import Header from './pages/Header/Header'
import Footer from './pages/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App