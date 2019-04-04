$(document).ready(function(){
  var horizontalBarChartData = {
      labels: ["Category 1", "Category 2", "Category 3", "Interview 4", "Category 5", "Category 6", "Category 7"],
      datasets: [{
          backgroundColor: "#00b0f0",
          data: [80,10,15,5,20,3,25]
      }]

  };
  var ctx = document.getElementById("barChart").getContext("2d");
  var myHorizontalBar = new Chart(ctx, {
      type: 'horizontalBar',
      data: horizontalBarChartData,
      options: {

          scales: {
            yAxes:[{
                barThickness: 20,
                ticks: {
                    beginAtZero:true,
                  mirror: true,
                },
            }],
          },
          responsive: true,
          legend: {
              display: false,
          },
          title: {
              display: true,
              text: 'Horizontal Bar Chart'
          },
        animation: {
          duration: 1,
onComplete () {
const chartInstance = this.chart;
const ctx = chartInstance.ctx;
const dataset = this.data.datasets[0];
const meta = chartInstance.controller.getDatasetMeta(0);

Chart.helpers.each(meta.data.forEach((bar, index) => {
const label = this.data.labels[index];
const labelPositionX = 20;
const labelWidth = ctx.measureText(label).width + labelPositionX;

ctx.textBaseline = 'middle';
ctx.textAlign = 'left';
ctx.fillStyle = '#333';
ctx.fillText(label, labelPositionX, bar._model.y);
}));
}
}
      }
  });
});
