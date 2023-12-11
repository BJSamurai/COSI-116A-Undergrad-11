var data2= [
    {States:"Baden-Wurttemberg",Population:1944609},
    {States:"Bavaria",Population:2659875},
    {States:"Berlin",Population:782560},
    {States:"Brandenburg",Population:474124},
    {States:"Bremen",Population:167169},
    {States:"Hamburg",Population:455391},
    {States:"Hesse",Population:1244922},
    {States:"LowerSaxony",Population:1534867},
    {States:"MeckPomm",Population:370801},
    {States:"NorthRhine-Westphalia",Population:4116280}, 
    {States:"Rhineland-Palatinate",Population:834770},
    {States:"Saarland",Population:243602},
    {States:"Saxony",Population:854646},
    {States:"Saxony-Anhalt",Population:487914},
    {States:"Schleswig-Holstein",Population:529891},
    {States:"Thuringia",Population:502651}
    ];

var data1 = [
{States:"Baden-Wurttemberg",Population:11148904,PatientInHospital:1944609},
{States:"Bavaria",Population:13203592,PatientInHospital:2659875},
{States:"Berlin",Population:3689708,PatientInHospital:782560},
{States:"Brandenburg",Population:2546685,PatientInHospital:474124},
{States:"Bremen",Population:663567,PatientInHospital:167169},
{States:"Hamburg",Population:1904212,PatientInHospital:455391},
{States:"Hesse",Population:6313614,PatientInHospital:1244922},
{States:"LowerSaxony",Population:8045829,PatientInHospital:1534867},
{States:"MeckPomm",Population:1605259,PatientInHospital:370801},
{States:"NorthRhine-Westphalia",Population:17944923,PatientInHospital:4116280}, 
{States:"Rhineland-Palatinate",Population:4126872,PatientInHospital:834770},
{States:"Saarland",Population:1005796,PatientInHospital:243602},
{States:"Saxony",Population:4036369,PatientInHospital:854646},
{States:"Saxony-Anhalt",Population:2155742,PatientInHospital:487914},
{States:"Schleswig-Holstein",Population:2936486,PatientInHospital:529891},
{States:"Thuringia",Population:2099527,PatientInHospital:502651}
];

var dataus1 = [
States:"
]

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


  function updateBarData(data,color) {
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


