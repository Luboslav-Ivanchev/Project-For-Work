import { Component, OnInit } from '@angular/core';

import {ApiserviceUsersService} from "../apiservice-users.service";
import {globalScriptsByBundleName} from "@angular-devkit/build-angular/src/webpack/utils/helpers";

@Component({
  selector: 'app-change-passwords',
  templateUrl: './change-passwords.component.html',
  styleUrls: ['./change-passwords.component.css']
})
export class ChangePasswordsComponent implements OnInit {

  constructor(private service:ApiserviceUsersService) { }

  ngOnInit(): void {
    let body=document.body.children;
    let appRoot=body[0].children;
    let secondBody=appRoot[0].children;
    let appNavbar=secondBody[0]as HTMLElement;
    appNavbar.remove()

    let footer=secondBody[2]as HTMLElement;
    footer.remove()




  }

  changing(event:any){
    event.preventDefault();

    let inputs=document.querySelectorAll('input');

    let emailInput=inputs[0]as HTMLInputElement;
    let passwordInput=inputs[1]as HTMLInputElement;
    let repeatPasswordInput=inputs[2]as HTMLInputElement;

    this.service.getAllUsers().subscribe((res:any)=>{
      res.forEach((object:any,index:any)=>{

        if (emailInput.value===object.email){

          let id=object._id;

          let objectUpdate={
            userName:object.userName,
            firstName:object.firstName,
            lastName:object.lastName,
            email:object.email,
            password:passwordInput.value,
            repeatPassword:repeatPasswordInput.value,
            phoneNumber:object.phoneNumber,
            sex:object.sex,
            securityQuestion:object.securityQuestion,
            profilePicture:object.profilePicture,
            addresses:
              {
                country: object.addresses.country,
                town: object.addresses.town,
                postcode: object.addresses.postcode,
                addressLineOne: object.addresses.addressLineOne
              },
            addSomethingPersonal:[
              {
                height:object.addSomethingPersonal[0].height,
                favoriteFood:object.addSomethingPersonal[0].favoriteFood,
                favoriteDrink:object.addSomethingPersonal[0].favoriteDrink,
                weight:object.addSomethingPersonal[0].weight
              }
            ]
          }

            this.service.updateUser(objectUpdate,id).subscribe((res:any)=>{
              console.log(res)
            })
              let p=document.getElementsByClassName('p')[0]as HTMLElement;
          p.style.display='block';

        }else if(emailInput.value!==object.email){
          emailInput.style.color='red';
        }
      })
    })



  }

}
