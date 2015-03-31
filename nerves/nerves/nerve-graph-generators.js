/* global define */

define(['./find-nerve', './formatters'],
    function (findNerve, formatters) {

        return {
            getRawNerveGraph: getRawNerveGraph,
            getD3NerveGraph: getD3NerveGraph
        };

        function getD3NerveGraph(G, n) {
            return formatters.getD3Graph(getRawNerveGraph(G, n));
        }

        function getRawNerveGraph(graph, k) {
            return {
                nodes: graph.getNodes(),
                links: formatters.getLinksFromNerve(findNerve(graph, k))
            };
        }

    }
);