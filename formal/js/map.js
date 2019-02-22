//Width and height of map
var width = 1145;
var height = 641;


// D3 Projection
var projection = d3.geoAlbers()
  .translate([width / 2, height / 2])
  .scale(1425);

// Define path generator
var path = d3.geoPath()
  .projection(projection);

var div = d3.select("body").append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);


//Create SVG element and append map to the SVG
var svg = d3.select("#map")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("viewBox", "0 0 " + width + " " + height)
  .attr("preserveAspectRatio", "xMidYMid meet");

// Load GeoJSON data and merge with states data
d3.json("https://gist.githubusercontent.com/anonymous/9f6a63841a74562a4a7173b9f7033e83/raw/aafb03b49f258cbfeec816a7bf5c92288a06193c/us-states.json", function(json) {

  var repeat = {};
  // Bind the data to the SVG and create one path per GeoJSON feature
  svg.selectAll("path")
    .data(json.features)
    .enter()
    .append("path")
    .attr("d", path)
    .style("stroke", "#fff")
    .style("stroke-width", "1")
    .style("fill", "rgb(213,222,217)");


  //project circles
  d3.csv("data/programs.csv", function(data) {

    svg.selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "circle")
      .attr("cx", function(d) {
        return projection([d.lon, d.lat])[0];
      })
      .attr("cy", function(d) {
        return projection([d.lon, d.lat])[1];
      })
      .attr("r", "10")
      .attr("opacity", "0.2")
      .attr("fill", "purple")
      .attr("id",function(d){
        return

      })


      // mouse hover function

      .on("mouseover", function(d) {
        div.transition()
          .duration(200)
          .style("opacity", .9);

        div.html(d.university + " " + d.location)
          .style("left", (d3.event.pageX) + "px")
          .style("top", (d3.event.pageY - 28) + "px");
      })




      .on("mouseout", function(d) {
        div.transition()
          .duration(500)
          .style("opacity", 0);
      });


//click functions


      // var private = [];
      // var public = [];
      //
      // data.forEach(function(d) {
      //   if (d.property == 'Public') {
      //     public.push(d.lon);
      //   }
      //
      //   if (d.property == 'Private') {
      //     private.push(d.lon);
      //   }
      // });
      //
      // console.log(private,public);
      //
      //    $("#private").click(function(){
      //      priv.forEach(function(p) {
      //        $("#"+p).
      //      })
      //    })


  });
});
