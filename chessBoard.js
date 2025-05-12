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
    que.push([currentPos,[start]])
    // create new positions for current position
    let newPos = []
    while(que.length > 0) {
    let firstElement = que.shift()
    moveSet.forEach((element) => {
        newPos.push([firstElement[0] + element[0], firstElement[1] + element[1]])
    })
    newPos.forEach((element) => {
        if(isValidPosition(element)) {
            let pathSoFar = firstElement[1]
            let newPath = [... pathSoFar, element]
            que.push([element,[newPath]])
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