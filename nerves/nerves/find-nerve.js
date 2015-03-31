/* global define */

define([], function () {

    return findNerve;

    /**
     * Find kth-nerve of graph (poset, small-category) g
     * @param  {object} g - graph object
     * @param  {float}  k - integer > 0, specifying order of the nerve group to compute
     * @return {object} nerve as a path object
     */

    function findNerve(g, k) {

        if (k === 0) {
            return g.getNodes().map(newPathFromNode);
        }

        return getNextPaths(findNerve(g, k-1), g);

    }


    /**
     * generates all paths in g obtained from appending 1 more step to paths
     * @param  {array}  paths - existing of path objects
     * @param  {Graph}  g     - instance of graph object
     * @return {array}        - list of resulting paths
     */

    function getNextPaths(paths, g) {
        var resultPaths = [];

        paths.forEach(processPath);

        return resultPaths;

        function processPath(path) {
            var r = g.getNeighbors(path.endNode)
                .map(extendThisPathWith)
                .forEach(addToResultPaths);

            function extendThisPathWith(node) {
                return getExtendedPath(path, node);
            }
        }

        function addToResultPaths(path) {
            resultPaths.push(path);
        }

    }

    /**
     * Creates a new path from a node object
     * @param  {object} node - node to create path from
     * @return {object}      - path object
     */

    function newPathFromNode(node) {

        return {
            startNode: node,
            endNode: node,
            nodes: [node]
        };

    }

    /**
     * Returns a new path object obtained from appending node to path
     * @param  {object} path - path to append to
     * @param  {object} node - node to append to path
     * @return {object}
     */

    function getExtendedPath(path, node) {

        return {
            startNode: path.start,
            endNode: node,
            nodes: path.nodes.concat([node])
        };

    }

});

