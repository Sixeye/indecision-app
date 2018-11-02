var nameVar = 'Christopher';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie'
console.log('nameLet', nameLet);

const nameConst = 'Frank';
const nameConst = 'Gunther';
console.log('nameConst', nameConst);

// Block scoping

var fullName = 'Christopher Halen';
if (fullName){
    var firstName = fullName.split('')[0];
    console.log(firstName);
}
console.log(firstName);