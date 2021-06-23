var zombieWolrd = function(size, zombiePosition, creaturePositions, instructions) {
    const instructionList = instructions.split('');
    let infectedList = [];
    let zombieFinalPosition = [];
    //first zombie moves
    console.log('Zombie at (' + zombiePosition + ')');
    for (let i = 0;  i < instructionList.length; i++) {
        const newPosition = move(size, zombiePosition, instructionList[i]);
        zombiePosition = newPosition;
        const newZombie = checkInfected(newPosition, creaturePositions);
        if (newZombie != null) {
            infectedList.push(newZombie);
        }
    } 
    console.log('-----------------------');
    zombieFinalPosition.push(zombiePosition);
    //other zombie moves
    while (infectedList.length > 0) {
        newZombiePosition = infectedList[0];
        console.log('Zombie at (' + newZombiePosition + ')');
        for (let i = 0;  i < instructionList.length; i++) {
            const newPosition = move(size, newZombiePosition, instructionList[i]);
            newZombiePosition = newPosition;
            const newZombie = checkInfected(newPosition, creaturePositions);
            if (newZombie != null) {
                infectedList.push(newZombie);
            }
        }
        zombieFinalPosition.push(newZombiePosition); 
        infectedList.splice(0,1);
        console.log('-----------------------');
    }
    console.log('Zombies position: ');
    console.log(zombieFinalPosition);
    console.log('Creatures position');
    console.log(creaturePositions);
}

var move = function(size, position, move) {
    let x = position[0];
    let y = position[1];
    let newPosition = [x,y];
    if (move == 'R') {
        if (newPosition[0] == size-1) {
            newPosition[0] = 0;
        } else {
            newPosition[0] += 1
        }
    } else if (move == 'L') {
        if (newPosition[0] == 0) {
            newPosition[0] == size -1;
        } else {
            newPosition[0] -= 1;
        }
    } else if (move == 'U') {
        if (newPosition[1] == 0) {
            newPosition[1] == size -1;
        } else {
            newPosition[1] -= 1;
        }
    } else if (move == 'D') {
        if (newPosition[1] == size-1) {
            newPosition[1] = 0;
        } else {
            newPosition[1] += 1
        }
    }
    console.log('Zombie move to position: (' + newPosition +')');
    return newPosition;
}

var checkInfected = function(zombieCurrentPosition, creaturePositions) {
    let index = null;
    let newZombie = null;
    for (let i = 0; i < creaturePositions.length; i++) {
        if (zombieCurrentPosition[0] == creaturePositions[i][0] && zombieCurrentPosition[1] == creaturePositions[i][1]) {
            index = i;
            newZombie = zombieCurrentPosition;
            console.log('Infected ' + newZombie);
            break;
        }
    }
    if (index != null)
        creaturePositions.splice(index,1);
    return newZombie;
}

// const instructions = 'RDRU';
// const creaturePositions = [[0,1], [1,2], [1,1]];
// const size = 4;
// const zombiePosition = [3,1];
// zombieWolrd(4, zombiePosition, creaturePositions, instructions);

const instructions = 'RDRUR';
const creaturePositions = [[2,1], [3,2], [2,3]];
const size = 4;
const zombiePosition = [3,1];
zombieWolrd(4, zombiePosition, creaturePositions, instructions);