import { RiLogoutBoxRLine as Logout } from "react-icons/ri"
import { AiOutlinePlusCircle as Plus, AiOutlineMinusCircle as Minus } from "react-icons/ai"
import { Wrapper } from "../styles"
import styled from "styled-components"
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

const HomeWrapper = styled(Wrapper)`
  header{
    display: flex;
    justify-content: space-between;
    width: min(100%, 500px);
    margin-bottom: 1.5em;

    h2{
      font-size: 2em;
      font-weight: bold;
      color: white;
    }

    .logout-btn{
      cursor: pointer;
    }
  }

  .actions{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-top: 1rem;
    width: min(100%, 500px);

    button{
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      height: min(20vh, 150px);
      padding: 1rem;
      border: none;
      font-size: 16px;
      font-weight: bold;
      color: white;
      background-color: #A326D6;
      cursor: pointer;
      transition: .1s all ease-in;

      :hover{
          filter: brightness(1.05)
      }

      span{
        margin-right: auto;
      }
    }
  }
`

export default Home