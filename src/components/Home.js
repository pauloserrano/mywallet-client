import { RiLogoutBoxRLine as Logout } from "react-icons/ri"
import { AiOutlinePlusCircle as Plus, AiOutlineMinusCircle as Minus } from "react-icons/ai"
import { HomeWrapper } from "../styles"
import Balance from "./Balance"


const Home = () => {
  return (
    <HomeWrapper>
      <header>
        <h2>Olá, Fulano</h2>
        <Logout className="logout-btn" size={24} color={"white"}/>
      </header>
      <Balance />
      <div className="actions">
        <button>
          <Plus size={24} />
          <span>Nova entrada</span>
        </button>
        <button>
          <Minus size={24} />
          <span>Nova saída</span>
        </button>
      </div>
    </HomeWrapper>
  )
}

export default Home