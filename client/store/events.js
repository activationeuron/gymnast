import axios from '../utils/axios'
const state = {
    sheetByLevel: null, // used at eventCreateDailogue,
    allLiveEvents: []
}

const getters = {
    retriveSheetByLevel: state => {
        return state.sheetByLevel
    }
}
const actions = {
    async getSheetByLevel({ commit }, level) {
        axios
            .get('/getsheetsbylevel', { params: { level: `${level}` } })
            .then(res => {
                console.log(res.data.result)
                commit('setSheetByLevel', res.data.result)
            })
            .catch(er => {
                console.log(er)
            })
    },
    async postEventDetails({ commit }, data) {
        axios
            .post('/createevent', data)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    },
    async getAllEvents({ commit }, status) {
        //get the status from frontend true or false
        axios
            .get('/getallevents', {
                params: {
                    status: status
                }
            })
            .then(res => {
                console.log(res)
                commit('setAllLiveEvents', res.data.result)
            })
            .catch(err => {
                console.log(err)
            })
    }
}

const mutations = {
    setSheetByLevel: (state, sheetByLevels) =>
        (state.sheetByLevel = sheetByLevels),
    setAllLiveEvents: (state, allLiveEvents) => {
        state.allLiveEvents = allLiveEvents
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}
