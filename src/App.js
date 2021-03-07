import './App.css'
import requests from './requests'
import Row from './Row'
import Banner from './Banner'
import Nav from './Nav'
function App() {
  return (
    <div className='App'>
      <Banner />
      <Nav />
      <Row title='Season One' fetchUrl={requests.fetchSeasonOne} isLargeRow />
      <Row title='Season Two' fetchUrl={requests.fetchSeasonTwo} />
      <Row title='Season Three' fetchUrl={requests.fetchSeasonThree} />
      <Row title='Season Four' fetchUrl={requests.fetchSeasonFour} />
    </div>
  )
}

export default App
// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/8.2.10/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/8.2.10/firebase-analytics.js"></script>

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>
