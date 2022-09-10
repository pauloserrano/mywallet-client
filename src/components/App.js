import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import { GlobalContextProvider } from '../context/GlobalContext'
import { GlobalStyle } from '../styles'
import AddExpense from './AddExpense'
import AddIncome from './AddIncome'
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
          <Route path='/expense' element={<AddExpense />} />
          <Route path='/income' element={<AddIncome />} />
        </Routes>
      </GlobalContextProvider>
    </Router>
  );
}

export default App;
