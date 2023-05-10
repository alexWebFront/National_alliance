import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            timer: null
        }
    },
    mutations: {
        setTimer (state, value) {
            state.timer = value;
        },
        clearTimer(state) {
            clearInterval(state.timer);
            state.timer = undefined;
        }
    }
})

export { store };
