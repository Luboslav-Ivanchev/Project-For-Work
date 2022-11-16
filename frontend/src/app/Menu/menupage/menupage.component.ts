import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ApiserviceCargoService} from "../../apiservice-cargo.service";

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private param:ActivatedRoute,
              private service:ApiserviceCargoService) { }
    getMenuId:any;

  informations:any;

  infoArray:any;

  resultPrice:any;
  resultWeight:any;

  info=[

      {  id: 1,img:'../../../assets/pizza/fit_600_376.png',headerInfo:'Peperoni',price:'16.99',weight:'390',
        text:'Spicy pepperoni salami, mozzarella, aromatic tomato sauce and fresh basil.'},
      {  id: 2,img:'../../../assets/pizza/fit_600_376 (1).png',headerInfo:'Caprice',price:'17.99',weight: '420',
        text:'Prosciutto Cotto, fresh mushrooms, artichoke, olives, mozzarella, aromatic tomato sauce, oregano and fresh basil.'},
      {  id: 3,img:'../../../assets/pizza/fit_600_376 (2).png',headerInfo:'Margarita',price:'17.99',weight:' 440',
        text:'Mozzarella, aromatic tomato sauce, oregano and fresh basil.'},
      {  id: 4,img:'../../../assets/pizza/fit_600_376 (3).png',headerInfo:'Ventricina',price:'14.99',weight:'360',
        text:'Ventricina salami, mozzarella, aromatic tomato sauce, fresh basil.'},
      {  id: 5,img:'../../../assets/pizza/fit_600_376 (4).png',headerInfo:'Margarita Extra',price:'18.99',weight:'380',
        text:'Mozzarella, buffalo mozzarella, aromatic tomato sauce, oregano and fresh basil.'},
      {  id: 6,img:'../../../assets/pizza/fit_600_376 (5).png',headerInfo:'Specs and mascarpone',price:'15.99',weight:'450',
        text:'Bacon, mascarpone cheese, Philadelphia cheese, aromatic tomato sauce and fresh basil.'},
      {  id: 7,img:'../../../assets/pizza/fit_600_376 (6).png',headerInfo:'Quattro Di Carne',price:'19.99',weight:'470',
        text:'Tender pulled beef, Prosciutto Cotto, spicy pepperoni salami, bacon, Scamortza cheese, mozzarella, aromatic tomato sauce, mushrooms and fresh basil.'},
      {  id: 8,img:'../../../assets/pizza/fit_600_376 (7).png',headerInfo:'Carbonara',price:'13.99',weight:'350',
        text:'Topped with crisp pieces of salt bacon, tender mushrooms, plenty of gooey cheese, and finished with a perfectly cooked egg , Carbonara Pizza is the pizza recipe you didn’t know was missing from your life.'},
      {  id: 9,img:'../../../assets/pizza/fit_600_376 (8).png',headerInfo:'Vegetariana',price:'17.99',weight:'530',
        text:'Grilled vegetables, artichoke, olives, cherry tomatoes, aromatic tomato sauce, fresh basil.'},
      {  id: 10,img:'../../../assets/pizza/fit_600_376 (9).png',headerInfo:'Truffle Salami',price:'21.99',weight:'460',
        text:'The pungent taste of truffle gives this pizza a luxurious flavour, but it being a Lo-Dough pizza.'},
      {  id: 11,img:'../../../assets/pizza/fit_600_376 (10).png',headerInfo:'Primavera',price:'15.99',weight:'370',
        text:'Mozzarella, homemade tomato sauce, olives, arugula, parmesan pesto and fresh cherry tomatoes.'},
      {  id: 12,img:'../../../assets/pizza/fit_600_376 (12).png',headerInfo:'Quattro Formagi',price:'18.99',weight:'470',
        text:'Mozzarella, gorgonzola, smoked scamorza, parmesan, cream, arugula, pomegranate.'},
    ]





  ngOnInit(): void {

    this.getMenuId=this.param.snapshot.paramMap.get('id')
    for(let data of this.info){

      if(data.headerInfo===this.getMenuId){
         this.informations=data;
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
       input.value=this.informations.weight;
     });

     let inputPrice=document.querySelectorAll('.prices');
     let arr=Array.from(inputPrice);
     arr.forEach((i:any)=>{
       let input=i as HTMLInputElement;
       input.value=this.informations.price;
     })

  }

  plus(event:any){
    event.preventDefault();


    let inputWeight=document.querySelectorAll('.weight');

    let array=Array.from(inputWeight);
    array.forEach((i:any)=>{
      let input=i as HTMLInputElement;
      this.resultWeight=Number(this.informations.weight)+Number(input.value);
      input.value=this.resultWeight;
    });

    let inputPrice=document.querySelectorAll('.prices');
    let arr=Array.from(inputPrice);
    arr.forEach((i:any)=>{
      let input=i as HTMLInputElement;
      this.resultPrice=Number(this.informations.price)+Number(input.value);
      input.value=this.resultPrice;

    })

  }

  minus(event:any){
    event.preventDefault()


    let inputWeight=document.querySelectorAll('.weight');

    let array=Array.from(inputWeight);
    array.forEach((i:any)=>{
      let input=i as HTMLInputElement;
      this.resultWeight=Number(input.value)-Number(this.informations.weight);
      input.value=this.resultWeight;

    });

    let inputPrice=document.querySelectorAll('.prices');
    let arr=Array.from(inputPrice);
    arr.forEach((i:any)=>{
      let input=i as HTMLInputElement;
      this.resultPrice=Number(input.value)-Number(this.informations.price);
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

    let price=string.substr(0,5)
    let weight=string.substr(8,3)


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
