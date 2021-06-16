
// 得到简单的环状图
export function getPieChart(myChart, data, color, radius1, radius2) {
    var r1 = radius1 ? radius1 : "20%",
        r2 = radius2 ? radius2 : "40%";
    myChart.clear()
    let option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            show: true,
            type: 'scroll',
            bottom: '10%',
            right: '1%',
            orient: 'vertical',
            icon: 'circle',
            itemWidth: 8,
            itemHeight: 8,
            itemGap: 15,
            formatter: function (e1) {
                let str = data.filter(item => item.name === e1)
                let arr = [
                    '{a|' + e1 + '}: {b|' + str[0].value + '个}'
                ]
                return arr
            },
            textStyle: {
                rich: {
                    a: {
                        color: "#333",
                        verticalAlign: "middle",
                        align: "center",
                        fontSize: 14,
                        lineHeight: 30,
                        padding: [15, 0]
                    },
                    b: {
                        align: "left",
                        fontSize: 14,
                        padding: [15, 0],
                        lineHeight: 30,
                        color: "#B6B6B6"
                    }
                }
            }
        },
        graphic:{
            type:'text',
            left:'20%',
            top:'center',
            style:{
                text:'任务总框',
                textAlign:'center',
                fill:'#000'
            }
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: [r1, r2],
                center: ['28%', '50%'],
                avoidLabelOverlap: false,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                label: {
                    fontSize: 14
                },
                labelLine: {
                    show: true,
                    length2: 0
                },
                color: color,
                data: data
            }
        ]
    };
    option && myChart.setOption(option);
    // 保证图形随窗口变化
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}
// 得到环状进程图
export function getRingPro(e, myChart, ...color) {
    myChart.clear()
    var option = {
        title: {
            show: true,
            text: e === 0 ? 0 : e + "%",
            x: "center",
            y: "center",// 通过x,y将标题(进度)定位在圆环中心
            textStyle: {
                fontSize: "16",
                color: color[4],
                fontWeight: "550",
                fontFamily: "DINPro, DINPro-Regular",
            },
        },
        tooltip: {
            trigger: "item",
            formatter: "{d}%",
            show: false,
        },
        legend: {
            orient: "vertical",
            x: "left",
            show: false,
        },
        series: {
            name: "",
            type: "pie",
            radius: ["55%", "90%"],
            avoidLabelOverlap: true,
            label: {
                position: 'center',
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: [
                {
                    value: e,
                    name: "",
                    itemStyle: {
                        color: color[0],
                    },
                },
                {
                    value: 2,
                    name: "",
                    itemStyle: {
                        color: color[1],
                    },
                },
                {
                    value: 100 - e,
                    name: "",
                    itemStyle: {
                        color: color[2],
                    },
                }, {
                    value: 2,
                    name: "",
                    itemStyle: {
                        color: color[3],
                    },
                }
            ],
        },
    };
    myChart.setOption(option);
    // 保证图形随窗口变化
    window.addEventListener("resize", function () {
        myChart.resize();
    })
}
// 得到饼状图
export function getSimplePie(myChart, data, color, radius, center) {
    myChart.clear()
    let option = {
        title: {
            show: false
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            show: false
        },
        series: [
            {
                name: '人员走访',
                type: 'pie',
                radius: radius,
                center: center,
                color: color,
                data: data,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                labelLine: {
                    length2: 0
                }

            }
        ]
    };
    option && myChart.setOption(option);
    // 保证图形随窗口变化
    window.addEventListener("resize", function () {
        myChart.resize();
    })
}
// 柱状图叠加展示
export function getBarStack(myChart, legendData, xData, series) {
    myChart.clear();
    let option = {
        title: {
            top: 20,
            // text: '上报总数',
            left: 10,
            textStyle: {
                color: "#333",
                fontSize: 17,
                fontWeight: 400
            }
        },
        grid: {
            left: '15%',
            // right: '10%',
            bottom: '10%'
        },
        tooltip: {
            trigger: "axis",
        },
        legend: {
            top: 20,
            right: 10,
            itemWidth: 15,
            itemHeight: 15,
            data: legendData,
            itemGap: 3,
        },
        xAxis: {
            data: xData,
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false
            }
        },
        yAxis: {
            splitLine: {
                show: false,
            },
        },
        series: series
    };
    option && myChart.setOption(option);
    // 保证图形随窗口变化
    window.addEventListener("resize", function () {
        myChart.resize();
    })
}