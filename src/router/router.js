
import Banner from '../components/banner'
import { useEffect } from "react";
import '../app.css'
import Nav from '../components/nav'
import Footer from '../containers/footer'
import { BrowserRouter, Routes, Route, Outlet,useNavigate } from 'react-router-dom'
import { Home, Movie,Movies,Series, Browse, Signin, Signup } from '../pages'
import useAuthListener from "../hooks/use-auth-listener";
import * as ROUTES from '../constants/routes'

import BrowserContainer from '../containers/browser'
import { useDispatch } from 'react-redux'

export default function Router() {
 const dispatch = useDispatch()
 const { user, loading } = useAuthListener(); 



  return (

 <BrowserRouter>
      <Routes>
        {/* Define routes and their corresponding components */}
      <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path={ROUTES.BROWSE}
          element={
            <>
              <Nav />
              <BrowserContainer  />
            </>
          }
        />
          <Route
          path={`${ROUTES.MOVIE}/:name`}
          element={
            <>
              <Nav />
              <Movie  />
            </>
          }
        />
                  <Route
          path={ROUTES.NARUTO}
          element={
            <>
              <Nav />
              <Movies  />
            </>
          }
        />
                  <Route
          path={ROUTES.SHIPPUDEN}
          element={
            <>
              <Nav />
              <Series  />
            </>
          }
        />
      </Routes>
      <Footer /> {/* Render Footer component */}
    </BrowserRouter>

  )
}
