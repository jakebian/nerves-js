/* global define */

define(['nerves/find-nerve', 'nerves/graph', 'nerves/nerve-graph-generators'],
    function (findNerve, Graph, nerveGraphGenerators) {

        return {
            findNerve: findNerve,
            Graph: Graph,
            getRawNerveGraph: nerveGraphGenerators.getRawNerveGraph,
            getD3NerveGraph: nerveGraphGenerators.getD3NerveGraph
        };

    }
);