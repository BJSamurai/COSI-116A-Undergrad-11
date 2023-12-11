var data1= [
    {States:"Alabama",Population:5024279},
    {States:"Alaska",Population:731158},
	{States:"Arizona",Population:7378491},
    {States:"Arkansas",Population:3024692},
    {States:"California",Population:39512223},
    {States:"Colorado",Population:5758736},
    {States:"Connecticut",Population:3565287},
    {States:"Delaware",Population:973764},
    {States:"Florida",Population:21477737},
    {States:"Georgia",Population:10617423},
    {States:"Hawaii",Population:1415872}, 
    {States:"Idaho",Population:1787065},
    {States:"Illinois",Population:12671821},
    {States:"Indiana",Population:6732219},
    {States:"Iowa",Population:3155070},
    {States:"Kansas",Population:2913314},
    {States:"Kentucky",Population:4467673},
	{States:"Louisiana",Population:4648794},
	{States:"Maine",Population:1344212},
	{States:"Maryland",Population:6045680},
	{States:"Massachusetts",Population:6892503},
	{States:"Michigan",Population:10045029},
	{States:"Minnesota",Population:5639632},
	{States:"Mississippi",Population:2976149},
	{States:"Missouri",Population:6137428},
	{States:"Montana",Population:1068778},
	{States:"Nebraska",Population:1934408},
	{States:"Nevada",Population:3155070},
	{States:"New Hampshire",Population:1359711},
	{States:"New Jersey",Population:8882190},
	{States:"New Mexico",Population:2096829},
	{States:"New York",Population:19453561},
	{States:"North Carolina",Population:10488084},
	{States:"North Dakota",Population:762062},
	{States:"Ohio",Population:11689100},
	{States:"Oklahoma",Population:3956971},
	{States:"Oregon",Population:4217737},
	{States:"Pennsylvania",Population:12801989},
	{States:"Rhode Island",Population:1059361},
	{States:"South Carolina",Population:5148714},
	{States:"South Dakota",Population:884659},
	{States:"Tennessee",Population:6829174},
	{States:"Texas",Population:28995881},
	{States:"Utah",Population:3205958},
	{States:"Vermont",Population:8535519},
	{States:"Virginia",Population:502651},
	{States:"Washington",Population:7614893},
	{States:"West Virginia",Population:1792147},
	{States:"Wisconsin",Population:5822434},
	{States:"Wyoming",Population:578759}
    ];
# https://www.ahd.com/state_statistics.html

var data2= [
    {States:"Alabama",Population:5024279,PatientInHospital:268332},
    {States:"Alaska",Population:731158,PatientInHospital:2840210},
	{States:"Arizona",Population:7378491,PatientInHospital:2947182},
    {States:"Arkansas",Population:3024692,PatientInHospital:1460895},
    {States:"California",Population:39512223,PatientInHospital:15165283},
    {States:"Colorado",Population:5758736,PatientInHospital:972907},
    {States:"Connecticut",Population:3565287,PatientInHospital:1815725},
    {States:"Delaware",Population:973764,PatientInHospital:567,555},
    {States:"Florida",Population:21477737,PatientInHospital:12807644},
    {States:"Georgia",Population:10617423,PatientInHospital:5158604},
    {States:"Hawaii",Population:1415872,PatientInHospital:540167}, 
    {States:"Idaho",Population:1787065,PatientInHospital:533269},
    {States:"Illinois",Population:12671821,PatientInHospital:5808174},
    {States:"Indiana",Population:6732219,PatientInHospital:3274050},
    {States:"Iowa",Population:3155070,PatientInHospital:1230728},
    {States:"Kansas",Population:2913314,PatientInHospital:1207621},
    {States:"Kentucky",Population:4467673,PatientInHospital:2659947},
	{States:"Louisiana",Population:4648794,PatientInHospital:2414423},
	{States:"Maine",Population:1344212,PatientInHospital:594970},
	{States:"Maryland",Population:6045680,PatientInHospital:2805111},
	{States:"Massachusetts",Population:6892503,PatientInHospital:3670937},
	{States:"Michigan",Population:10045029,PatientInHospital:4764339},
	{States:"Minnesota",Population:5639632,PatientInHospital:2305443},
	{States:"Mississippi",Population:2976149,PatientInHospital:1442101},
	{States:"Missouri",Population:6137428,PatientInHospital:3420411},
	{States:"Montana",Population:1068778,PatientInHospital:400212},
	{States:"Nebraska",Population:1934408,PatientInHospital:837035},
	{States:"Nevada",Population:3155070,PatientInHospital:1599975},
	{States:"New Hampshire",Population:1359711,PatientInHospital:541075},
	{States:"New Jersey",Population:8882190,PatientInHospital:4367491},
	{States:"New Mexico",Population:2096829,PatientInHospital:829205},
	{States:"New York",Population:19453561,PatientInHospital:11946645},
	{States:"North Carolina",Population:10488084,PatientInHospital:5256731},
	{States:"North Dakota",Population:762062,PatientInHospital:372056},
	{States:"Ohio",Population:11689100,PatientInHospital:5747867},
	{States:"Oklahoma",Population:3956971,PatientInHospital:1917357},
	{States:"Oregon",Population:4217737,PatientInHospital:1563928},
	{States:"Pennsylvania",Population:12801989,PatientInHospital:7217096},
	{States:"Rhode Island",Population:1059361,PatientInHospital:488908},
	{States:"South Carolina",Population:5148714,PatientInHospital:2490368},
	{States:"South Dakota",Population:884659,PatientInHospital:420830},
	{States:"Tennessee",Population:6829174,PatientInHospital:4182394},
	{States:"Texas",Population:28995881,PatientInHospital:13362245},
	{States:"Utah",Population:3205958,PatientInHospital:889849},
	{States:"Vermont",Population:8535519,PatientInHospital:215843},
	{States:"Virginia",Population:502651,PatientInHospital:3633431},
	{States:"Washington",Population:7614893,PatientInHospital:2807074},
	{States:"West Virginia",Population:1792147,PatientInHospital:1055063},
	{States:"Wisconsin",Population:5822434,PatientInHospital:2330234},
	{States:"Wyoming",Population:578759,PatientInHospital:122100}
    ];

var margin = {top: 30, right: 30, bottom: 70, left: 60},
    width = 2000 - margin.left - margin.right,
    height = 1000 - margin.top - margin.bottom;

var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

var x = d3.scaleBand()
  .range([ 0, width ])
  .domain(data1.map(function(d) { return d.States; }))
  .padding(0.2);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))

var y = d3.scaleLinear()
  .domain([0, d3.max(data1, d => d.Population)])
  .range([ height, 0]);
svg.append("g")
  .call(d3.axisLeft(y));

  var tooltip = d3.select("#my_dataviz")
  .append("div")
  .style("opacity", 0)
  .attr("class", "tooltip")
  .style("background-color", "white")
  .style("border", "solid")
  .style("border-width", "1px")
  .style("border-radius", "5px")
  .style("padding", "10px");

  var mouseover = function(d) {
    
    var StateName = d.States;
    var PopulationNum = d.Population;
    tooltip
        .style("opacity", 1)
        .html("State: " + StateName + "<br>" + "Population: " + PopulationNum)
        .style("left", (d3.mouse(this)[0] + 70) + "px")
        .style("top", (d3.mouse(this)[1]) + "px");
};

// Revised mousemove function
var mousemove = function(d) {
    tooltip
        .style("left", (d3.mouse(this)[0] + 90) + "px")
        .style("top", (d3.mouse(this)[1]) + "px");
};

// Revised mouseout function (if not already implemented)
var mouseleave = function(d) {
  tooltip
    .style("opacity", 0)
}


  function updateBarDataUS(data,color) {
    var u = svg.selectAll("rect")
      .data(data)
  
      u.enter()
      .append("rect")
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave)
      .merge(u)
      .transition()
      .duration(1000)
      .attr("x", function(d) { return x(d.States); })
      .attr("y", function(d) { return y(d.Population); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.Population); })
      .delay(function(d,i){console.log(i) ; return(i*50)})
      .style("fill", color)
      .attr("stroke", "grey")
      .attr("stroke-width", "1.5px")
  }

  updateBarData(data1,'#993300');

 //////////////////////////// 2nd Bar Chart ////////////////////////////

//  d3.json("data/GermanyLander.json", (json) => {
//     // Transform the loaded data into the format expected by the bar chart
//      data1 = json.map(d => ({group: d.States, value: d.Population}));
//      data2 = json.map(d => ({group: d.States, value: d.PatientInHospital}));

//     // set the dimensions and margins of the graph
//     var margin = {top: 30, right: 30, bottom: 70, left: 60},
//         width = 2000 - margin.left - margin.right,
//         height = 1000 - margin.top - margin.bottom;

//     // append the svg object to the body of the page
//     var svg = d3.select("#my_dataviz")
//         .append("svg")
//         .attr("width", width + margin.left + margin.right)
//         .attr("height", height + margin.top + margin.bottom)
//         .append("g")
//         .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//     // X axis
//     var x = d3.scaleBand()
//         .range([ 0, width ])
//         .domain(data1.map(function(d) { return d.group; }))
//         .padding(0.2);
//     svg.append("g")
//         .attr("transform", "translate(0," + height + ")")
//         .call(d3.axisBottom(x))

//     // Add Y axis
//     var y = d3.scaleLinear()
//         .domain([0, d3.max(data1, d => d.value)])  // Update the domain to match the data
//         .range([ height, 0]);
//     svg.append("g")
//         .attr("class", "myYaxis")
//         .call(d3.axisLeft(y));

//     var tooltip = d3.select("body")
//     .append("div")
//     .style("position", "absolute")
//     .style("visibility", "hidden")
//     .style("background", "lightgrey")
//     .style("border", "solid")
//     .style("border-width", "1px")
//     .style("border-radius", "5px")
//     .style("padding", "10px");

//     // A function that create / update the plot for a given variable:
//     function updateBar(data) {
//         var u = svg.selectAll("rect")
//             .data(data)

//         u
//             .enter()
//             .append("rect")
//             .merge(u)
//             .transition()
//             .duration(1000)
//             .attr("x", function(d) { return x(d.group); })
//             .attr("y", function(d) { return y(d.value); })
//             .attr("width", x.bandwidth())
//             .attr("height", function(d) { return height - y(d.value); })
//             .attr("fill", "#69b3a2")
//             .append("title")  // Append a title to each bar
//             .text(function(d) { return d.group + ": " + d.value; });  // The text of the title is the group and value

//             u.exit().remove();
//     }

//     // document.getElementById('button1').addEventListener('click', function(event) {
//     //     updateBar(data1);
//     // });
    
//     // document.getElementById('button2').addEventListener('click', function(event) {
//     //     updateBar(data2);
//     // });

//     // Initialize the plot with the first dataset
//     updateBar(data1);
// });


