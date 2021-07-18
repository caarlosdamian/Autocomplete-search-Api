import axios from 'axios'
const getData = async() =>{
const response = await axios.get('https://reqres.in/api/users')
    return response.data.data
}
export default getData