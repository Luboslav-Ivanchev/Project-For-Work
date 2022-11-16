import { Component, OnInit } from '@angular/core';

import {ApiserviceUsersService} from "../apiservice-users.service";


import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';



@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private userService:ApiserviceUsersService) { }

  ngOnInit(): void {
  }

  sendToEmail(event:any){
    event.preventDefault();

    let email=document.getElementById('user_email')as HTMLInputElement;
   let div=document.getElementsByClassName('row')[0]as HTMLElement;

    let p=document.createElement('p')
    p.textContent='Send it to your email!'


    this.userService.getAllUsers().subscribe((res:any)=>{

      res.forEach((object:any)=>{
        if(object.email===email.value){

          let  templateParams = {
            user: `${email.value}`,
            host: '12620116@nvna.eu',
            name: `${object.firstName}`,
            lastName: `${object.lastName}`,
            message:`http://localhost:4200/change-passwords    12620116@nvna.eu `,
           };


          emailjs.send('service_k4d7h5i','template_dj761kj',templateParams,'KLjNClI88IvD6G47G')
            .then(function(response) {
              console.log('SUCCESS!', response.status, response.text);
            }, function(err) {
              console.log('FAILED...', err);
            });

          div.append(p)
        }
      })

    })

  }

}
