function knightMoves (start, end) {
//check to make sure that the start and end coordinates are valid within the 8x8 chess board
return checkCoordinate(start, 'start') || checkCoordinate(end, 'end')
// find the shortest path from the start coordinate to the end coordinate
}

function checkCoordinate(pos, type) {
    if((pos[0] < 0) || (pos[0] > 7) || (pos[1] < 0) || (pos[1] > 7)) {
        return `${type} vertex is not a valid coordinate`
    }
}