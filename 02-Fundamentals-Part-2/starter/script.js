/*'use strict';

let hasDriverLicense =false;
const passTest =true;

if(passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log('i can drive');



const interface = 'Audio';

const private = 456;
const if   /*

*/

function logger() {
    console.log('my name is jonas');
}
// calling / running for invoquing
logger();

/*

logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = 'juice with ${apples} apples and ${oranges} oranges';
    return juice
}

const appleJuice =fruitProcessor(5,0);
console.log(appleJuice);
/*

///*
*/

//function expression
/*
const calcAge2 =function (birthYear) {
    return 2037 - birthYear;
}



const CalcAge3 = birthYear => 2037 - birthYear;
const age3=CalcAge3(1991)
console.log(age3);
const calcAge =function(birthYear){
    return 2037 -birthYear;
}
const yearUntilRetirement =birthYear => {
    const age =2037 - birthYear;
    const retirement = 65 - age;
    if(retirement >0) {
        return retirement;
    }   else {
        return -1;
        }
    }

console.log(yearUntilRetirement(1991));
*/
/*
const calcAverage = (a,b,c) => (a+b+c) /3;
console.log(calcAverage(3,4,5));

const scoreDolphins = calcAverage(44,23,71);
const scoreKoalas = calcAverage(65,54,49); 

console.log(scoreDolphins, scoreKoalas);


const checklist = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas)
        console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);

}
checklist(scoreDolphins,scoreKoalas);

*/
/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends =['Michael', 'Steven', 'Peter'];
console.log(friends);

const years =new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);

console.log([friends.length]-1);

friends[2] = 'jay';
console.log(friends);

const jonas = ['jonas', 'jo'. 2037 -1991];
*/
/*
*/


/*
const friends = ['Michael', 'Steven', 'Peter'];
const newLenght = friends.push('Jay');
console.log(friends);
console.log(newLenght);

friends.unshift('John');
console.log(friends);

friends.pop();
friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

*/

/*

const calcTip = function(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

*/

/*
const jonas = {
    firstname: 'Jonas',
    lastname: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriverLicense: true,

    calcAge : function(birthYear) {
        return 2037 - birthYear;
    }
};


console.log(jonas.calcAge(1991));
*/


const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

mark.calcBMI();
console.log(mark.bmi);

//