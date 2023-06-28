
import axios from 'axios';

export const loginUser = async (body) => {
    let res = await axios.post('http://localhost:3000/auth/login', body)
    return res.data.token
}