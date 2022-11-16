import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";
import {ApiserviceUsersService} from "../../apiservice-users.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  loginStatus$:any;

  constructor(private activatedRouter:ActivatedRoute,
              private router:Router,
              private service:ApiserviceUsersService,
              ) { }

   login:any;
  url:any;

  ngOnInit(): void {

      let url=window.location.href;
    console.log(url)

    this.url=url;

    if(url.includes('my-profile')){
    this.login='logged in'
    }


    this.loginStatus$=this.service.isLoggedIn



  }

logout(event:any){

    this.router.navigate(['/home'])

  this.service.logout();
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

}
