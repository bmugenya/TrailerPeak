import './app.css'
import Banner from './components/banner'
import Nav from './components/nav'
import Footer from './containers/footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Browse, Signin, Signup } from './pages'
import * as ROUTES from './constants/routes'
import { Authenticated, ProtectedRoute } from './helpers/routes'
import useAuthListener from './hooks/use-auth-listener'
import BrowserContainer from './containers/browser'
export default function App() {
  const { user } = useAuthListener()
  console.log(user)

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path={ROUTES.SIGN_IN}>
            <Authenticated
              user={user}
              loggedInPath={ROUTES.BROWSE}
              path={ROUTES.SIGN_IN}
              exact
            >
              <Signin />
            </Authenticated>
          </Route>
          <Route path={ROUTES.SIGN_UP}>
            <Authenticated
              user={user}
              loggedInPath={ROUTES.BROWSE}
              path={ROUTES.SIGN_UP}
              exact
            >
              <Signup />
            </Authenticated>
          </Route>

          <Authenticated
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.HOME}
            exact
          >
            <Home />
          </Authenticated>
          <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
            <BrowserContainer />
          </ProtectedRoute>
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}
