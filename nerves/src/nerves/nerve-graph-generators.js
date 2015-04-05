/* global define, console */

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
            console.log('linksFromNerve',formatters.getLinksFromNerve(findNerve(graph, k)));
            return {
                nodes: graph.getNodes(),
                links: formatters.getLinksFromNerve(findNerve(graph, k))
            };
        }

    }
);