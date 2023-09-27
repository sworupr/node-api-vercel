require('dotenv').config();
mongoose = require ('mongoose');
MONGO.URI = 'mongodb+srv://sworup:c1MNXl0hxt2EEAHg@cluster0.iqctmc7.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new mongoose.Schema ({
  name: {
    type: String,
  },
  age: {
    type: Number
  },
  favoriteFoods: {
    type: Array
  }
})


let Person = mongoose.model('Person', personSchema);

let person = new Person({
  name: 'sworup',
  age: 12,
  favoriteFoods: ['BBQ']
})



const createAndSavePerson = (done) => {
  person
  .save()
  .then((doc)=>{
    console.log(doc)
    done(null,doc);
  })
.catch((err) => {
  console.log(err)
})
};

arrayOfPeople = [
  {
    name: 'hugh',
    age: 23,
    favoriteFoods: ['chipotle','eel']
  },
  {
    name: 'homnath',
    age: 34,
    favoriteFoods: ['waiwai', 'momo']
  }
]

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople)
    .then( (doc) => {
      console.log(doc)
      done(null,doc)
    })
    .catch( (err)=> console.log(err))
};

const findPeopleByName = (personName, done) => {
  Person.find({
    name: personName
  })
  .then(doc =>{
    console.log(doc)
        done(null,doc)
  })
.catch(
  err => console.log(err)
)
  
};

const findOneByFood = (food, done) => {
    Person.findOne({
    favoriteFoods: food
  })
  .then(doc =>{
    console.log(doc)
        done(null,doc)
  })
.catch(
  err => console.log(err)
)
};

const findPersonById = (personId, done) => {
 Person.findById({
    _id: personId
  })
  .then(doc =>{
    console.log(doc)
        done(null,doc)
  })
.catch(
  err => console.log(err)
)
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  Person.findById({
    _id: personId
  })
  .then(doc =>{
    console.log(doc)
    doc.favoriteFoods.push(foodToAdd)
    
  doc.save()
    .then((doc) => {
      console.log(doc)
      done(null,doc)
      })
    .catch((err)=>{
      console.log(err)
    })
  })
.catch(
  err => console.log(err)
)
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate(
    {name:personName},
    {age:ageToSet},
    {new: true}                      
  )
  .then(doc=> {
    console.log(doc)
    done(null,doc)
  })
  .catch(err=> console.log(err))
    
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove({_id:personId})
  .then(doc => {
    console.log(doc)
    done(null,doc)
  })
  .catch(err=> console.log(err))
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({name:nameToRemove})
  .then(doc=>{
    console.log(doc);
    done(null,doc);
  })
  .catch(err=>console.log(err))
};

const queryChain = (done) => {
  const foodToSearch = "burrito";
  Person
  .find({favoriteFoods:foodToSearch})
  .sort({name:1})
  .limit(2)
  .select({age:false})
  .exec()
  .then(docs=>{
    console.log(docs)
    done(null,docs)
  })
  .catch(err=>console.log(err)) 

  
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
