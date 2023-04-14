import axios from 'axios'
// import { url } from "./utils/url.js"

const url = 'http://localhost:5000'

export const fetchMagnet = async () => {
    try {
        
        const config = { headers: { 'Content-Type': 'application/json' } }
        const { data } = await axios.post(`${url}/movies`, config)  
        console.log(data)
    
        return data
    } catch(e) {
        console.log('An error occured: ',e)
    }
}