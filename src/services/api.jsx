import axios from 'axios';

const BASE_URL = 'http://localhost:8080'; // Replace with your API base URL

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// api.interceptors.request.use(
//   (config) => {
//     // You can add authorization headers or other custom headers here if needed
//     const params = new URLSearchParams();

//     params.append('grant_type', 'password');
//     params.append('client_id', 'crti-bff-relatura');
//     params.append('scope', 'interno');
//     params.append('client_secret', 'df8290a6c708424e944b7852d7d21a86');
//     params.append('username', 'bscrtirelatura');
//     params.append('password', '4m1AYFrFRA1UdKh');

//     const response = await axios.post(
//       'https://susc.dsv.bradescoseguros.com.br:8443/Auth',
//       params,
//       {
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded'
//         }
//       }
//     );

//     console.log('Token response:', response.data);
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default api;