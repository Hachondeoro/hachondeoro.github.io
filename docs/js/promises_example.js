csvfile = `letter,frequency
A,0.08167
B,0.01492
C,0.02782
D,0.04253
E,0.12702
F,0.02288
G,0.02015
H,0.06094
I,0.06966
J,0.00153
K,0.00772
L,0.04025
M,0.02406
N,0.06749
O,0.07507
P,0.01929
Q,0.00095
R,0.05987
S,0.06327
T,0.09056
U,0.02758
V,0.00978
W,0.0236
X,0.0015
Y,0.01974
Z,0.00074`


margin = ({top: 20, right: 0, bottom: 30, left: 40}) 
height = 200
width = 500
yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    .call(g => g.select(".domain").remove())

xAxis = g => g
.attr("transform", `translate(0,${height - margin.bottom})`)
.call(d3.axisBottom(x).tickSizeOuter(0))

y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)]).nice()
    .range([height - margin.bottom, margin.top])

x = d3.scaleBand()
.domain(data.map(d => d.name))
.range([margin.left, width - margin.right])
.padding(0.1)

function zoom(svg) {
    const extent = [[margin.left, margin.top], [width - margin.right, height - margin.top]];
  
    svg.call(d3.zoom()
        .scaleExtent([1, 8])
        .translateExtent(extent)
        .extent(extent)
        .on("zoom", zoomed));
  
    function zoomed() {
      x.range([margin.left, width - margin.right].map(d => d3.event.transform.applyX(d)));
      svg.selectAll(".bars rect").attr("x", d => x(d.name)).attr("width", x.bandwidth());
      svg.selectAll(".x-axis").call(xAxis);
    }
}


const elpepe = d3.select("body").append("svg")
    .attr("viewBox", [0, 0, width, height])
    .call(zoom);

elpepe.append("g")
    .attr("class", "bars")
    .attr("fill", "steelblue")
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("x", d => x(d.name))
    .attr("y", d => y(d.value))
    .attr("height", d => y(0) - y(d.value))
    .attr("width", x.bandwidth());

elpepe.append("g")
    .attr("class", "x-axis")
    .call(xAxis);

elpepe.append("g")
    .attr("class", "y-axis")
    .call(yAxis);

