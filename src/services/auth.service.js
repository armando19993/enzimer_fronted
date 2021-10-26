import axios from "axios";
import globals from "../../globals"

const ENDPOINT_PATH = globals.APP_ENDPOINT

export default {
    login(user) {
      return axios
        .post(ENDPOINT_PATH + 'login', user)
        .then(response => {
          if (response.data.data) {
            localStorage.setItem('user', JSON.stringify(response.data.data[0]))
            return response.data.data[0]
          }else{
            throw response.data.error
          }
        })
    },

    register(user) {
      return axios.post(ENDPOINT_PATH + 'registro',user)
        .then(response => {
          if (response.data.user) {
            localStorage.setItem('user', JSON.stringify(response.data.user))
            return response.data.user
          }else{
            throw response.data.error
          }
        })
    },
    logout() {
      localStorage.removeItem('user');
    },
    getUser()
    {
      return JSON.parse(localStorage.getItem('user'))
    }
}