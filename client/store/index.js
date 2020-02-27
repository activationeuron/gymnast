import Vuex from 'vuex'
import Vue from 'vue'
import studentRegistration from './studentRegistration'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        studentRegistration
    }
})
