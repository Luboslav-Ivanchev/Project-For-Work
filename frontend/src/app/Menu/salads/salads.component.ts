import { Component, OnInit } from '@angular/core';

import {ApiserviceCargoService} from "../../apiservice-cargo.service";

@Component({
  selector: 'app-salads',
  templateUrl: './salads.component.html',
  styleUrls: ['./salads.component.css']
})
export class SaladsComponent implements OnInit {

  constructor(private service:ApiserviceCargoService) { }

  information:any;

  infoSalads=[
    [
    {  id: 1,img:'../../../assets/salats/fit_600_376.png',headerInfo:'Rigoletto salad',price:'9.99',weight:'350',
      text:'Tuna fish, tomatoes, cucumbers, egg, mixed green salads, olives, Feta sauce.'},
    {  id: 2,img:'../../../assets/salats/fit_600_376 (1).png',headerInfo:'Cob salad',price:'13.49',weight: '430',
      text:'Mixed green salads, bacon, grilled chicken fillet, tomatoes, egg, red onion, dressing, parmesan, avocado and feta sauce.'},
    {  id: 3,img:'../../../assets/salats/fit_600_376 (2).png',headerInfo:'Fitnes',price:'9.69',weight:' 390',
      text:'Spinach, carrots, beets, cucumbers, cauliflower, Philadelphia mousse with fennel, pumpkin seeds, sesame, dressing.'},
    {  id: 4,img:'../../../assets/salats/fit_600_376 (3).png',headerInfo:'The avocado storm',price:'14.99',weight:'400',
      text:'Burrata, tomatoes, avocado, arugula, pesto, Maldon salt and balsamic reduction.'},
    {  id: 5,img:'../../../assets/salats/fit_600_376 (4).png',headerInfo:'Golden autumn',price:'8.99',weight:'350',
      text:'Spinach, quinoa, roasted pumpkin, pomegranate, grapes, caramelized walnuts, truffle balsamic vinaigrette, sesame.'},
    {  id: 6,img:'../../../assets/salats/fit_600_376 (5).png',headerInfo:'Corsica salad',price:'9.99',weight:'390',
      text:'Hummus, chickpeas, tomatoes, avocados, cucumbers, olives, red and green onions, parsley, olive oil.'},
    {  id: 7,img:'../../../assets/salats/fit_600_376 (6).png',headerInfo:'Grapes and cheese',price:'10.49',weight:'290',
      text:'White grapes, mixed salads and arugula, Irish cheddar, gouda, blue cheese, dried apricots, caramelized walnuts, aromatic dressing.'},
    {  id: 8,img:'../../../assets/salats/fit_600_376 (7).png',headerInfo:'Salad with quinoa and white fish',price:'12.99',weight:'320',
      text:'Pulled beef with caramelized onions, Irish cheddar, Philadelphia, mushroom mayo, tortilla and fries.'},
    {  id: 9,img:'../../../assets/salats/fit_600_376 (8).png',headerInfo:'Crispy Chicken caeser',price:'13.69',weight:'290',
      text:'Crispy chicken fillet, mixed green salads, crispy bacon, parmesan, croutons, Caesar sauce.'},
    {  id: 10,img:'../../../assets/salats/fit_600_376 (9).png',headerInfo:'Spinach with quinoa',price:'11.29',weight:'400',
      text:'Quinoa, spinach, tomatoes, roasted pepper, egg, cheese, soy-mustard dressing.'},
    {  id: 11,img:'../../../assets/salats/fit_600_376 (10).png',headerInfo:'Salad luxury',price:'12.29',weight:'370',
      text:'Two tender BBQ chicken breasts, avocado, mixed green salads, tomatoes, egg, soy-mustard dressing.'},
    {  id: 12,img:'../../../assets/salats/fit_600_376 (11).png',headerInfo:'Crispy squid caesar',price:'13.99',weight:'280',
      text:'Mixed green salads, baked bacon, crispy squid, croutons, parmesan, Caesar sauce.'},
    {  id: 13,img:'../../../assets/salats/fit_600_376 (12).png',headerInfo:'Shopska salad',price:'8.69',weight:'390',
      text:'Tomatoes, cucumbers, cheese, red onion, parsley, olive oil.'},
    {  id: 14,img:'../../../assets/salats/fit_600_376 (13).png',headerInfo:'Greek salad',price:'8.99',weight:'370',
      text:'Tomatoes, cucumbers, green and red pepper, red onion, cheese, olives, aromatic olive oil, oregano, parsley and black pepper.'},
    {  id: 15,img:'../../../assets/salats/fit_600_376 (14).png',headerInfo:'Wakame',price:'6.79',weight:'140',
      text:'Crispy seaweed with sesame.'}

  ]
  ]

  ngOnInit(): void {

  for(let data of this.infoSalads){
    this.information=data
  }

  }

  withoutChicken(event:any){
    let divsBox=document.getElementsByClassName('container')[0];
    let array=Array.from(divsBox.children);

    let x2=array[2]as HTMLElement;

    if (x2.style.display === "none") {
      x2.style.display = "block";
    } else {
      x2.style.display = "none";
    }


    let x6=array[6]as HTMLElement;

    if (x6.style.display === "none") {
      x6.style.display = "block";
    } else {
      x6.style.display = "none";
    }


    let x7=array[7]as HTMLElement;

    if (x7.style.display === "none") {
      x7.style.display = "block";
    } else {
      x7.style.display = "none";
    }

    let x8=array[8]as HTMLElement;

    if (x8.style.display === "none") {
      x8.style.display = "block";
    } else {
      x8.style.display = "none";
    }


    let x9=array[9]as HTMLElement;

    if (x9.style.display === "none") {
      x9.style.display = "block";
    } else {
      x9.style.display = "none";
    }

    let x10=array[10]as HTMLElement;

    if (x10.style.display === "none") {
      x10.style.display = "block";
    } else {
      x10.style.display = "none";
    }
    let x11=array[11]as HTMLElement;

    if (x11.style.display === "none") {
      x11.style.display = "block";
    } else {
      x11.style.display = "none";
    }


  }

  withOutFish(event:any){

    let divsBox=document.getElementsByClassName('container')[0];
    let array=Array.from(divsBox.children);

    let x0=array[0]as HTMLElement;
    let x5=array[5]as HTMLElement;
    let x7=array[7]as HTMLElement;

    if (x0.style.display === "none") {
      x0.style.display = "block";
    } else {
      x0.style.display = "none";
    }

    if (x5.style.display === "none") {
      x5.style.display = "block";
    } else {
      x5.style.display = "none";
    }

    if (x7.style.display === "none") {
      x7.style.display = "block";
    } else {
      x7.style.display = "none";
    }

  }

  newSalads(event:any){

    let divsBox=document.getElementsByClassName('container')[0];
    let array=Array.from(divsBox.children);

    let x3=array[3]as HTMLElement;
    let x4=array[4]as HTMLElement;
    let x1=array[1]as HTMLElement;
    let x8=array[8]as HTMLElement;
    let x13=array[13]as HTMLElement


    if (x3.style.display === "none") {
      x3.style.display = "block";
    } else {
      x3.style.display = "none";
    }

    if (x4.style.display === "none") {
      x4.style.display = "block";
    } else {
      x4.style.display = "none";
    }

    if (x1.style.display === "none") {
      x1.style.display = "block";
    } else {
      x1.style.display = "none";
    }

    if (x8.style.display === "none") {
      x8.style.display = "block";
    } else {
      x8.style.display = "none";
    }

    if (x13.style.display === "none") {
      x13.style.display = "block";
    } else {
      x13.style.display = "none";
    }


  }

  buyElement(event:any){

    event.preventDefault();

    let divParent=event.currentTarget.parentElement.parentElement as HTMLElement;
    let array=Array.from(divParent.children);
    console.log(array)

    let img=array[0].children;
    let image=img[0]as HTMLElement;
    let url=`${image.getAttribute('src')}`
    let imageSrc=url.substr(3,100)


    let h1=array[1]
    let header=h1.textContent;

    let ul=array[2]as HTMLElement;
    let lis=ul.children;
    let li=lis[0]as HTMLElement;
    let textWeightPrice=`${li.textContent}`;
    let price=textWeightPrice.substr(0,5)

    let weight=textWeightPrice.substr(10,4)


    let pDisplay=array[4]as HTMLElement;


    let object={
      image:imageSrc,
      name:header,
      price:price,
      weight:weight,
      information:pDisplay.textContent,
      startedPrice:price,
      startedWeight:weight
    }

    this.service.postData(object).subscribe((res:any)=>{
      console.log(res)
    })

    let p=document.createElement('p');
    p.textContent='Add to cart';
    p.style.fontSize='20px';
    p.style.textAlign='center';

    divParent.appendChild(p)




  }

}
