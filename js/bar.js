// data1's population is actual population
var data1 = [
{States:"Baden-Wurttemberg",Population:11148904,PatientInHospital:1944609, popHolder: 11148904},
{States:"Bavaria",Population:13203592,PatientInHospital:2659875, popHolder: 13203592},
{States:"Berlin",Population:3689708,PatientInHospital:782560, popHolder: 3689708},
{States:"Brandenburg",Population:2546685,PatientInHospital:474124, popHolder: 2546685},
{States:"Bremen",Population:663567,PatientInHospital:167169, popHolder: 663567},
{States:"Hamburg",Population:1904212,PatientInHospital:455391, popHolder: 1904212},
{States:"Hesse",Population:6313614,PatientInHospital:1244922, popHolder: 6313614},
{States:"LowerSaxony",Population:8045829,PatientInHospital:1534867, popHolder: 8045829},
{States:"MeckPomm",Population:1605259,PatientInHospital:370801, popHolder: 1605259},
{States:"NorthRhine-Westphalia",Population:17944923,PatientInHospital:4116280, popHolder: 17944923},
{States:"Rhineland-Palatinate",Population:4126872,PatientInHospital:834770, popHolder: 4126872},
{States:"Saarland",Population:1005796,PatientInHospital:243602, popHolder: 1005796},
{States:"Saxony",Population:4036369,PatientInHospital:854646, popHolder: 4036369},
{States:"Saxony-Anhalt",Population:2155742,PatientInHospital:487914, popHolder: 2155742},
{States:"Schleswig-Holstein",Population:2936486,PatientInHospital:529891, popHolder: 2936486},
{States:"Thuringia",Population:2099527,PatientInHospital:502651, popHolder: 2099527}
];

//data2's population is  patient in hospital
var data2= [
  {States:"Baden-Wurttemberg",Population:1944609, popHolder: 11148904},
  {States:"Bavaria",Population:2659875, popHolder: 13203592},
  {States:"Berlin",Population:782560, popHolder: 3689708},
  {States:"Brandenburg",Population:474124, popHolder: 2546685},
  {States:"Bremen",Population:167169, popHolder: 663567},
  {States:"Hamburg",Population:455391, popHolder: 1904212},
  {States:"Hesse",Population:1244922, popHolder: 6313614},
  {States:"LowerSaxony",Population:1534867, popHolder: 8045829},
  {States:"MeckPomm",Population:370801, popHolder: 1605259},
  {States:"NorthRhine-Westphalia",Population:4116280, popHolder: 17944923}, 
  {States:"Rhineland-Palatinate",Population:834770, popHolder: 4126872},
  {States:"Saarland",Population:243602, popHolder: 1005796},
  {States:"Saxony",Population:854646, popHolder: 4036369},
  {States:"Saxony-Anhalt",Population:487914, popHolder: 2155742},
  {States:"Schleswig-Holstein",Population:529891, popHolder: 2936486},
  {States:"Thuringia",Population:502651, popHolder: 2099527}
  ];

  let indicator = 1;

var margin = {top: 30, right: 30, bottom: 70, left: 60},
    width = 2000 - margin.left - margin.right,
    height = 1000 - margin.top - margin.bottom;

var svg = d3.select("#bar")
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

  var tooltip = d3.select("#bar")
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
    if (indicator == 1){
      tooltip
          .style("opacity", 1)
          .html("State: " + StateName + "<br>" + "Population: " + PopulationNum)
          .style("left", (d3.mouse(this)[0] + 70) + "px")
          .style("top", (d3.mouse(this)[1]) + "px");
      }
      else if (indicator == 2){
        tooltip
        .style("opacity", 1)
          .html("State: " + StateName + "<br>" + "Patient in Hospital: " + PopulationNum)
          .style("left", (d3.mouse(this)[0] + 70) + "px")
          .style("top", (d3.mouse(this)[1]) + "px");
      }
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

function PartupdateBarData(data,color, i) {

  y.domain([0, d3.max(data, d => d.popHolder)])
  var u = svg.selectAll("rect")
    .data(data)

    u.enter()
    .append("rect")
    .on("mouseover", mouseover)
    .on("mousemove", mousemove)
    .on("mouseleave", mouseleave)
    .merge(u)
    .transition()
    .duration(500)
    .attr("x", function(d) { return x(d.States); })
    .attr("y", function(d) { return y(d.Population); })
    .attr("height", function(d) { return height - y(d.Population); })
    .style("fill", color)
    .attr("stroke", "grey")
    .attr("stroke-width", "1.5px")

    indicator = i;
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
      .duration(500)
      .attr("x", function(d) { return x(d.States); })
      .attr("y", function(d) { return y(d.Population); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.Population); })
      .delay(function(d,i){console.log(i) ; return(i*50)})
      .style("fill", color)
      .attr("stroke", "grey")
      .attr("stroke-width", "1.5px")
  }

  updateBarData(data1,'#bf5858');

