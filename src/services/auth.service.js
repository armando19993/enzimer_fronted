import axios from "axios";
import globals from "../../globals"

const ENDPOINT_PATH = globals.APP_ENDPOINT

export default {
    login(user) {
      return axios
        .post(ENDPOINT_PATH + 'login', user)
        .then(response => {
          if (response.data.token) {
            localStorage.setItem('user', response.data.token)
          }
          return response.data;
        })
    },

    register(user) {
      return axios.post(ENDPOINT_PATH + 'register',user)
        .then(response => {
          if (response.data.token) {
            localStorage.setItem('user', response.data.token)
          }
          return response.data;
        })
    },
    logout() {
      localStorage.removeItem('user');
    },
    getUser()
    {
      return localStorage.getItem('user')
    }
}