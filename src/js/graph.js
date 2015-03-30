function Graph(g){

    this.adjList = g;
    this.getNodes = getNodes;
    this.getNeighbors = getNeighbors;

    function getNodes() {
        return getStringKeys(this.adjList);
    }

    function getNeighbors(node) {
        return this.adjList[node] || [];
    }

}

function toStr(obj) {
    return obj + '';
}

function getStringKeys(object) {
    return Object.keys(object).map(toStr);
}