const asideid = {
    namespaced: true,
    state: () => ({
        id: '',
        targetId:""
    }),
    mutations: {
        getAsideId(state,par) {
            console.log(par)
            state.id = par.id
        },
        getTargetId(state,par) {
            state.targetId = par.id
        }
    },
    actions: {},
    getters: {}
}
export default asideid