import {axios} from '../../utils/request'

//投诉列表
export function listDept(parameter){
    return axios({
        url:'api/complaintlist/xzzf/listDept',
        method:"post",
        data:parameter
    })
}
