/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    // at each index's possible path, call recursively while keeping track of what path was already taken
    // get destination by n-2
    const paths = []
    const dest = graph.length-1
    const helper = (index, path) => {
        if(index === dest) {
            path.push(index)
            paths.push(path)
            return;
        }
        path.push(index)
        const edges = graph[index]
        for(let i = 0; i < edges.length; i++) {
            helper(edges[i], [...path])
        }
    }
    const path = []
    helper(0, path)
    return paths
};
