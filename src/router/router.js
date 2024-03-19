

import { useEffect } from "react";
import '../app.css'
import Nav from '../components/nav'
import Footer from '../containers/footer'
import { BrowserRouter, Routes, Route, Outlet,useNavigate } from 'react-router-dom'
import { Movie,Movies, Signin, Signup } from '../pages'
import useAuthListener from "../hooks/use-auth-listener";
import * as ROUTES from '../constants/routes'


import { useDispatch } from 'react-redux'

export default function Router() {
 const dispatch = useDispatch()
 const { user, loading } = useAuthListener(); 



  return (

 <BrowserRouter>
      <Routes>

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

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
          path={ROUTES.HOME}
          element={
            <>
              <Nav />
              <Movies  />
            </>
          }
        />
         
      </Routes>
      <Footer /> {/* Render Footer component */}
    </BrowserRouter>

  )
}
