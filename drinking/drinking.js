// tea //

var tdata = [
	0, 0, 0, 1, 0, 0, 1,
	0, 1, 2, 0, 0, 0, 0,
	0, 0, 0, 0, 1, 0, 0,
	0, 0, 1, 0, 0, 0, 1,
	0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 1, 4, 1,
	0, 0, 1, 0, 0, 0, 1,
	0, 0, 0, 0, 0, 0, 3,
	0, 0, 0, 1, 0, 0, 0,
	0, 1, 0, 0, 0, 0, 1,
	0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 4, 0, 0, 0,
	3, 0, 0, 2, 5, 1, 0,
	1, 3, 0, 0, 0, 1, 0,
	0, 0, 0, 1, 0, 4, 0,
	0, 0, 3, 2, 0, 1, 1,
	0, 4, 2, 0, 0, 0, 0,
	0, 0, 1, 3, 1, 0, 1,
	0, 0, 0, 0, 0, 0, 0,
	0, 3, 0, 0, 0, 4, 1,
	0, 1, 3, 0, 0, 0, 0,
	3, 0, 0, 0, 0, 1, 0,
	1, 3, 3, 0, 0, 0, 0,
	0, 0, 0, 1, 0, 6, 0,
	0, 0, 3, 0, 0, 0, 1,
	0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 1, 0, 1, 0,
	0, 0, 0, 0, 0, 0, 1,
	0, 0, 0, 0, 0, 0, 0,
	0, 2, 0, 0, 0, 0, 0,
	0, 3, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 1, 0, 0,
	0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 1,
	0, 0, 0, 0, 0, 1, 0,
	0, 1, 0, 0, 2, 0, 0,
	0, 0, 2, 1, 0, 0, 0,
	0, 0, 3, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 1,
	0, 0, 0, 0, 0, 0, 0,
	0, 1, 0, 0, 0, 0, 1,
	0, 0, 0, 0, 0, 2, 0,
	0, 0, 0, 0, 0, 1, 0,
	0, 0, 0, 0, 0, 0, 0,
	0, 1, 0, 1, 0, 0, 1,
	0, 0, 0, 0, 0, 4, 0,
	0, 0, 0, 1, 3, 0, 0,
	0, 1, 0, 0, 1, 4, 1,
	0, 0, 1, 0, 0, 0, 0,
	1, 3, 5, 1, 0, 2, 0,
	0, 1, 0, 4, 0, 0, 1,
	0, 2, 0, 1, 0, 0, 0,
	0, 1, 0, 0, 0, 1, 0,
	0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 1, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 1, 0, 6, 1,
	1, 0, 0, 0, 0, 0, 0,
	0, 0, 6, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0,
	0, 0, 1, 0, 0, 4, 0,
	0, 0, 0, 1, 0, 0, 1,
	0, 0, 0, 0, 0, 0, 0,
	0, 0, 1, 1, 0, 3, 0,
	0, 3, 0, 0, 0, 0, 0,
	0, 0, 0, 1, 0, 0, 0,
	2, 0, 0, 1, 0, 0, 0
];

var theight = 800;
var tbarWidth = 3;

var tscale = d3.scale.linear().domain([0, d3.max(tdata)]).range([0, theight]);

var tchart = d3.select('#tchart').attr('width', tbarWidth * tdata.length).attr('height', theight);

var tbar = tchart.selectAll('g').data(tdata).enter().append('g').attr('transform', function (d, i) {
  return 'translate(' + (i * tbarWidth + tbarWidth) + ', ' + theight + ') rotate(180)';
}).attr('fill', function (d, i) {
	return 'rgba(10,200,120,0.8)';
});

tbar.append('rect').attr('width', tbarWidth - 2).attr('height', tscale);


// latte //

var data = [
	1, 1, 1, 2, 0, 1, 1,
	0, 3, 1, 2, 1, 4, 2,
	1, 2, 3, 1, 1, 0, 0,
	4, 1, 0, 0, 2, 4, 2,
	0, 1, 2, 2, 1, 2, 2,
	1, 1, 0, 0, 1, 0, 3,
	1, 0, 3, 2, 0, 1, 0,
	0, 2, 1, 2, 1, 1, 2,
	2, 1, 1, 2, 1, 1, 0,
	3, 2, 1, 2, 0, 2, 1,
	2, 3, 5, 2, 1, 2, 0,
	0, 0, 1, 2, 0, 4, 0,
	2, 2, 3, 0, 1, 2, 2,
	1, 1, 0, 0, 2, 1, 2,
	0, 1, 2, 2, 1, 2, 2,
	1, 1, 0, 0, 1, 0, 2,
	1, 0, 3, 2, 0, 1, 0,
	2, 3, 5, 2, 1, 2, 0,
	1, 3, 1, 5, 0, 1, 2,
	0, 2, 1, 2, 1, 1, 2,
	1, 2, 2, 2, 0, 2, 1,
	1, 1, 1, 2, 0, 1, 0,
	0, 0, 1, 2, 0, 2, 0,
	1, 1, 1, 2, 0, 1, 1,
	0, 3, 1, 2, 1, 6, 2,
	2, 1, 3, 2, 1, 1, 0,
	1, 1, 4, 0, 1, 1, 0,
	1, 0, 3, 2, 0, 1, 0,
	1, 4, 3, 1, 1, 0, 1,
	0, 1, 0, 0, 1, 2, 1,
	0, 0, 1, 1, 0, 1, 0,
	1, 2, 1, 2, 1, 1, 2,
	2, 1, 1, 0, 1, 4, 0,
	2, 2, 1, 2, 3, 2, 1,
	1, 2, 0, 0, 2, 5, 2,
	0, 1, 2, 2, 1, 2, 2,
	1, 1, 0, 0, 1, 0, 2,
	1, 0, 0, 2, 0, 1, 0,
	0, 2, 1, 2, 1, 1, 2,
	1, 1, 0, 0, 2, 4, 2,
	0, 1, 2, 2, 1, 2, 2,
	1, 1, 0, 0, 1, 0, 2,
	1, 0, 1, 2, 0, 1, 0,
	1, 2, 1, 2, 1, 1, 2,
	2, 1, 1, 0, 1, 4, 0,
	2, 2, 1, 2, 3, 2, 1,
	2, 3, 5, 2, 1, 2, 0,
	0, 2, 1, 4, 0, 1, 2,
	1, 3, 2, 2, 0, 2, 1,
	1, 1, 1, 2, 0, 1, 0,
	0, 0, 1, 2, 0, 4, 0,
	0, 0, 1, 2, 1, 1, 2,
	1, 1, 0, 0, 2, 4, 2,
	0, 6, 2, 2, 1, 3, 2,
	1, 3, 0, 0, 1, 0, 2,
	1, 1, 1, 2, 0, 1, 1,
	1, 1, 1, 2, 0, 1, 1,
	0, 3, 1, 2, 1, 4, 2,
	1, 2, 3, 4, 1, 0, 0,
	1, 1, 0, 0, 2, 4, 2,
	0, 1, 2, 2, 1, 2, 2,
	1, 1, 0, 0, 1, 0, 2,
	2, 1, 1, 3, 1, 1, 0,
	3, 2, 1, 2, 5, 2, 1,
	2, 3, 5, 2, 1, 2, 0,
	2, 0, 1, 2, 0, 4, 0,
	0, 2, 3, 4, 1, 2, 2,
	1, 2, 3, 2, 0, 2, 1,
	1, 1, 2, 3, 2, 1, 2
];

var height = 800;
var barWidth = 3;

var scale = d3.scale.linear().domain([0, d3.max(data)]).range([0, height]);

var chart = d3.select('#chart').attr('width', barWidth * data.length).attr('height', height);

var bar = chart.selectAll('g').data(data).enter().append('g').attr('transform', function (d, i) {
  return 'translate(' + (i * barWidth + barWidth) + ', ' + height + ') rotate(180)';
}).attr('fill', function (d, i) {
	return 'rgba(195,155,110,0.8)';
});

bar.append('rect').attr('width', barWidth - 2).attr('height', scale);
