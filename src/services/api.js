import axios from 'axios'

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 5000
})

export const getUsers = async () => {
    try {
    const response = await api.get('/users')
    return response.data
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message)
    }
}