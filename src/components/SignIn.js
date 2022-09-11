import { Link, useNavigate } from "react-router-dom"
import { useForm } from "../hooks/useForm"
import { LoginWrapper } from "../styles"
import Form from "../common/Form"
import { signIn } from "../services/axios"
import useGlobalContext from "../hooks/useGlobalContext"


const SignIn = () => {
  const { setUser } = useGlobalContext()
  const navigate = useNavigate()
  const [form, handleForm] = useForm({
    email: '',
    password: ''
  })

  async function handleSubmit(e){
    e.preventDefault()
    try {
      const { data: { name, token }} = await signIn({ ...form })
      setUser(user => ({
        name,
        token
      }))
      navigate('/')
      
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <LoginWrapper>
      <h1>MyWallet</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Fields>
          <input required type="email" name="email" placeholder="E-mail" value={form.email} onChange={handleForm} />
          <input required type="password" name="password" placeholder="Senha" value={form.password} onChange={handleForm} />
        </Form.Fields>
        <Form.Submit>
          <button type="submit">Submit</button>
        </Form.Submit>
      </Form>
      <Link to="/signup">Primeira vez? Cadastre-se!</Link>
    </LoginWrapper>
  )
}

export default SignIn