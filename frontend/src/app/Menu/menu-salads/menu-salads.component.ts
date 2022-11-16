import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ApiserviceCargoService} from "../../apiservice-cargo.service";

@Component({
  selector: 'app-menu-salads',
  templateUrl: './menu-salads.component.html',
  styleUrls: ['./menu-salads.component.css']
})
export class MenuSaladsComponent implements OnInit {

  constructor(private param:ActivatedRoute,
              private service:ApiserviceCargoService) { }

  getMenuSalads:any;
  infoArray:any;
  resultPrice:any;
  resultWeight:any;


  infoSalads=[
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

  ngOnInit(): void {
   this.getMenuSalads=this.param.snapshot.paramMap.get('id');

    for(let data of this.infoSalads){

      if(data.headerInfo===this.getMenuSalads){
        this.infoArray=data;
      }
    }

  }



  need(event:any){
    event.preventDefault()

    let div=document.querySelectorAll<HTMLElement>('.buttonsPlusMinus')[0]

    div.style.display='block';

    let inputWeight=document.querySelectorAll('.weight');

    let array=Array.from(inputWeight);
    array.forEach((i:any)=>{
      let input=i as HTMLInputElement;
      input.value=this.infoArray.weight;
    });

    let inputPrice=document.querySelectorAll('.prices');
    let arr=Array.from(inputPrice);
    arr.forEach((i:any)=>{
      let input=i as HTMLInputElement;
      input.value=this.infoArray.price;
    })

  }

  plus(event:any){
    event.preventDefault();


    let inputWeight=document.querySelectorAll('.weight');

    let array=Array.from(inputWeight);
    array.forEach((i:any)=>{
      let input=i as HTMLInputElement;
      this.resultWeight=Number(this.infoArray.weight)+Number(input.value);
      input.value=this.resultWeight;
    });

    let inputPrice=document.querySelectorAll('.prices');
    let arr=Array.from(inputPrice);
    arr.forEach((i:any)=>{
      let input=i as HTMLInputElement;
      this.resultPrice=Number(this.infoArray.price)+Number(input.value);
      input.value=this.resultPrice;

    })

  }

  minus(event:any){
    event.preventDefault()


    let inputWeight=document.querySelectorAll('.weight');

    let array=Array.from(inputWeight);
    array.forEach((i:any)=>{
      let input=i as HTMLInputElement;
      this.resultWeight=Number(input.value)-Number(this.infoArray.weight);
      input.value=this.resultWeight;

    });

    let inputPrice=document.querySelectorAll('.prices');
    let arr=Array.from(inputPrice);
    arr.forEach((i:any)=>{
      let input=i as HTMLInputElement;
      this.resultPrice=Number(input.value)-Number(this.infoArray.price);
      input.value=this.resultPrice;
    })


  }


  buyElement(event:any){
    event.preventDefault()
    let divParent=event.currentTarget.parentElement.parentElement as HTMLElement;

    let array=Array.from(divParent.children)
    console.log(array)

    let header=array[0].textContent;
    let image=`${array[1].getAttribute('src')}`;
    let src=image.substr(3,100)

    let list=array[2]as HTMLElement;
    let string=`${list.textContent}`

    let price=string.substr(0,4)
    let weight=string.substr(7,3)


    let inputs=array[5]as HTMLElement;
    let child=inputs.children[0]
    let children=child.children
    let inputPrice=children[2]as HTMLInputElement;
    let inputWeight=children[4]as HTMLInputElement;

    let info=array[3]as HTMLElement;


    let object={};

    if(inputs.style.display==='none'){


      object= {
        image: src,
        name: header,
        price: price,
        weight: weight,
        information: info.textContent,
        startedPrice:price,
        startedWeight:weight
      }

      this.service.postData(object).subscribe((res)=>{
        console.log(res)
      })

      let p=document.createElement('p');
      p.style.textAlign='center'
      p.style.fontSize='20px'
      p.textContent=`Added in the cart`;

      divParent.appendChild(p)

    }else if(inputs.style.display==='block'){
      object= {
        image: src,
        name: header,
        price: inputWeight.value,
        weight:  inputPrice.value,
        information: info.textContent,
        startedPrice:price,
        startedWeight:weight
      }

      this.service.postData(object).subscribe((res)=>{
        console.log(res)
      })

      let p=document.createElement('p');
      p.style.textAlign='center'
      p.style.fontSize='20px'
      p.textContent=`Added in the cart`;

      divParent.appendChild(p)

    }
  }

}
