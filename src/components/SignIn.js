import { Link } from "react-router-dom"
import { useForm } from "../hooks/useForm"
import { LoginWrapper } from '../styles'
import Form from "../common/Form"


const SignIn = () => {
  const [form, handleForm] = useForm({
    email: '',
    password: ''
  })

  function handleSubmit(e){
    e.preventDefault()
    console.log(form)
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