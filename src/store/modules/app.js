export const app = {
    namespaced: true,
    state: {
        toggleEditModal: false,
        userList: []
    },
    mutations: {
        SET_USER_LIST(state, payload){
            if(payload) state.userList = payload
        },
        TOGGLE_EDIT_MODAL(state, payload){
            state.toggleEditModal = payload;
        }
    },
    actions: {
        toggleEditModal({ commit }, payload){
            commit("TOGGLE_EDIT_MODAL", payload)
        },
        setUserList({ commit }, payload){
            commit("SET_USER_LIST", payload)
        }
    }
}