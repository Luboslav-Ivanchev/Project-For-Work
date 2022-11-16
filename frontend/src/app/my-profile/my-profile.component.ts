import { Component, OnInit } from '@angular/core';

import {ActivatedRoute,Router} from "@angular/router";

import {ApiserviceUsersService} from "../apiservice-users.service";


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  data:any;

 information:any;



  constructor(private ar:ActivatedRoute,
              private router:Router,
              private service:ApiserviceUsersService) { }

  ngOnInit(): void {

    let allInputs=document.querySelectorAll('input');
    let array=Array.from(allInputs);

    this.ar.queryParams.subscribe((params:any)=>{
      this.data=params;
    })

  this.service.getAllUsers().subscribe((res)=>{

    res.forEach((obj:any,index:any)=>{
      if(this.data.email===obj.email && this.data.password===obj.password){
         this.information=obj;
      }
    })

  })



  }


  urlEvent(event:any){
    event.preventDefault();

    let search=document.getElementsByClassName('search')[0] as HTMLInputElement;
    let form=document.getElementsByClassName('form')[0]as HTMLFormElement;

    if(search.value.includes('Sushi')){
      this.router.navigate(['/sushi']);
      search.value='';
    }else if(search.value.includes('Dishes')){
      this.router.navigate(['/dishes']);
      search.value='';
    }else if(search.value.includes('Pizza')){
      this.router.navigate(['/pizza']);
      search.value='';
    }else if(search.value.includes('Burgers')){
      this.router.navigate(['/burgers']);
      search.value='';
    }else if(search.value.includes('Salads')){
      this.router.navigate(['/salads']);
      search.value='';
    }else if(search.value.includes('Deserts')){
      this.router.navigate(['/deserts']);
      search.value='';
    }else if(search.value.includes('Liquids')){
      this.router.navigate(['/liquids']);
      search.value='';
    }else{
      search.style.color='red'
    }




    if(search.value.includes('sushi')){
      this.router.navigate(['/sushi']);
      search.value='';
    }else if(search.value.includes('dishes')){
      this.router.navigate(['/dishes']);
      search.value='';
    }else if(search.value.includes('pizza')){
      this.router.navigate(['/pizza']);
      search.value='';
    }else if(search.value.includes('burgers')){
      this.router.navigate(['/burgers']);
      search.value='';
    }else if(search.value.includes('salads')){
      this.router.navigate(['/salads']);
      search.value='';
    }else if(search.value.includes('deserts')){
      this.router.navigate(['/deserts']);
      search.value='';
    }else if(search.value.includes('liquids')){
      this.router.navigate(['/liquids']);
      search.value='';
    }else{
      search.style.color='red'
    }


  }



  id:any;

 changing(event:any){

    event.preventDefault()



 let allInputs=document.querySelectorAll('input');
 let inputs=Array.from(allInputs);
   console.log(inputs)

   let userName=inputs[1]as HTMLInputElement;

   let firstName=inputs[2]as HTMLInputElement;
   let lastName=inputs[3]as HTMLInputElement;
    let  email=inputs[4]as HTMLInputElement;
     let password=inputs[5]as HTMLInputElement;
    let repeatPassword=inputs[6]as HTMLInputElement;
    let phoneNumber=inputs[7]as HTMLInputElement;
     let sex=inputs[8]as HTMLInputElement;
    let  securityQuestion=inputs[9]as HTMLInputElement;



   let country=inputs[10]as HTMLInputElement;
    let  town=inputs[11]as HTMLInputElement;
    let  postcode=inputs[12]as HTMLInputElement;
    let  addressLineOne=inputs[13]as HTMLInputElement;

  let  height=inputs[14]as HTMLInputElement;
     let favoriteFood=inputs[15]as HTMLInputElement;
    let  favoriteDrink=inputs[16]as HTMLInputElement;
     let weight=inputs[17]as HTMLInputElement;

     let objectUpdate={
     userName:userName.value,
     firstName:firstName.value,
     lastName:lastName.value,
     email:email.value,
     password:password.value,
     repeatPassword:repeatPassword.value,
     phoneNumber:phoneNumber.value,
     sex:sex.value,
     securityQuestion:securityQuestion.value,
     profilePicture:'',
     addresses:
       {
         country:country.value,
         town: town.value,
         postcode: postcode.value,
         addressLineOne: addressLineOne.value
       },
     addSomethingPersonal:[
       {
         height:height.value,
         favoriteFood:favoriteFood.value,
         favoriteDrink:favoriteDrink.value,
         weight:weight.value
       }
     ]
   }

   this.service.getAllUsers().subscribe((res:any)=>{
     res.forEach((object:any,index:any)=>{
       if(userName.value===object.userName && email.value===object.email){
         let ids=object._id;

         if(password.value===repeatPassword.value){
           this.service.updateUser(objectUpdate,ids).subscribe((res:any)=>{
             console.log(res)


           })
           event.currentTarget.value='Changed your Information!'
         }else{
           password.style.color='red';
           repeatPassword.style.color='red';
         }

       }
     })
   })





 }


}
