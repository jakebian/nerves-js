/*global nerves*/
var adjacencyList = { 1: [ '2', '5', '3' ], 2: [ '3' ], 5: [ '3' ], 4: [ '5', '6', '3' ] }

var graph = new nerves.Graph(adjacencyList);

console.log('graph', graph)

var nerve = nerves.findNerve(graph, 1);

console.log('nerve', nerve);