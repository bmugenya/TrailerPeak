import './app.css'
import Banner from './components/banner'
import { useEffect } from "react";
import Nav from './components/nav'
import Footer from './containers/footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Movie,Browse, Signin, Signup } from './pages'
import * as ROUTES from './constants/routes'

import BrowserContainer from './containers/browser'
import { fetchMagnetAsync } from './features/magnet/magnetActions'
import { useDispatch } from 'react-redux'

export default function App() {
 const dispatch = useDispatch()

  useEffect(() => {
    console.log('This ran')
    dispatch(fetchMagnetAsync())

  })


  return (
    <div className='App'>
      <BrowserRouter>
        <Nav/>

        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.BROWSE} element={<BrowserContainer />} />
          <Route path={ROUTES.SIGN_IN} element={<Signin />} />
          <Route path={ROUTES.SIGN_UP} element={<Signup />} />
          <Route path={ROUTES.MOVIE} element={<Movie title={name} />} />
      
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}
