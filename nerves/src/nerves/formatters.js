/* global define, console*/

define([], function () {

    return {
        getD3Graph: getD3Graph,
        getLinksFromNerve: getLinksFromNerve
    };

    function getD3Graph(rawGraph){

        var nodeIndexMap = getNodeIndexMap(rawGraph.nodes);

        return {
            nodes: rawGraph.nodes.map(getD3Node),
            links: rawGraph.links.map(getD3Link)
        };


        function getD3Link(link) {
            return {
                source: nodeIndexMap[link.source],
                target: nodeIndexMap[link.target],
            };
        }
    }

    function getLinksFromNerve(nerve) {
        return flattenArrays(nerve.map(getLinksFromPath));

        function getLinksFromPath(path) {
            return getLinksFromNodesList(path.nodes);
        }
    }

    function getNodeIndexMap(nodes) {

        var nodeIndexMap = {}, count = 0;

        nodes.forEach(addToIndexMap);

        return nodeIndexMap;

        function addToIndexMap(node) {
            nodeIndexMap[node] = count;
            count ++;
        }
    }

    function getD3Node(node) {
        return {name: node, weight: 0};
    }


    function getLinksFromNodesList(nodesList) {
        return getAllPairs(nodesList, formatLink);
    }


    function formatLink(source, target) {
        return {
            source: source,
            target: target
        };
    }

    function makeLink(links, node) {
        return [ [node, getTailNode(links)] ].concat(links);
    }

    function getTailNode(links) {
        return links[0][0];
    }

    function flattenArrays(arrays){
        var merged = [];
        merged = merged.concat.apply(merged, arrays);
        return merged;
    }

    /**
     * Generates all nC2 combinations of arr.
     * @param  {Array}    arr      : The array to choose from
     * @param  {function} formatFn : A function thatformats the result, takes 2 arguments.
     * @return {Array}
     */

    function getAllPairs(arr, formatFn) {

        var formatter = formatFn;
        var result = [];

        for (var i = 0; i < arr.length; i++) {

            var first = arr[i];

            for (var j = i; j < arr.length; j++) {

                var second = arr[j];
                result.push(formatFn(first, second));

            }
        }

        return result;
    }

});