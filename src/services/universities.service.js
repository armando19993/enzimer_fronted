import axios from "axios";
import globals from "../../globals"

const ENDPOINT_PATH = globals.APP_ENDPOINT

export default {
    /* Llama todas las universidades  */
    getAll() {
        return axios.get(ENDPOINT_PATH + 'universidades')
    },
    /* Llama todas las areas de una universidad  */
    universityAreas(university) {
        return axios.get(ENDPOINT_PATH + 'areas_universidad/'+university)
    },
}