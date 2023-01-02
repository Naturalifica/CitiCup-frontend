import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            isLogin: false,
            isAdmin: false,
        }
    },
    mutations: {
        changeLogin (state) {
            state.isLogin = true
            console.log('changeLogin: login state is ' + state.isLogin)
        },
    }
})


export default store