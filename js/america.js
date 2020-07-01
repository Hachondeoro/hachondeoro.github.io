path = d3.geoPath()
us = d3.json("data/states-albers-10m.json")
.then(function(us){ 
    const width = 975;
    const height = 610;
    // const zoom = d3.zoom()
    //     .scaleExtent([1, 8])
    //     .on("zoom", zoomed);

    
    const svg = d3.select("#zawarudo").append("svg")
        .attr("viewBox", [0, 0, width, height])
        .on("click", reset);

    const g = svg.append("g");

    g.append("g")
        .attr("fill", "steelblue")
        .attr("cursor", "pointer")
        .selectAll("path")
        .data(topojson.feature(us, us.objects.states).features)
        .join("path")
        .on("click", clicked)
        .attr("d", path)
        .append("title")
        .text(d => d.properties.name);

    g.append("path")
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-linejoin", "round")
        .attr("d", path(topojson.mesh(us, us.objects.states, (a, b) => a !== b)));

    svg.call(zoom);

    function reset() {
        svg.transition().duration(750).call(
        zoom.transform,
        d3.zoomIdentity,
        d3.zoomTransform(svg.node()).invert([width / 2, height / 2])
        );
    }

    function clicked(d) {
        const [[x0, y0], [x1, y1]] = path.bounds(d);
        d3.event.stopPropagation();
        svg.transition().duration(750).call(
        zoom.transform,
        d3.zoomIdentity
            .translate(width / 2, height / 2)
            .scale(Math.min(8, 0.9 / Math.max((x1 - x0) / width, (y1 - y0) / height)))
            .translate(-(x0 + x1) / 2, -(y0 + y1) / 2),
        d3.mouse(svg.node())
        );
    }

    function zoomed() {
        const {transform} = d3.event;
        g.attr("transform", transform);
        g.attr("stroke-width", 1 / transform.k);
    }

    return svg.node();
})