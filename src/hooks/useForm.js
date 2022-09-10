import { useState } from 'react'

const useForm = (initial={}) => {
    const [form, setForm] = useState(initial)

    function handleForm({ target: { value, name }}) {
        setForm({
            ...form,
            [name]: value
        })
    }


  return [form, handleForm]
}

export { useForm }