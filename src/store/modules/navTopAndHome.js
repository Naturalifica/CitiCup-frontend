// 用户
export default {
    // 开启命名空间
    namespaced: true,
    state: {
        info: {
            uname: 'Leo',
            age: 21
        }
    },
    mutations: {
        updateUname(state, val) {
            state.info.uname = val
        },
        updateAge(state, val) {
            state.info.age = val
        }
    },
    actions: {
        asyncUpdate(store, val) {
            setTimeout(() => {
                store.commit('updateAge', val)
            }, 2000)
        }
    },
    getters: {
        format(state) {
            return state.info.uname + ',nice to meet you~'
        }
    }
}
