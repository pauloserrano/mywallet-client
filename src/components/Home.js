import { useNavigate } from "react-router-dom"
import { RiLogoutBoxRLine as Logout } from "react-icons/ri"
import { AiOutlinePlusCircle as Plus, AiOutlineMinusCircle as Minus } from "react-icons/ai"
import { HomeWrapper } from "../styles"
import Balance from "./Balance"


const Home = () => {
  const navigate = useNavigate()

  const entries = [
    { date: '08/10', title: 'Almoço', amount: '39.90', type: 'expense'},
    { date: '25/09', title: 'Salário', amount: '9999.99', type: 'income'}
  ]

  return (
    <HomeWrapper>
      <header>
        <h2>Olá, Fulano</h2>
        <Logout className="btn" size={24} color={"white"}/>
      </header>
      <Balance entries={entries} />
      <div className="actions">
        <button onClick={() => navigate('/income')}>
          <Plus size={24} />
          <span>Nova entrada</span>
        </button>
        <button onClick={() => navigate('/expense')}>
          <Minus size={24} />
          <span>Nova saída</span>
        </button>
      </div>
    </HomeWrapper>
  )
}

export default Home