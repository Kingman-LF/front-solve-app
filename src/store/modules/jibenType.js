const jibenType = {
    namespaced: true,
    state: () => ({
        currIndex: 0
    }),
    mutations: {
        getCurrentIndex(state,par) {
            console.log(par)
            state.currIndex = par
        }
    },
    actions: {},
    getters: {}
}
export default jibenType