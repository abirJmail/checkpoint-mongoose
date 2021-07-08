const config = require("config")
const mongoose = require("mongoose")
const express = require("express");
const app = express()
app.use(express.json())


//ConnectDB
const connectDB = async () => {
try {
    const connect = await mongoose.connect(config.get("MONGO_URI"),
        {
    useNewUrlParser: true,
    useUnifiedTopology: true
        }, 
    err=>(err?console.error(err):console.log("mongoose connected")));
    } 
    catch (error) {
    console.error(error)
}
}

//Create Schema

const schema = mongoose.Schema;

const user = new schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

const User=mongoose.model("User", user)

// Create and Save a Record of a Model:

const createSave = () => {
    const u = new User({
      name: 'abir',
      age: 32,
      favoriteFoods: ['kouskous', 'pizza'],
    });
    u.save((err, data) => {
      if (err) return console.log(err);
      return console.log(data);
    });
  };
 //Create Many Records with model.create()
  
const createPeoples = (arrayOfPeople) => {
    User.create(arrayOfPeople, (err, data) => {
      if (err) return console.log(err);
      return console.log(data);
    });
  };

  //Use model.find() to Search Your Database
  const findByName = (personName) => {
    User.find({ name: personName }, (err, data) => {
        if (err) return console.log(err);
        return console.log(data);
    });
  };
  
  //Use model.findOne() to Return a Single Matching Document from Your Database

const findByFood = (food) => {
    User.findOne({ favoriteFoods: food }, (err, data) => {
        if (err) return console.log(err);
        return console.log(data);
    });
  };
  
  //Use model.findById() to Search Your Database By _id

  const findById = (personId) => {
    User.findById(personId, (err, data) => {
        if (err) return console.log(err);
        return console.log(data);
    });
  };

  
  //Perform Classic Updates by Running Find, Edit, then Save
  
  const findEdit = (personId, done) => {
    const foodToAdd = 'hamburger';
    User.findById(personId, (err, data) => {
      if (err) return console.log(err);
      data.favoriteFoods.push(foodToAdd);
      data.save((err, data) => {
        if (err) return console.log(err);
        return console.log(data);
      });
    });
  };
  
  // Perform New Updates on a Document Using model.findOneAndUpdate()
  
  const findAndUpdate = (personName) => {
    const query = { name: personName };
    const update = { age: 20 };
    User.findOneAndUpdate(query, update, { new: true }, (err, data) => {
        if (err) return console.log(err);
        return console.log(data);
    });
  };
  
  //Delete One Document Using model.findByIdAndRemove
  const removeById = (personId) => {
    User.findByIdAndRemove(personId, (err, data) => {
        if (err) return console.log(err);
        return console.log(data);
    });
  };
  
  //MongoDB and Mongoose - Delete Many Documents with model.remove()
  const removePeoples = () => {
    const nameToRemove = 'Mary';
    const query = { name: nameToRemove };
    User.remove(query, (err, data) => {
        if (err) return console.log(err);
        return console.log(data);
    });
  };
  
  //Chain Search Query Helpers to Narrow Search Results

  const queryChain = () => {
    const foodToSearch = 'burrito';
    const query = { favoriteFoods: foodToSearch };
    User.find(query)
      .sort({ name: 'ascending' })
      .limit(2)
      .select({ age: false })
      .exec((err, data) => {
        if (err) return console.log(err);
        return console.log(data);
      });
  };
  
  
  module.exports =search= {
    connectDB,
    createSave,
    createPeoples,
    findByName,
    findByFood,
    findById,
    findEdit,
    findAndUpdate,
    removeById,
    removePeoples,
    queryChain,
    }
