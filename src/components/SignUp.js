import { LoginWrapper } from "../styles"
import Form from "../common/Form"
import { useForm } from "../hooks/useForm"
import { Link, useNavigate } from "react-router-dom"
import { signUp } from "../services/axios"


const SignUp = () => {
  const navigate = useNavigate()
  const [form, handleForm] = useForm({
    name: '',
    email: '',
    password: '',
    passwordCheck: ''
  })


  async function handleSubmit(e){
    e.preventDefault()

    if (form.password !== form.passwordCheck){
      alert('Senhas não coincidem.')
      return
    }

    try {
      await signUp({ ...form })
      navigate('/signin')
      
    } catch (error) {

      switch(error.response.status){
        case 409:
          alert('Email já cadastrado!')
          break
        
        default:
          alert('Por favor, confira os dados informados!')
      }
    }
  }

  return (
    <LoginWrapper>
      <h1>MyWallet</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Fields>
          <input required type="text" name="name" placeholder="Nome" value={form.name} onChange={handleForm} />
          <input required type="email" name="email" placeholder="Email" value={form.email} onChange={handleForm} />
          <input required type="password" name="password" placeholder="Senha" value={form.password} onChange={handleForm} />
          <input required type="password" name="passwordCheck" placeholder="Confirme a senha" value={form.passwordCheck} onChange={handleForm} />
        </Form.Fields>
        <Form.Submit>
          <button type="submit">Cadastrar</button>
        </Form.Submit>
      </Form>
      <Link to="/signin">Já tem uma conta? Entre Agora</Link>
    </LoginWrapper>
  )
}

export default SignUp