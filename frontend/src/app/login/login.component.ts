import { Component, OnInit } from '@angular/core';

import {ApiserviceUsersService} from "../apiservice-users.service";

import {ActivatedRoute,Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  LoginStatus=new BehaviorSubject(null);

  constructor(private serviceUsers:ApiserviceUsersService,
              private _ar:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {




  }

  login(event:any){
    event.preventDefault();
  this.serviceUsers.getAllUsers().subscribe((res)=>{



    let inputs=document.querySelectorAll('input');
    let arrayInputs=Array.from(inputs);
    let usernameInput=arrayInputs[1]as HTMLInputElement;
    let emailInput=arrayInputs[2]as HTMLInputElement;
    let passwordInput=arrayInputs[3]as HTMLInputElement;
    let repeatPasswordInput=arrayInputs[4]as HTMLInputElement;

    res.forEach((object:any)=>{

       if(usernameInput.value===object.userName && emailInput.value===object.email
         && passwordInput.value===object.password && repeatPasswordInput.value===object.repeatPassword){

         this.router.navigate(['/my-profile'],{queryParams:object})


       }else if(usernameInput.value!==object.userName && emailInput.value===object.email
         && passwordInput.value===object.password && repeatPasswordInput.value===object.repeatPassword ){
         usernameInput.style.borderColor='red'
       }else if(emailInput.value!==object.email && usernameInput.value===object.userName
         && passwordInput.value===object.password && repeatPasswordInput.value===object.repeatPassword ){
         emailInput.style.borderColor='red';
       }else if(passwordInput.value!==object.password && usernameInput.value===object.userName && emailInput.value===object.email
         && repeatPasswordInput.value===object.repeatPassword ){
         passwordInput.style.borderColor='red';
       }else if(repeatPasswordInput.value!==object.repeatPassword && usernameInput.value===object.userName && emailInput.value===object.email
         && passwordInput.value===object.password ){
         repeatPasswordInput.style.borderColor='red';
       }else if(usernameInput.value===object.userName && emailInput.value===object.email
         && passwordInput.value!==object.password && repeatPasswordInput.value!==object.repeatPassword ){
         passwordInput.style.borderColor='red';
         repeatPasswordInput.style.borderColor='red';
       }else if(usernameInput.value===object.userName && emailInput.value!==object.email
         && passwordInput.value===object.password && repeatPasswordInput.value!==object.repeatPassword ){
         emailInput.style.borderColor='red';
         repeatPasswordInput.style.borderColor='red';
       }else if(usernameInput.value===object.userName && emailInput.value!==object.email
         && passwordInput.value!==object.password && repeatPasswordInput.value===object.repeatPassword ){
         emailInput.style.borderColor='red';
         passwordInput.style.borderColor='red';
       }else if(usernameInput.value!==object.userName && emailInput.value===object.email
         && passwordInput.value===object.password && repeatPasswordInput.value!==object.repeatPassword ){
         usernameInput.style.borderColor='red';
         repeatPasswordInput.style.borderColor='red';
       }else if(usernameInput.value!==object.userName && emailInput.value===object.email
         && passwordInput.value!==object.password && repeatPasswordInput.value===object.repeatPassword ){
         usernameInput.style.borderColor='red';
         passwordInput.style.borderColor='red';
       }else if(usernameInput.value!==object.userName && emailInput.value!==object.email
         && passwordInput.value===object.password && repeatPasswordInput.value===object.repeatPassword ){
         usernameInput.style.borderColor='red';
         emailInput.style.borderColor='red';
       }






    })



  })
  }

}
