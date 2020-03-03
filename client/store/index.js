import Vuex from 'vuex'
import Vue from 'vue'
import studentRegistration from './studentRegistration'
import markingSteets from './markingSteets'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        studentRegistration,
        markingSteets
    }
})
