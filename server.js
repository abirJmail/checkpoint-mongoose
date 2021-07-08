
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

search.createSave()
//Create Many Records with model.create()
search.createPeoples({name:"ahmed",age:20,favoriteFoods:["brik","keftegi"]},)

//Find User ByName

search.findByName('ahmed')
//Find User By ID function

search.findById('60e70c7231bbab1b0cab06fe')
//Find User By Food
search.findByFood('brik')

//Perform Classic Updates by Running Find, Edit, then Save
//search.findEdit('60e70c7231bbab1b0cab06fe')
//Update User
search.findAndUpdate('ahmed')
//Delete User

search.removeById('60e70c7231bbab1b0cab06fe')

//Delete All User

search.removePeoples('brik')

//Get Specific user

//search.queryChain()





//*** 1.2-connect db
search.connectDB(); 
//*** 1.1 run
const port = process.env.PORT || 6000
app.listen(port, err => {
    err
        ? console.log(err)
        : console.log(`the server is running on http://localhost:${port}`)
})
