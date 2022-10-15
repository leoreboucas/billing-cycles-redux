import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api'

export const getSummary = () => {
    const request = axios.get(`${BASE_URL}/billingCycles/summary`)

    return {
        type: 'LOAD_SUMMARY',
        payload: request
    }
}