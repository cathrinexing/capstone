

(function(){

//Width and height of map
var width = 900;
var height = 450;
// var width = 1145;
// var height = 641;


var svg = d3.select("#beeswarm")
  .append("svg")
  .attr("width", width)
  .attr("height", height)

    svg= d3.select("svg"),
    margin = {top: 40, right: 40, bottom: 40, left: 40},
    width = svg.attr("width") - margin.left - margin.right,
    height = svg.attr("height") - margin.top - margin.bottom;

var formatValue = d3.format(",d");
//add a tooptip
      var div = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

var x = d3.scaleLog()
    .rangeRound([0, width]);

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");




d3.csv("data/tuition.csv", type, function(error, data) {
//buttons
// var selected = instate;
// var dataset = drawGraph(data, selected);
// console.log(colomn,dataset);
// redraw(dataset,select);
//
//
// d3.select("button#binstate").classed("selected", true);
//
//       d3.select("#binstate")
//           .on("click", function(d,i) {
//               selected = "instate"
//               dataset = drawGraph(data, selected);
//               redraw(dataset, selected);
//               var thisButton = d3.select(this);
//               d3.selectAll("#buttons_1 button").classed("selected", false);
//               thisButton.classed("selected", true);
//
//           });
//
//       d3.select("#boutstate")
//           .on("click", function(d,i) {
//               selected = "1990"
//               dataset = drawGraph(data, selected);
//               redraw(dataset, selected);
//               var thisButton = d3.select(this);
//               d3.selectAll("#buttons_1 button").classed("selected", false);
//               thisButton.classed("selected", true);
//           });
//


  if (error) throw error;

  x.domain(d3.extent(data, function(d) { return d.value; }));

  var simulation = d3.forceSimulation(data)
      .force("x", d3.forceX(function(d) { return x(d.value); }).strength(1))
      .force("y", d3.forceY(height/2))
      .force("collide", d3.forceCollide(18))
      .stop();

  for (var i = 0; i < 120; ++i) simulation.tick();

  // var scale = d3.scaleLinear()
  //                 .domain([d3.min(data), d3.max(data)])
  //                 .range([height/2, 0]);
  //

  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).ticks(20, ".0s"))

    g.append("g")
          .attr("class", "axis axis--x")
          .attr("transform", "translate(0,0)")
          .call(d3.axisTop(x).ticks(20, ".0s"))

  var cell = g.append("g")
      .attr("class", "cells")
    .selectAll("g").data(d3.voronoi()
        .extent([[-margin.left, -margin.top], [width + margin.right, height + margin.top]])
        .x(function(d) { return d.x; })
        .y(function(d) { return d.y; })
      .polygons(data)).enter().append("g");

  cell.append("circle")
      .attr("r", 16)
      .attr("opacity", "0.2")
      .attr("fill", "purple")
      .attr("cx", function(d) { return d.data.x; })
      .attr("cy", function(d) { return d.data.y; })

    //  mouse hover function

    .on("mouseover", function(d) {
      div.transition()
        .duration(200)
        .style("opacity", .9);

      div.html(d.data.id + " "+d.data.value)
        .style("left", (d3.event.pageX) + "px")
        .style("top", (d3.event.pageY - 28) + "px");
    })


    .on("mouseout", function(d) {
      div.transition()
        .duration(500)
        .style("opacity", 0);
    });



  // cell.append("path")
  //     .attr("d", function(d) { return "M" + d.join("L") + "Z"; });
  cell.append("title")
      .text(function(d) { return d.data.id + "\n" + formatValue(d.data.value); });
});

function type(d) {
  if (!d.value) return;
  d.value = +d.value;
  return d;
}// end of draw function

})();//end of initial f
