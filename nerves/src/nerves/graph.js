/* global define */

define([], function () {

    return Graph;
    /**
     * Graph class
     * @param {object} adjMap - an adjacency list as an object:
     *                           format is { 'node', [ neighborNode1, neighborNode2, ... ]}
     *                           Each node is a string, thought of as an unique ID.
     */

    function Graph(adjMap){

        this.adjMap = adjMap;
        this.getNodes = getNodes;
        this.getNeighbors = getNeighbors;

        function getNodes() {
            return getStringKeys(this.adjMap);
        }

        function getNeighbors(node) {
            return this.adjMap[ node ] || [];
        }

    }

    function getStringKeys(object) {
        return Object.keys(object);
    }
});