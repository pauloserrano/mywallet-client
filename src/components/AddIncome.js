import { AiOutlineCloseCircle as Close } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import Form from "../common/Form"
import { useForm } from "../hooks/useForm"
import { HomeWrapper } from "../styles"

const AddIncome = () => {
    const navigate = useNavigate()
    const [form, handleForm] = useForm({
        value: '',
        description: ''
    })

    function handleSubmit(e){
        e.preventDefault()
        console.log(form)
    }

  return (
    <HomeWrapper>
        <header>
            <h2>Nova Entrada</h2>
            <Close onClick={() => navigate('/')} className='btn' size={36} color={'white'} />
        </header>
        <Form onSubmit={handleSubmit}>
            <Form.Fields>
                <input required type="number" step={0.01} name="value" placeholder="Valor" value={form.value} onChange={handleForm} />
                <input type="text" name="description" placeholder="Descrição" value={form.description} onChange={handleForm} />
            </Form.Fields>
            <Form.Submit>
                <button type="submit">Salvar Entrada</button>
            </Form.Submit>
        </Form>
    </HomeWrapper>
  )
}

export default AddIncome