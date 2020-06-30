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


promiseA = d3.csv("data/alphabet.csv") 
    .then(result => {
        test = result.sort((a, b) => b.value - a.value)
        return test; 
    })
    .then(function(data) {

        margin = ({top: 20, right: 0, bottom: 30, left: 40}) 
        height = 400
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
        return data
    })
    .then(function(data){
        elpepe = d3.select("body").append("svg")
        .attr("viewBox", [0, 0, width, height])
        .call(zoom);
    
        elpepe.append("g")
        .attr("class", "bars")
        .attr("fill", "white")
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
    }).catch(errorMessage => console.log(errorMessage));

// console.log(promiseC)
// data = d3.csvParse(csvfile, ({letter, frequency}) => 
// ({name: letter, value: +frequency})).sort((a, b) => b.value - a.value);

// console.log("\n\n\n")   







  
