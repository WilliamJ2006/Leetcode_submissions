/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const keys = [0];
    const visited = {};
    while(keys.length > 0) {
        const current = keys.pop();
        if(visited[current]) continue;
        visited[current] = true;
        if(Object.keys(visited).length === rooms.length) return true;
        for(let key of rooms[current]) {
            keys.push(key);
        }
    }
    return false;
};
