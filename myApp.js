require('dotenv').config();
var mongoose = require("mongoose");

const Schema = mongoose.Schema;
const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

let Person;
Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  const document = new Person({
    name: "Favour Ogbeide",
    age: 39,
    favoriteFoods: ["Beans", "Yam", "Eba", "Salad"]
  });
  document.save(function(err, data) {
    if (err) {
      return console.error(err);
    }
    done(null, data);
  });   
};

var arrayOfPeople = [
  {name: "James", age: 24, favoriteFoods: ["Del Taco"]},
  {name: "Cleric", age: 32, favoriteFoods: ["roast chicken"]},
  {name: "Roberton", age: 28, favoriteFoods: ["wine", "fish"]}
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(err, result) {
    if (err) {
      return console.error(err);
    }
    done(null, result);
  });  
};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, function(err, personFound) {
    if (err) {
      return console.error(err)
    }
    done(null , personFound);
  });  
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
