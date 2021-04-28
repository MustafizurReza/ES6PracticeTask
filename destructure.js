const actor = {Name:"Salman Khan",Age: 100,Address:"Mumbai",gfName: "Katrina Kaif",phoneNumber:"xxxxxxxxxxxxx",fatherName:"Salim Khan",motherName:"Shormila Tagore",brotherName:"ArbazSalim"};
console.log(actor);
console.log(actor.gfName); ///or
const GFName = actor.gfName;
console.log(GFName);///or
// const { gfName } = actor;
// console.log(gfName);///or
const { Name,phoneNumber,gfName } = actor;
console.log(Name,phoneNumber,gfName);