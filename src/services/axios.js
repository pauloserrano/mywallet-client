import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_API
})

const signUp = ({ name, email, password }) => {
    return api.post('/signup', { name, email, password })

}

const signIn = ({ email, password }) => {
    return api.post('/signin', { email, password })
}

const getTransaction = ({ token }) => {
    return api.get('/transaction', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

const postTransaction = ({ value, description, token, type }) => {
    return api.post('/transaction', { value, description }, {
        headers: {
            Authorization: `Bearer ${token}`,
            type
        }
    })
}

const logout = ({ token }) => {
    return api.delete('/signout', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export { signUp, signIn, getTransaction, postTransaction, logout }