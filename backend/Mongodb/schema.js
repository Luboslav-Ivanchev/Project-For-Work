const mongoose=require('mongoose');

const schema=new mongoose.Schema({
    userName:String,
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    repeatPassword:String,
    phoneNumber:String,
    sex:String,
    securityQuestion:String,
    profilePicture:String,
    addresses:
        {
            country: String,
            town: String,
            postcode: String,
            addressLineOne: String
        },
    addSomethingPersonal:[
        {
            height:String,
            favoriteFood:String,
            favoriteDrink:String,
            weight:String,
        }
    ]
})

const realPro=new mongoose.model('RealUsers',schema);

module.exports=realPro;