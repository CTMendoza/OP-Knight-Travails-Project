function knightMoves (start, end) {
    let currentPos = start
    let que = []
    const moveSet=[[+2, +1],[+2, -1],[-2, +1],[-2, -1],[+1, +2],[+1, -2],[-1, +2],[-1, -2]]
//check to make sure that the start and end coordinates are valid within the 8x8 chess board
    if(checkCoordinate(start, 'start')) {
        return checkCoordinate(start,'start')
    }
    if(checkCoordinate(end, 'end')) {
        return checkCoordinate(end,'end')
    }
    // initialize que with current position and path
    que.push([start,[start]])

    while(que.length > 0) {
    // assigne values of shifted que element to currentNode and pathSoFar
    let [currentNode, pathSoFar] = que.shift()

    //check if currentNode coordinates are equal to end coordinates.
    if(currentNode[0] === end[0] && currentNode[1] === end[1]) {
        //return pathSofar if true which will return the shortest path to the end coordinates
        return `You made it in ${pathSoFar.length - 1} moves! Here's your path:\n` +
            pathSoFar.map(pos => `[${pos[0]}, ${pos[1]}]`).join(" -> ");
    }

    // loop through moveSet array and create new positions for given currentNode
    moveSet.forEach((element) => {
        let newPos = [currentNode[0] + element[0], currentNode[1] + element[1]]
        // if newPos is true create a newPath array which has pathSoFar and newPos
        if(isValidPosition(newPos)) {
            let newPath = [...pathSoFar, newPos];
            que.push([newPos, newPath]);
        }
    })
}




// find the shortest path from the start coordinate to the end coordinate
}

function checkCoordinate(pos, type) {
    if((pos[0] < 0) || (pos[0] > 7) || (pos[1] < 0) || (pos[1] > 7)) {
        return `${type} vertex is not a valid coordinate`
    }
}

function isValidPosition(pos) {
  return (
    pos[0] >= 0 && pos[0] <= 7 &&
    pos[1] >= 0 && pos[1] <= 7
  );
}

console.log(knightMoves([5,4], [1,7]))
