var svg = d3.select("svg"),
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

d3.csv("flare.csv", type, function(error, data) {
  if (error) throw error;

  x.domain(d3.extent(data, function(d) { return d.value; }));

  var simulation = d3.forceSimulation(data)
      .force("x", d3.forceX(function(d) { return x(d.value); }).strength(1))
      .force("y", d3.forceY(height/2))
      .force("collide", d3.forceCollide(20))
      .stop();

  for (var i = 0; i < 120; ++i) simulation.tick();

  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).ticks(100, ".0s"))
      // .call(d3.axisTop(x).ticks(500, ".0s"));

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

      div.html(d.id + " "+d.value)
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
}
