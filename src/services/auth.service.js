import axios from "axios";

const ENDPOINT_PATH = "https://reqres.in/api/";

export default {
    login(user) {
      return axios
        .post(ENDPOINT_PATH + 'login', user)
        .then(response => {
          if (response.data.token) {
            localStorage.setItem('user', response.data.token);
          }
          return response.data;
        });
    },

    register(user) {
      return axios.post(ENDPOINT_PATH + 'register',user);
    },
    logout() {
      localStorage.removeItem('user');
    },
    getUser()
    {
      return localStorage.getItem('user')
    }
}