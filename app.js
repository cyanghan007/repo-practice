// Alien ship classes
//class hull w/ Math.floor(Math.random() * 7) + 3;
//class firepower w/ Math.floor(Math.random() * 5) + 2;
//class accuracy w/ Math.floor)Math.random() * .9) + .6;

//USS Assebmbly
//class hull w/ property of 20
//class firepower w/ propery of 5
//class accuracy w/ property of .7

//example of accuracy to determine hit
// if (Math.random() < alien[0].accuracy) {
// 	console.log('You have been hit!');
// }

class MySpaceShip {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    // attack method
    attack (targetship) {
        targetship.hull--
        console.log('Target ship is now at', + targetship.hull);
    // retreat
}
};

class EnemySpaceShip {
    constructor(hull, firepower, accuracy){
        this.alienship = []
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    //attack method
    attack (targetship) {
        targetship.hull--
        console.log('Target ship is now at', + targetship.hull);
};  
}
//Start game function
const mySpaceShip = new MySpaceShip(20, 5, .7); // Adds values to each constructor
const enemySpaceShip = new EnemySpaceShip(Math.floor(Math.random() * 4) + 3, Math.floor(Math.random(2) * 5), Math.random(.9));
enemySpaceShip.attack(mySpaceShip)
mySpaceShip.attack(enemySpaceShip)
//While loop
while (mySpaceShip.attack <= enemySpaceShip.hull) {
    mySpaceShip.attack(enemySpaceShip)
    console.log('You beat the alien spaceship!')
} 
// console.log(`x-Wing: ${mySpaceShip} tieFighter: ${enemySpaceShip}`);

console.log(mySpaceShip)
console.log(enemySpaceShip)


const startGameBtn = document.querySelector('#startGameBtn')

addEventListener('click', () => {
    console.log('go')
})

startGameBtn.addEventListener('cklick', () => {
    console.log('go')
})