import axios from 'axios'

const API_URL = '/api/users/'

//Regiser user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if(response.date) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const authService = {
    register,
}

export default authService