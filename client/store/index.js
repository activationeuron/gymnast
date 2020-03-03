import Vuex from 'vuex'
import Vue from 'vue'
import studentRegistration from './studentRegistration'
import markingSteets from './markingSteets'
import events from './events'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        studentRegistration,
        markingSteets,
        events
    }
})
