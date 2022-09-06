import { useForm } from "../hooks/useForm"
import Form from "../common/Form"


const SignIn = () => {
  const [form, handleChange] = useForm({
    email: '',
    password: ''
  })

  function handleSubmit(e){
    e.preventDefault()
  }


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Fields>
        <input type="email" name="email" value={form.email} onChange={handleChange} />
        <input type="password" name="password" value={form.password} onChange={handleChange} />
      </Form.Fields>
      <Form.Submit>
        <button type="submit">Submit</button>
      </Form.Submit>
    </Form>
  )
}

export default SignIn