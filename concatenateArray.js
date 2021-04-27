const ages = [1,2,3,4,5,6,7,8,9,10];
console.log(ages);
const ages2 = [11,12,13,14,15,16,17,18,19,20];
console.log(ages2);
const allAges = ages.concat(ages2);
console.log(allAges);
const ages3 = [91,92,93,94,95,96,97,98,99,100];
console.log(ages3);
const allThreeAge = ages.concat(ages2).concat([1000]).concat(ages3);
console.log(allThreeAge);
const threeAge = [ages,ages2,ages3];
console.log(threeAge);
const allTheAges = [...ages,...ages2,...ages3];
console.log(allTheAges);
/// finding max 
const a = 100;
const b = 1000;
const c = 10000;
const max = Math.max(a,b,c);
console.log(max); 
/// finding max in array
const maximum = Math.max(...allThreeAge);
console.log(maximum); 
