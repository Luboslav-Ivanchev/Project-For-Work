const express=require('express');

const app=express();

const port=7000;

const database=require('./Mongodb/schema.js');

require('./Mongodb/connection.js');

app.use(express.json());

//app.use(function (req,res,next) {
//     res.header('Access-Control-Allow-Origin','*')
//     res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-type,Accept')
//     next();
// })

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});


app.get('/getData',async function (req,res) {

    try {
        let db = await database;
        let data = await db.find({});

        res.send(data)
    }catch (e) {
        console.log(e)
    }


})


app.post('/sendData',async function (req,res) {

     try{

         const db=await database;
         const information=await db({
             userName:req.body.userName,
             firstName:req.body.firstName,
             lastName:req.body.lastName,
             email:req.body.email,
             password:req.body.password,
             repeatPassword:req.body.repeatPassword,
             phoneNumber:req.body.phoneNumber,
             sex:req.body.sex,
             securityQuestion:req.body.securityQuestion,
             profilePicture:req.body.profilePicture,
             addresses:
                 {
                     country: req.body.addresses.country,
                     town: req.body.addresses.town,
                     postcode: req.body.addresses.postcode,
                     addressLineOne: req.body.addresses.addressLineOne
                 },
             addSomethingPersonal:[
                 {
                     height:req.body.addSomethingPersonal[0].height,
                     favoriteFood:req.body.addSomethingPersonal[0].favoriteFood,
                     favoriteDrink:req.body.addSomethingPersonal[0].favoriteDrink,
                     weight:req.body.addSomethingPersonal[0].weight,
                 }
             ]
         });

         information.save();
         res.send('Send it');

     }catch (e) {

         console.log(e)

     }

})




app.post('/update/:_id',async function (req,res) {

   let userName=req.body.userName;
        let firstName=req.body.firstName;
        let lastName=req.body.lastName;
        let email=req.body.email;
       let  password=req.body.password;
       let  repeatPassword=req.body.repeatPassword;
       let  phoneNumber=req.body.phoneNumber;
       let  sex=req.body.sex;
       let securityQuestion=req.body.securityQuestion;
        let profilePicture=req.body.profilePicture;

    let country=req.body.addresses.country;
       let  town=req.body.addresses.town;
       let  postcode=req.body.addresses.postcode;
       let  addressLineOne=req.body.addresses.addressLineOne;


    let height=req.body.addSomethingPersonal[0].height;
       let  favoriteFood=req.body.addSomethingPersonal[0].favoriteFood;
       let  favoriteDrink=req.body.addSomethingPersonal[0].favoriteDrink;
       let  weight=req.body.addSomethingPersonal[0].weight;


       let id=req.params;

       let data=await database;

       data.updateOne({_id:id}, {
           $set: {
               userName: userName,
               firstName: firstName,
               lastName: lastName,
               email: email,
               password: password,
               repeatPassword: repeatPassword,
               phoneNumber: phoneNumber,
               sex: sex,
               securityQuestion:securityQuestion,
               profilePicture: profilePicture,
               addresses:
                   {
                       country: country,
                       town: town,
                       postcode: postcode,
                       addressLineOne: addressLineOne
                   },
               addSomethingPersonal: [
                   {
                       height: height,
                       favoriteFood: favoriteFood,
                       favoriteDrink: favoriteDrink,
                       weight: weight,
                   }
               ]
           }
       },{new:true},(err,data)=>{

           if(data===null){
               res.send('Not found');
           }else{
               res.send(data);
           }
       })

})


app.get('/getDataById/:_id',async function (req,res) {
    let data=await database;
    let user=await data.findOne({_id:req.params});
    res.send(user);
})


app.delete('/deleteProfile/:_id',async function (req,res) {
    let data=await database;
   let x=await data.deleteOne(req.params);
   res.send('Deleted')
})

app.listen(port,async function (req,res) {
    console.log(`Listening on ${port}`);
})