export function getPreDay() {
    let curDate = new Date();
    let preDate = new Date(curDate.getTime()-24*60*60*1000);
    let y = preDate.getFullYear();
    let m = preDate.getMonth()+1;
    let d = preDate.getDate();
    m = m<10?"0" + m.toString():m;
    d = m<10?"0" + d.toString():m;
    let date = y + "-" + m + "-" + d;
    return date
}
export function getDate(){
    let curDate = new Date();
    let y = curDate.getFullYear();
    let m = "01";
    let d = "01";
    let date = y + "-" + m + "-" + d;
    return date
}
// 获取相差的日期
var mons = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function isLeapYear(year) {
    var r = year / 100
    if (r === parseInt(r)) {
        r = year / 400
        return r === parseInt(r)
    }
    r = year / 4
    if (r === parseInt(r)) {
        return true
    }
    return false
}

function getDaysOfMonth(month, year) {
    if (month === 2 && isLeapYear(year)) {
        return 29
    }
    return mons[month]
}

function getMonthsOfYear(year) {
    if (isLeapYear(year)) {
        return 366
    }
    return 365
}

export function diff(s1, s2) {
    console.log(s1)
    var arr1 = s1.split('-').map(Number)
    var arr2 = s2.split('-').map(Number)
    var [year, month, day] = arr2.map((n, i) => n - arr1[i])
    if (day < 0) {
        day += getDaysOfMonth(arr2[1], arr2[0])
        month--
    }
    if (month < 0) {
        month += getMonthsOfYear(arr2[0])
        year--
    }
    return [year, month, day]
}
// 获取当前日期后两个月的时间
function getTimeByDay(time,month,year) {
    let num = (Number(month) === 2 && isLeapYear(year) ) ? 29 : mons[Number(month)-1]  // 获取两个月的天数
    return time + 60 * 60 * 1000 * 24 * num;
}

function formatTime(time) {
    return new Date(time).toISOString().split('T')[0];
}
export function getAfterDate(time,month,year) {
    let lastDay = getTimeByDay(time,month,year) //获取30天后的日期
    let lastTime = formatTime(lastDay)
    return lastTime
}