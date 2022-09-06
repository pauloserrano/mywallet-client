import { useState } from 'react'

const useForm = (initial={}) => {
    const [form, setForm] = useState(initial)

    function handleChange({ target: { value, name }}) {
        setForm({
            ...form,
            [name]: value
        })
    }


  return [form, handleChange]
}

export { useForm }