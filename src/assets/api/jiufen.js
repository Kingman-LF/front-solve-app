import { axios } from '@/utils/request'
// 纠纷列表

// 行政附议列表
export function getReconsiderList(parameter){
    return axios({
        url:'api/dispute/reconsiderationPageList',
        method:'post',
        data:parameter
    })
}
// 行政诉讼列表
export function getLawsuitList(parameter){
    return axios({
        url:'api/dispute/litigationPageList',
        method:'post',
        data:parameter
    })
}
// 信访事项列表
export function getProceedingList(parameter){
    return axios({
        url:'api/dispute/tsLettersPageList',
        method:'post',
        data:parameter
    })
}