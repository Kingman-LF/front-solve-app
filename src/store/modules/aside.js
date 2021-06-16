const getTaskid = {
    namespaced: true,
    state: () => ({
        taskId: "",
        breadName:""
    }),
    mutations: {
        gettaskid(state,par) {
            state.taskId = par.taskId
        },
        getBreadName(state,par) {
            localStorage.setItem("name",par)
            state.breadName = par
        },
        getToken(state,par) {
            state.token = par
        },
        getUser(state,par) {
            state.user = par
        }
    },
    actions: {},
    getters: {}
}
export default getTaskid