(function() {

    //Width and height of map
    var width = 1145;
    var height = 660;
    var selected;


    // D3 Projection
    var projection = d3.geoAlbers()
      .translate([width / 2, height / 2])
      .scale(1100);

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
        d3.json("data/programs.json", function(data) {

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
              .attr("r", "5")
              .attr("opacity", "0.2")
              .attr("fill", "purple")
              .attr("id", function(d) {
                return d.id;

              })


              // mouse hover function

              .on("mouseover", function(d) {
                div.transition()
                  .duration(200)
                  .style("opacity", .9);

                div.html(d.university + "<br>"+ d.major+"<br>"+ d.location)
                  .style("left", (d3.event.pageX) + "px")
                  .style("top", (d3.event.pageY - 28) + "px");
              })




              .on("mouseout", function(d) {
                div.transition()
                  .duration(500)
                  .style("opacity", 0);
              });


            //click functions


            var priv = [];
            var public = [];
            var urban = [];
            var suburban = [];


            data.forEach(function(d) {
              if (d.property == 'Public') {
                public.push(d.id);
              }

              if (d.property == 'Private') {
                priv.push(d.id);
              }

              if (d.campussetting == 'Urban') {
                urban.push(d.id);
              }


            });

            //onclick resetmap
            d3.select("#resetmap")
              .on("click", function() {

              // console.log("wwww");
              d3.selectAll(".button1")
                .style("background-color", "lightgrey")

                // d3.selectAll("input")
                // .attr('checked',false)

                d3.selectAll(".circle")
                .style("opacity", "0.5")
                .style("fill", " #4fbba9")

              });


                //click navigatin buttons

                d3.select("#private")
                .on("click", function() {
                  console.log("wwww");
                  //reset color to default
                  d3.selectAll(".button1")
                    .style("background-color", "lightgrey")



                  //hide all current points
                  d3.selectAll(".circle")
                    .style("opacity", "0")

                  priv.forEach(function(p) {
                    // change points color
                    d3.select("#" + p)
                      .style("opacity", "0.8")
                      .style("fill", "yellow")

                    //Change button color
                    d3.select("#private")
                      .style("background-color", "red")
                  })


                  console.log(priv);


                }); //end of selecting private button




                d3.select("#public")
                .on("click", function() {

                  //reset color to default
                  d3.selectAll(".button1")
                    .style("background-color", "lightgrey")

                  //hide all current points
                  d3.selectAll(".circle")
                    .style("opacity", "0")


                  public.forEach(function(p) {
                    // change points color
                    d3.select("#" + p)
                      .style("opacity", "0.8")
                      .style("fill", "yellow")

                    //Change button color
                    d3.select("#public")
                      .style("background-color", "red")
                  })

                  // console.log(public);

                }); //end of selecting public button


                d3.select("#urban")
                .on("click", function() {

                  //reset color to default
                  d3.selectAll(".button1")
                    .style("background-color", "lightgrey")

                  //hide all current points
                  d3.selectAll(".circle")
                    .style("opacity", "0")


                  public.forEach(function(p) {
                    // change points color
                    d3.select("#" + p)
                      .style("opacity", "0.8")
                      .style("fill", "yellow")

                    //Change button color
                    d3.select("#urban")
                      .style("background-color", "red")
                  })

                  // console.log(public);

                }); //end of selecting urban button








              }); //end of programs data
        }); //end of projection

    })(); //end of initial function
