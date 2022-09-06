import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from '../styles'


const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<></>} />
      </Routes>
    </Router>
  );
}

export default App;
