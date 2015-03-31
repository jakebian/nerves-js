/*global nerves*/

var adjacencyList = { 1: [ '2', '5', '3' ], 2: [ '3' ], 5: [ '3' ], 4: [ '5', '6', '3' ] };

var graph = new nerves.Graph(adjacencyList);

console.log('graph', graph);

var nerve = nerves.findNerve(graph, 1);

console.log('nerve', nerve);

var rawNerveGraph = nerves.getRawNerveGraph(graph, 1);

console.log('rawNerveGraph', rawNerveGraph);

var D3NerveGraph = nerves.getD3NerveGraph(graph, 1);

console.log('D3NerveGraph', rawNerveGraph);
