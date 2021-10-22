import { createStore } from 'vuex'

import home from '../modules/home/store/journal'

const store = createStore({
    modules: {
        home
    }
})

export default store
