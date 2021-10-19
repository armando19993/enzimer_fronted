import axios from "axios";

const ENDPOINT_PATH = "https://reqres.in/api/";

export default {
    register(user) {
        return axios.post(ENDPOINT_PATH + "regiser", user);
    },
    login(user) {
        return axios.post(ENDPOINT_PATH + "login", user);
    },
    logout() {
      return localStorage.removeItem('user');
    },
    setUser(token)
    {
      return localStorage.setItem('user', token)
    },
    getUser()
    {
      return localStorage.getItem('user')
    }
}