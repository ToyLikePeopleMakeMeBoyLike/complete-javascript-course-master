/*
let js = "amazing";
console.log(40 + 8 - 10);


console.log("jonas");
console.log(js);
*/


/*
let javascriptIsfun = true;
console.log(javascriptIsfun);

console.log(typeof true);
*/

/*

let age =30;
age = 31;
console.log(age);

const birthYear = 1991;
*/

/*
const now =2037;
const ageJonas =  now -1991;
const ageSarah = now - 2018;

console.log(ageJonas * 2, ageJonas /10, 2**3 );   

*/
/*
// Strings and Template Literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);
*/

const day = 'monday';

switch(day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to the coding meetup');
        break;


    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break;
    case 'friday':
        console.log('Record Videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend');
    break;
    default:
        console.log('not a valid day');
}