/*global nerves*/

// var adjacencyList = { 1: [ '2', '5', '3' ], 2: [ '3' ], 5: [ '3' ], 4: [ '5', '6', '3' ], 3: [], 6: []};



var lesMisLinks = [
    {"source":1,"target":0,"value":1},
    {"source":2,"target":0,"value":8},
    {"source":3,"target":0,"value":10},
    {"source":3,"target":2,"value":6},
    {"source":4,"target":0,"value":1},
    {"source":5,"target":0,"value":1},
    {"source":6,"target":0,"value":1},
    {"source":7,"target":0,"value":1},
    {"source":8,"target":0,"value":2},
    {"source":9,"target":0,"value":1},
    {"source":11,"target":10,"value":1},
    {"source":11,"target":3,"value":3},
    {"source":11,"target":2,"value":3},
    {"source":11,"target":0,"value":5},
    {"source":12,"target":11,"value":1},
    {"source":13,"target":11,"value":1},
    {"source":14,"target":11,"value":1},
    {"source":15,"target":11,"value":1},
    {"source":17,"target":16,"value":4},
    {"source":18,"target":16,"value":4},
    {"source":18,"target":17,"value":4},
    {"source":19,"target":16,"value":4},
    {"source":19,"target":17,"value":4},
    {"source":19,"target":18,"value":4},
    {"source":20,"target":16,"value":3},
    {"source":20,"target":17,"value":3},
    {"source":20,"target":18,"value":3},
    {"source":20,"target":19,"value":4},
    {"source":21,"target":16,"value":3},
    {"source":21,"target":17,"value":3},
    {"source":21,"target":18,"value":3},
    {"source":21,"target":19,"value":3},
    {"source":21,"target":20,"value":5},
    {"source":22,"target":16,"value":3},
    {"source":22,"target":17,"value":3},
    {"source":22,"target":18,"value":3},
    {"source":22,"target":19,"value":3},
    {"source":22,"target":20,"value":4},
    {"source":22,"target":21,"value":4},
    {"source":23,"target":16,"value":3},
    {"source":23,"target":17,"value":3},
    {"source":23,"target":18,"value":3},
    {"source":23,"target":19,"value":3},
    {"source":23,"target":20,"value":4},
    {"source":23,"target":21,"value":4},
    {"source":23,"target":22,"value":4},
    {"source":23,"target":12,"value":2},
    {"source":23,"target":11,"value":9},
    {"source":24,"target":23,"value":2},
    {"source":24,"target":11,"value":7},
    {"source":25,"target":24,"value":13},
    {"source":25,"target":23,"value":1},
    {"source":25,"target":11,"value":12},
    {"source":26,"target":24,"value":4},
    {"source":26,"target":11,"value":31},
    {"source":26,"target":16,"value":1},
    {"source":26,"target":25,"value":1},
    {"source":27,"target":11,"value":17},
    {"source":27,"target":23,"value":5},
    {"source":27,"target":25,"value":5},
    {"source":27,"target":24,"value":1},
    {"source":27,"target":26,"value":1},
    {"source":28,"target":11,"value":8},
    {"source":28,"target":27,"value":1},
    {"source":29,"target":23,"value":1},
    {"source":29,"target":27,"value":1},
    {"source":29,"target":11,"value":2},
    {"source":30,"target":23,"value":1},
    {"source":31,"target":30,"value":2},
    {"source":31,"target":11,"value":3},
    {"source":31,"target":23,"value":2},
    {"source":31,"target":27,"value":1},
    {"source":32,"target":11,"value":1},
    {"source":33,"target":11,"value":2},
    {"source":33,"target":27,"value":1},
    {"source":34,"target":11,"value":3},
    {"source":34,"target":29,"value":2},
    {"source":35,"target":11,"value":3},
    {"source":35,"target":34,"value":3},
    {"source":35,"target":29,"value":2},
    {"source":36,"target":34,"value":2},
    {"source":36,"target":35,"value":2},
    {"source":36,"target":11,"value":2},
    {"source":36,"target":29,"value":1},
    {"source":37,"target":34,"value":2},
    {"source":37,"target":35,"value":2},
    {"source":37,"target":36,"value":2},
    {"source":37,"target":11,"value":2},
    {"source":37,"target":29,"value":1},
    {"source":38,"target":34,"value":2},
    {"source":38,"target":35,"value":2},
    {"source":38,"target":36,"value":2},
    {"source":38,"target":37,"value":2},
    {"source":38,"target":11,"value":2},
    {"source":38,"target":29,"value":1},
    {"source":39,"target":25,"value":1},
    {"source":40,"target":25,"value":1},
    {"source":41,"target":24,"value":2},
    {"source":41,"target":25,"value":3},
    {"source":42,"target":41,"value":2},
    {"source":42,"target":25,"value":2},
    {"source":42,"target":24,"value":1},
    {"source":43,"target":11,"value":3},
    {"source":43,"target":26,"value":1},
    {"source":43,"target":27,"value":1},
    {"source":44,"target":28,"value":3},
    {"source":44,"target":11,"value":1},
    {"source":45,"target":28,"value":2},
    {"source":47,"target":46,"value":1},
    {"source":48,"target":47,"value":2},
    {"source":48,"target":25,"value":1},
    {"source":48,"target":27,"value":1},
    {"source":48,"target":11,"value":1},
    {"source":49,"target":26,"value":3},
    {"source":49,"target":11,"value":2},
    {"source":50,"target":49,"value":1},
    {"source":50,"target":24,"value":1},
    {"source":51,"target":49,"value":9},
    {"source":51,"target":26,"value":2},
    {"source":51,"target":11,"value":2},
    {"source":52,"target":51,"value":1},
    {"source":52,"target":39,"value":1},
    {"source":53,"target":51,"value":1},
    {"source":54,"target":51,"value":2},
    {"source":54,"target":49,"value":1},
    {"source":54,"target":26,"value":1},
    {"source":55,"target":51,"value":6},
    {"source":55,"target":49,"value":12},
    {"source":55,"target":39,"value":1},
    {"source":55,"target":54,"value":1},
    {"source":55,"target":26,"value":21},
    {"source":55,"target":11,"value":19},
    {"source":55,"target":16,"value":1},
    {"source":55,"target":25,"value":2},
    {"source":55,"target":41,"value":5},
    {"source":55,"target":48,"value":4},
    {"source":56,"target":49,"value":1},
    {"source":56,"target":55,"value":1},
    {"source":57,"target":55,"value":1},
    {"source":57,"target":41,"value":1},
    {"source":57,"target":48,"value":1},
    {"source":58,"target":55,"value":7},
    {"source":58,"target":48,"value":7},
    {"source":58,"target":27,"value":6},
    {"source":58,"target":57,"value":1},
    {"source":58,"target":11,"value":4},
    {"source":59,"target":58,"value":15},
    {"source":59,"target":55,"value":5},
    {"source":59,"target":48,"value":6},
    {"source":59,"target":57,"value":2},
    {"source":60,"target":48,"value":1},
    {"source":60,"target":58,"value":4},
    {"source":60,"target":59,"value":2},
    {"source":61,"target":48,"value":2},
    {"source":61,"target":58,"value":6},
    {"source":61,"target":60,"value":2},
    {"source":61,"target":59,"value":5},
    {"source":61,"target":57,"value":1},
    {"source":61,"target":55,"value":1},
    {"source":62,"target":55,"value":9},
    {"source":62,"target":58,"value":17},
    {"source":62,"target":59,"value":13},
    {"source":62,"target":48,"value":7},
    {"source":62,"target":57,"value":2},
    {"source":62,"target":41,"value":1},
    {"source":62,"target":61,"value":6},
    {"source":62,"target":60,"value":3},
    {"source":63,"target":59,"value":5},
    {"source":63,"target":48,"value":5},
    {"source":63,"target":62,"value":6},
    {"source":63,"target":57,"value":2},
    {"source":63,"target":58,"value":4},
    {"source":63,"target":61,"value":3},
    {"source":63,"target":60,"value":2},
    {"source":63,"target":55,"value":1},
    {"source":64,"target":55,"value":5},
    {"source":64,"target":62,"value":12},
    {"source":64,"target":48,"value":5},
    {"source":64,"target":63,"value":4},
    {"source":64,"target":58,"value":10},
    {"source":64,"target":61,"value":6},
    {"source":64,"target":60,"value":2},
    {"source":64,"target":59,"value":9},
    {"source":64,"target":57,"value":1},
    {"source":64,"target":11,"value":1},
    {"source":65,"target":63,"value":5},
    {"source":65,"target":64,"value":7},
    {"source":65,"target":48,"value":3},
    {"source":65,"target":62,"value":5},
    {"source":65,"target":58,"value":5},
    {"source":65,"target":61,"value":5},
    {"source":65,"target":60,"value":2},
    {"source":65,"target":59,"value":5},
    {"source":65,"target":57,"value":1},
    {"source":65,"target":55,"value":2},
    {"source":66,"target":64,"value":3},
    {"source":66,"target":58,"value":3},
    {"source":66,"target":59,"value":1},
    {"source":66,"target":62,"value":2},
    {"source":66,"target":65,"value":2},
    {"source":66,"target":48,"value":1},
    {"source":66,"target":63,"value":1},
    {"source":66,"target":61,"value":1},
    {"source":66,"target":60,"value":1},
    {"source":67,"target":57,"value":3},
    {"source":68,"target":25,"value":5},
    {"source":68,"target":11,"value":1},
    {"source":68,"target":24,"value":1},
    {"source":68,"target":27,"value":1},
    {"source":68,"target":48,"value":1},
    {"source":68,"target":41,"value":1},
    {"source":69,"target":25,"value":6},
    {"source":69,"target":68,"value":6},
    {"source":69,"target":11,"value":1},
    {"source":69,"target":24,"value":1},
    {"source":69,"target":27,"value":2},
    {"source":69,"target":48,"value":1},
    {"source":69,"target":41,"value":1},
    {"source":70,"target":25,"value":4},
    {"source":70,"target":69,"value":4},
    {"source":70,"target":68,"value":4},
    {"source":70,"target":11,"value":1},
    {"source":70,"target":24,"value":1},
    {"source":70,"target":27,"value":1},
    {"source":70,"target":41,"value":1},
    {"source":70,"target":58,"value":1},
    {"source":71,"target":27,"value":1},
    {"source":71,"target":69,"value":2},
    {"source":71,"target":68,"value":2},
    {"source":71,"target":70,"value":2},
    {"source":71,"target":11,"value":1},
    {"source":71,"target":48,"value":1},
    {"source":71,"target":41,"value":1},
    {"source":71,"target":25,"value":1},
    {"source":72,"target":26,"value":2},
    {"source":72,"target":27,"value":1},
    {"source":72,"target":11,"value":1},
    {"source":73,"target":48,"value":2},
    {"source":74,"target":48,"value":2},
    {"source":74,"target":73,"value":3},
    {"source":75,"target":69,"value":3},
    {"source":75,"target":68,"value":3},
    {"source":75,"target":25,"value":3},
    {"source":75,"target":48,"value":1},
    {"source":75,"target":41,"value":1},
    {"source":75,"target":70,"value":1},
    {"source":75,"target":71,"value":1},
    {"source":76,"target":64,"value":1},
    {"source":76,"target":65,"value":1},
    {"source":76,"target":66,"value":1},
    {"source":76,"target":63,"value":1},
    {"source":76,"target":62,"value":1},
    {"source":76,"target":48,"value":1},
    {"source":76,"target":58,"value":1}
  ];
function adjacencyListFromLinks(links)  {
    var adjList = {};
    links.forEach(addLinkToAdjList);
    return adjList;

    function addLinkToAdjList(link) {
        adjList[link.source] = adjList[link.source] || [];
        adjList[link.source].push(link.target);

        adjList[link.target] = adjList[link.target] || [];
        adjList[link.target].push(link.source + '');
    }
}


var adjacencyList = adjacencyListFromLinks(lesMisLinks);

var sourceGraph = new nerves.Graph(adjacencyList);

// console.log('graph', graph);

// var nerve = nerves.findNerve(sourceGraph, 1);

// console.log('nerve', nerve);

// var rawNerveGraph = nerves.getRawNerveGraph(sourceGraph, 2);

// console.log('rawNerveGraph', rawNerveGraph);

var rawD3Graph = nerves.getD3NerveGraph(sourceGraph, 2);
var graph = rawD3Graph;
console.log('d3Graph', rawD3Graph)
// var graph = {
//     links: rawD3Graph.links,
//     nodes: rawD3Graph.nodes
// }
// console.log('d3', graph);


// function filterLinks(links) {
//     return links.filter(bothEndsExist);
// }

// function bothEndsExist(link) {
//     return link.target && link.source;
// }


// console.log('D3NerveGraph', D3NerveGraph);



var width = 960,
    height = 500;

var canvas = d3.select("body").append("canvas")
    .attr("width", width)
    .attr("height", height);

var force = d3.layout.force()
    .size([width, height])
    .linkDistance(300);

  var context = canvas.node().getContext("2d");

  force
      .nodes(graph.nodes)
      .links(graph.links)
      .on("tick", tick)
      .start();

  function tick() {
    context.clearRect(0, 0, width, height);

    // draw links
    context.strokeStyle = "rgba(0, 0, 0, 0.01)";
    context.beginPath();
    graph.links.forEach(function(d) {
      context.moveTo(d.source.x, d.source.y);
      context.lineTo(d.target.x, d.target.y);
    });

    context.stroke();

    // draw nodes
    context.fillStyle = "steelblue";
    context.beginPath();
    graph.nodes.forEach(function(d) {
      context.moveTo(d.x, d.y);
      context.arc(d.x, d.y, 3, 0, 2 * Math.PI);
    });
    context.fill();
  }
