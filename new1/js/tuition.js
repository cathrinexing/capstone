var width = 900,
  height = 350,
  radius = 13;
var circ;

var svg = d3.select('#beeswarm').append('svg')
  .attr('width', width)
  .attr('height', height)

var div = d3.select("body").append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);


// svg.append("line", 'svg')
// 	.classed('main_line', true)
// 	.attr("x1", 0)
// 	.attr("y1", height/2)
// 	.attr("x2", width)
// 	.attr("y2", height/2)
// 	.attr("stroke-width", 1.5)
// 	.attr("stroke", "#A3A0A6");



// var scale = d3.scaleLinear()
//                 .domain([d3.min(data), d3.max(data)])
//                 .range([height/2, 0]);



var x = d3.scaleLinear()
  .range([100, width * 0.95])
  .domain([0, 120000]);


var data_set = 'one';

d3.json('data/tuition.json', function(data) {


  // console.log(data);


  function tick() {

    d3.selectAll('.circ')
      .attr('cx', function(d) {
        return d.x
      })
      .attr('cy', function(d) {
        return d.y
      })

  }



  svg.selectAll('.circ')
    .data(data)
    .enter().append('circle').classed('circ', true)
    .attr('r', radius)
    .attr('cx', function(d) {
      return x(d[data_set]);
    })
    .attr('cy', function() {
      return height / 2;
    })
    .on('click', function() {
      var circ = d3.select(this);

      circ.style('stroke', '#56C6D8')
        .style('stroke-width', 2)
    })



    .on("mouseover", function(d) {
      div.transition()
        .duration(200)
        .style("opacity", .9);

      div.html(d.id + "<br>"+d.major+"<br>" + "Instate" + d.one)
        .style("left", (d3.event.pageX) + "px")
        .style("top", (d3.event.pageY - 28) + "px");
    })


    .on("mouseout", function(d) {
      div.transition()
        .duration(500)
        .style("opacity", 0);

    });




  var simulation = d3.forceSimulation(data)
    .force('x', d3.forceX(function(d) {
      return x(d[data_set])
    }).strength(0.99))
    .force('y', d3.forceY(height / 2).strength(0.05))
    .force('collide', d3.forceCollide(radius))
    .alphaDecay(0)
    .alpha(0.12)
    .on('tick', tick)

  //add scalebar
  for (var i = 0; i < 120; ++i) simulation.tick();

  svg.append("g")
    .attr("class", "axis axis--x")
    .attr("transform", "translate(0,-1)")
    .call(d3.axisBottom(x).ticks(6, ".0s"))


  svg.append("g")
    .attr("class", "axis axis--x")
    .attr("transform", "translate(0,350)")
    .call(d3.axisTop(x).ticks(6, ".0s"))

  //init
  var init_decay;
  init_decay = setTimeout(function() {
    // console.log('init alpha decay')
    simulation.alphaDecay(0.1);
  }, 1000);

  var buttons = d3.select('#beeswarm').append('div');
  buttons.append('button').text('In-State').attr('value', 'one').classed('d_sel', true).attr("id", "instate")
  buttons.append('button').text('Out of State').attr('value', 'two').classed('d_sel', true).attr("id", "outstate")



  d3.selectAll('.d_sel').on('click', function() {

    data_set = this.value;

    console.log(data_set);

    d3.selectAll("button")
      .style("background-color", "#BE6A64")

    if (this.value == 'one') {

      d3.selectAll("#instate")
        .style("background-color", "#BE6A64")

      d3.selectAll('.circ')
        .on("mouseover", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 0);

            div.html("");
        })

      d3.selectAll('.circ')
        .on("mouseover", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", .9);

          div.html("<div class='tooltiptitle'>"+d.id + "</div>" +d.major+"<br>" + "Instate" + d.one)
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 28) + "px");
        })


        .on("mouseout", function(d) {
          div.transition()
            .duration(500)
            .style("opacity", 0);
        })
    }

    if (this.value == 'two') {
      d3.selectAll("#outstate")
        .style("background-color", "#BE6A64");

      d3.selectAll('.circ')
        .on("mouseover", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 0);

          div.html("");
        })

      d3.selectAll('.circ')
        .on("mouseover", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", .9);

          div.html(d.id + "<br>" +d.major+"<br>" + "Outstate" + d.two)
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 28) + "px");
        })


        .on("mouseout", function(d) {
          div.transition()
            .duration(500)
            .style("opacity", 0);
        })
    }




    //
    // d3.select("this.button")
    // .style("background-color","red")



    simulation.force('x', d3.forceX(function(d) {
      return x(d[data_set])
    }))

    simulation
      .alphaDecay(0)
      .alpha(0.12)
      .restart()

    clearTimeout(init_decay);

    init_decay = setTimeout(function() {
      console.log('init alpha decay');
      simulation.alphaDecay(0.1);
    }, 8000);
  }) //end of onclick function



}) //end of loading json dataset
