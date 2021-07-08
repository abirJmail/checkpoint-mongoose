
const express=require ('express')
const app=express()
const search=require("./config/connectDB")
// 1//creat server
   //*** 1.1 run server 
   //*** 1.2 conntDB (config folder)
   //*** 1.3 creat Route
   //*** 1.4 parse Data

//3-routes
app.use(express.json())
//Create and save User function

//search.createSave()
//Create Many Records with model.create()
search.createPeoples({name:"ahmed",age:28,favoriteFoods:["brik","sbagetti"]})

//Find User ByName

search.findByName('ahmed')
//Find User By ID function

search.findById('60e5c34645e26f1c3417edef')
//Find User By Food
search.findByFood('pizz')

//Perform Classic Updates by Running Find, Edit, then Save
search.findEdit()
//Update User
search.findAndUpdate()
//Delete User

search.removeById()

//Delete All User

search.removePeoples('Mary')

//Get Specific user

search.queryChain()





//*** 1.2-connect db
search.connectDB(); 
//*** 1.1 run
const port = process.env.PORT || 6000
app.listen(port, err => {
    err
        ? console.log(err)
        : console.log(`the server is running on http://localhost:${port}`)
})
