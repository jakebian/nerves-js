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
                source: nodeIndexMap[link[0]],
                target: nodeIndexMap[link[1]],
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
        return {name: node, weight: 2};
    }


    function getLinksFromNodesList(nodesList) {
        return nodesList.slice(1).reduce(makeLink, [ [ nodesList[0], null] ]);
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

});