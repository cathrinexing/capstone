var width = 900,
	height = 400,
	radius = 10;
  var circ;

var svg = d3.select('#beeswarm').append('svg')
			.attr('width', width)
			.attr('height', height)

var div = d3.select("body").append("div")
		.attr("class", "tooltip")
		.style("opacity", 0);


svg.append("line", 'svg')
	.classed('main_line', true)
	.attr("x1", 0)
	.attr("y1", height/2)
	.attr("x2", width)
	.attr("y2", height/2)
	.attr("stroke-width", 1.5)
	.attr("stroke", "#A3A0A6");

	svg.append("g")
			.attr("class", "axis axis--x")
			.attr("x1", 0)
			.attr("y1", height/2)
			.attr("x2", width)
			.attr("y2", height/2)
			// .attr("transform", "translate(0," + height + ")")


var x = d3.scaleLinear()
			.range([0, width])
			.domain([0, 120000]);


var data_set = 'one';




d3.json('data/beeswarm3.json', function(data){


	console.log(data);



	function tick(){

		d3.selectAll('.circ')
			.attr('cx', function(d){return d.x})
			.attr('cy', function(d){return d.y})

	}



	svg.selectAll('.circ')
		.data(data)
		.enter().append('circle').classed('circ', true)
		.attr('r', radius)
		.attr('cx', function(d){return x(d[data_set]);})
		.attr('cy', function(){return height/2;})
		.on('click', function(){
			var circ = d3.select(this);

			circ.style('stroke', '#56C6D8')
				.style('stroke-width', 3)
		})



		.on("mouseover", function(d) {
			div.transition()
				.duration(200)
				.style("opacity", .9);

			div.html(d.id + " Instate"+d.one+"outstate"+d.two)
				.style("left", (d3.event.pageX) + "px")
				.style("top", (d3.event.pageY - 28) + "px");
		})


		.on("mouseout", function(d) {
			div.transition()
				.duration(500)
				.style("opacity", 0);
		});




	var simulation = d3.forceSimulation(data)
		.force('x', d3.forceX(function(d){
				return x(d[data_set])
			}).strength(0.99)
		)
		.force('y', d3.forceY(height/2).strength(0.05))
		.force('collide', d3.forceCollide(radius))
		.alphaDecay(0)
		.alpha(0.12)
		.on('tick', tick)




	var init_decay;
	init_decay = setTimeout(function(){
		console.log('init alpha decay')
		simulation.alphaDecay(0.1);
	}, 4000);

	var buttons = d3.select('#beeswarm').append('div');
	buttons.append('button').text('In-State').attr('value', 'one').classed('d_sel', true)
	buttons.append('button').text('Out of State').attr('value', 'two').classed('d_sel', true)



	d3.selectAll('.d_sel').on('click', function(){

		data_set = this.value;

		console.log(data_set)



		// .on("mouseover", function(d) {
		// 	div.transition()
		// 		.duration(200)
		// 		.style("opacity", .9);
		//
		// 	div.html(d.id + " ")
		// 		.style("left", (d3.event.pageX) + "px")
		// 		.style("top", (d3.event.pageY - 28) + "px");
		// })
		//
		//
		// .on("mouseout", function(d) {
		// 	div.transition()
		// 		.duration(500)
		// 		.style("opacity", 0);
		// });


		simulation.force('x', d3.forceX(function(d){
			return x(d[data_set])
		}))

		simulation
			.alphaDecay(0)
			.alpha(0.12)
			.restart()

		clearTimeout(init_decay);

		init_decay = setTimeout(function(){
			console.log('init alpha decay');
			simulation.alphaDecay(0.1);
		}, 8000);
	})





})
