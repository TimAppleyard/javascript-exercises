const findTheOldest = function(people) {
    let oldest = people.reduce((oldestPerson, person) =>{
        let age = 0;
        let ageOldest = 0;

        if (person.yearOfDeath === undefined)
            age = new Date().getFullYear() - person.yearOfBirth;
        else
            age = person.yearOfDeath - person.yearOfBirth;

        if (oldestPerson.yearOfDeath === undefined)
            ageOldest = new Date().getFullYear() - oldestPerson.yearOfBirth;
        else
            ageOldest = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
        
        if (age > ageOldest)
            return person;
        else
            return oldestPerson;
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
