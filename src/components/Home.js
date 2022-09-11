import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { RiLogoutBoxRLine as Logout } from "react-icons/ri"
import { AiOutlinePlusCircle as Plus, AiOutlineMinusCircle as Minus } from "react-icons/ai"
import { HomeWrapper } from "../styles"
import Balance from "./Balance"
import useGlobalContext from "../hooks/useGlobalContext"
import { getTransaction, logout } from "../services/axios"


const Home = () => {
  const { user, setUser } = useGlobalContext()
  const navigate = useNavigate()
  const [entries, setEntries] = useState([
    { date: '08/10', description: 'Almoço', value: '39.90', type: 'expense' },
    { date: '25/09', description: 'Salário', value: '9999.99', type: 'income' }
  ])

  useEffect(() => {
    if (!user?.token) {
      console.log('no token')
      navigate('/signin')
      return
    }
    fetchData()

  }, [])

  const fetchData = async () => {
    try {
      const response = await getTransaction({ token: user.token })
      setEntries(response.data)

    } catch (error) {
      console.error(error)
    }
  }

  const handleLogout = () => {
    try {
      logout({ token: user.token })
      setUser({})
      setEntries([])
      navigate('/signin')

    } catch (error) {
      console.error(error)
      
    }
  }


  return (
    <HomeWrapper>
      <header>
        <h2>Olá, Fulano</h2>
        <Logout onClick={handleLogout} className="btn" size={24} color={"white"} />
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