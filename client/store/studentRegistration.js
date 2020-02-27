import axios from '../utils/axios'
import router from '../routes'
const state = {
    user: []
}

const getters = {
    getUserData: state => {
        return state.user
    }
}
const actions = {
    async playerRegistration({ commit }, data) {
        const { firstname, lastname, email, password } = data

        const response = await axios.post('/register', {
            firstname,
            lastname,
            email,
            password
        })
    },
    playerLogin({ commit }, data) {
        //     axios
        //         .post('/login', data)
        //         .then(res => {
        //             console.log(res)
        //             if (res.data.error) {
        //                 console.log('this is erroe')
        //                 console.log(res)
        //             } else {
        //                 commit('setUserData', res.data)
        //                 router.push({
        //                     name: 'dashboard',
        //                     params: { role: res.data.user.role }
        //                 })
        //             }
        //         })
        //         .catch(error => {
        //             console.log(error)
        //         })
        // }

        return new Promise(resolve => {
            axios
                .post('/login', data)
                .then(res => {
                    if (res.data.error) {
                        console.log(res.data)
                    } else {
                        commit('setUserData', res.data.user)
                        resolve(res.data.user.role)
                    }
                })
                .catch(err => console.log(err))
        })
    }
}

const mutations = {
    setUserData: (state, userData) => (state.user = userData)
}
export default {
    state,
    getters,
    actions,
    mutations
}
