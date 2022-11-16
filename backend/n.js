let object={
    userName:'',
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    repeatPassword:'',
    phoneNumber:'',
    sex:'',
    profilePicture:'',
    addresses:
        {
            country: '',
            town: '',
            Postcode: '',
            AddressLineOne:''
        },
    addSomethingPersonal:[
        {
            height:'fds',
            eyesColor:'',
            hairColor:'',
            favoriteFood:'',
            favoriteDrink:'',
            weight:'',
        }
    ]
}

let json=JSON.stringify(object);


let add=JSON.parse(json);

let x=add.addSomethingPersonal;
console.log(x[0].height)
