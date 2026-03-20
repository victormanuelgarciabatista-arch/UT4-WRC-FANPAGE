import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const StatsChart = ({ data }) => {
    const svgRef = useRef();

    useEffect(() => {
        // Clear previous render
        d3.select(svgRef.current).selectAll("*").remove();

        const margin = { top: 20, right: 30, bottom: 40, left: 120 };
        const width = 600 - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;

        const svg = d3.select(svgRef.current)
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        // X axis (Wins)
        const x = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.wins) + 10])
            .range([0, width]);
        
        svg.append("g")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-45)")
            .style("text-anchor", "end");

        // Y axis (Drivers)
        const y = d3.scaleBand()
            .range([0, height])
            .domain(data.map(d => d.driver))
            .padding(.1);
            
        svg.append("g")
            .call(d3.axisLeft(y))
            .selectAll("text")
            .style("font-size", "12px")
            .style("font-weight", "bold");

        // Tooltip container (Optional but nice)
        const tooltip = d3.select(svgRef.current.parentNode)
            .append("div")
            .style("opacity", 0)
            .attr("class", "tooltip")
            .style("background-color", "white")
            .style("border", "solid")
            .style("border-width", "2px")
            .style("border-radius", "5px")
            .style("padding", "5px")
            .style("position", "absolute");

        // Bars
        svg.selectAll("myRect")
            .data(data)
            .join("rect")
            .attr("x", x(0) )
            .attr("y", d => y(d.driver))
            .attr("width", d => x(d.wins))
            .attr("height", y.bandwidth())
            .attr("fill", "#00529F") // Rally blue
            .on("mouseover", function(event, d) {
                d3.select(this).attr("fill", "#FFCC00"); // Hover yellow
            })
            .on("mouseleave", function(event, d) {
                d3.select(this).attr("fill", "#00529F"); 
            });

        // Bar labels (numbers)
        svg.selectAll("barLabels")
            .data(data)
            .join("text")
            .attr("x", d => x(d.wins) + 5)
            .attr("y", d => y(d.driver) + y.bandwidth() / 2 + 5)
            .text(d => d.wins)
            .attr("fill", "#333")
            .style("font-weight", "bold");

    }, [data]);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0', position: 'relative' }}>
            <svg ref={svgRef}></svg>
        </div>
    );
};

export default StatsChart;
