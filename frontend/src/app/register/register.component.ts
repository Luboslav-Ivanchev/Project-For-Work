import { Component, OnInit } from '@angular/core';

import {ApiserviceUsersService} from "../apiservice-users.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private serviceUsers:ApiserviceUsersService) { }


  gender:any;

  data:any;

  ngOnInit(): void {


  }

  add(event:any){

    event.preventDefault()

    let  div=<HTMLFormElement>document.getElementById('addInputs');
    div.style.display='block';

  }

  hide(event:any) {
        event.preventDefault();
        let div=<HTMLFormElement>document.getElementById('addInputs');
        div.style.display='none';
      }

      myNewFunction(event:any){
        this.gender=event.currentTarget.value;
      }


      registration(event:any){
     event.preventDefault();

     let allInputs=document.querySelectorAll('input')
        let array=Array.from(allInputs);

        let usernameInput=array[1]as HTMLInputElement;


        let firstNameInput=array[2]as HTMLInputElement;

        let  lastNameInput=array[3]as HTMLInputElement;

        let emailInput=array[4]as HTMLInputElement;

     let passwordInput=array[5]as HTMLInputElement;

        let repeatPasswordInput=array[6]as HTMLInputElement;

        let phoneNumberInput=array[7]as HTMLInputElement;



        let  securityQuestionInput=array[8]as HTMLInputElement;


        let countryInput=array[9]as HTMLInputElement;


        let  townInput=array[10]as HTMLInputElement;

                  let    postcodeInput=array[11]as HTMLInputElement;

         let addressLineOneInput=array[12]as HTMLInputElement;

       let   heightInput=array[13]as HTMLInputElement;


          let   favoriteFoodInput=array[14]as HTMLInputElement;

        let favoriteDrinkInput=array[15]as HTMLInputElement;

        let weightInput=array[16]as HTMLInputElement;




         let object={
               userName:usernameInput.value,
              firstName:firstNameInput.value,
                lastName:lastNameInput.value,
            email:emailInput.value,
                password:passwordInput.value,
               repeatPassword:repeatPasswordInput.value,
               phoneNumber:phoneNumberInput.value,
              sex:this.gender,
               securityQuestion:securityQuestionInput.value,
                profilePicture:'put your image',
                addresses:
                {
                    country: countryInput.value,
                  town: townInput.value,
                  postcode: postcodeInput.value,
                   addressLineOne: addressLineOneInput.value
                },
               addSomethingPersonal:[
                {
                  height:heightInput.value,
                    favoriteFood:favoriteFoodInput.value,
                  favoriteDrink:favoriteDrinkInput.value,
                  weight:weightInput.value,
                  }
              ]
             }

          let div=document.getElementsByClassName('visible-div')[0]as HTMLElement;

      let   validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

              if(usernameInput.value==='' && emailInput.value==='' && passwordInput.value==='' && repeatPasswordInput.value==''){
                usernameInput.style.borderColor='red';
                emailInput.style.borderColor='red';
                passwordInput.style.borderColor='red';
                repeatPasswordInput.style.borderColor='red';
              } else if(emailInput.value.match(validRegex)){

                console.log(div)
                let p=document.createElement('p');
                p.textContent='You made your registration!'
                p.style.fontSize='20px'
                div.append(p)

                this.serviceUsers.postUser(object).subscribe((res)=>{
                  console.log(res)


                })
              }else if(!emailInput.value.match(validRegex)){
                emailInput.style.borderColor='red'
              }




     };


}
