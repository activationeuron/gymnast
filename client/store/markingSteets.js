import axios from '../utils/axios'
import router from '../routes'
const state = {
    sheetData: {}
}

const getters = {}
const actions = {
    async createMarkingSheet({ commit }, markingSheetData) {
        axios
            .post('/createsheet', markingSheetData)
            .then(req => {
                console.log(req.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
}

const mutations = {}
export default {
    state,
    getters,
    actions,
    mutations
}
