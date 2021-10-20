import axios from "axios";
import globals from "../../globals"

const ENDPOINT_PATH = globals.APP_ENDPOINT

export default {
    /* Llama todas las universidades  */
    getAll() {
        return axios.get(ENDPOINT_PATH + 'planes')
    },
}