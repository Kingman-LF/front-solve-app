export function getCharts(chart,data){
    const map = {};
    data.forEach(function(obj) {
        map[obj.name] = obj.percent;
    });
    // Step 2: 载入数据源
    chart.source(data, {
        percent: {
            formatter: function formatter(val) {
                return val;
            }
        }
    });
    chart.legend({
        offsetX:-20,
        position: 'right',
        verticalAlign:"bottom",
        itemFormatter: function itemFormatter(val) {
            return val + '    ' + map[val];
        }
    });
    chart.coord('polar', {
        transposed: true,
        innerRadius: 0.4,
        radius: 1
    });
    chart.axis(false);
    // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
    chart.interval()
        .position('a*percent')
        .color('name', [ '#8bf8b1', '#fae17b', '#f98a8a' ])
        .adjust('stack');
    // Step 4: 渲染图表
    chart.render();
}