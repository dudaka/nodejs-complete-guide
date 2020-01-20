const name = 'Max';
let age = 29;
const hasHobbies = true;

age = 30;

function summarizeUser(userName, userAge, hasHobby) {
    return (
        'Name is ' + userName +
        ', age is ' + userAge + 
        ' and user has hobbies: ' + hasHobby
    )
}

console.log(summarizeUser(name, age, hasHobbies));