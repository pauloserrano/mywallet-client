import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import { GlobalContextProvider } from '../context/GlobalContext'
import { GlobalStyle } from '../styles'
import Home from './Home'
import SignIn from './SignIn'
import SignUp from './SignUp'


const App = () => {
  return (
    <Router>
      <GlobalContextProvider value={1}>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </GlobalContextProvider>
    </Router>
  );
}

export default App;
