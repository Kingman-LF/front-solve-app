import { axios } from '@/utils/request'

// 详情
export function getComplaintlistDetails(parameter){
    return axios({
        url:'api/complaintlist/xzzf/getComplaintlistDetails',
        method:'post',
        data:parameter
    })
}