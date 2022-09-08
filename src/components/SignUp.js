import { LoginWrapper } from "../styles"
import Form from "../common/Form"
import { useForm } from "../hooks/useForm"
import { Link } from "react-router-dom"

const SignUp = () => {
  const [form, handleForm] = useForm({
    name: '',
    email: '',
    password: '',
    passwordCheck: ''
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