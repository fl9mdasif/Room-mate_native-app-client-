
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api', // Replace with your server URL
    timeout: 10000, // Set timeout (optional)
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
