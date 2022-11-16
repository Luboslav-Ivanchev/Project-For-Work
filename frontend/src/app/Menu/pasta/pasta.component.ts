import { Component, OnInit } from '@angular/core';

import {ApiserviceCargoService} from "../../apiservice-cargo.service";

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.component.html',
  styleUrls: ['./pasta.component.css']
})
export class PastaComponent implements OnInit {

  constructor(private service:ApiserviceCargoService) { }

  ngOnInit(): void {
  }

  weight:any;
  price:any;
  string:any;

  weightNumber:any;
  result:any;

  priceNumber:any;
  res:any;

  change(event:any){

    event.preventDefault();

   let dataKey=event.currentTarget.getAttribute('data-key');

    let pText=document.querySelectorAll<HTMLElement>('.weightPrice');
    let array=Array.from(pText);

    array.forEach(p=>{

      let key=p.getAttribute('data-key');

      if(Number(dataKey)===Number(key)){
        this.string=p.textContent;
        this.price=this.string.substr(0,5)
        this.weight=this.string.substr(10,3);
      }
    })

    let inputsWeight=document.querySelectorAll('.weight');
    let arrayInput=Array.from(inputsWeight);
    arrayInput.forEach(inputWeight=>{
      let key=inputWeight.getAttribute('data-key');
      let i=inputWeight as HTMLInputElement;
      if(Number(dataKey)===Number(key)){
        i.value=this.weight;
      }

  })

    let inputsPrice=document.querySelectorAll('.prices')
    let arrayPrices=Array.from(inputsPrice);
    arrayPrices.forEach(inputPrice=>{
      let key=inputPrice.getAttribute('data-key');
      let i=inputPrice as HTMLInputElement;

      if(Number(dataKey)===Number(key)){
      i.value=this.price;
    }})


  }


  minus(event:any){

    let dataKey=event.currentTarget.getAttribute('data-key');

    let weightInputs=document.querySelectorAll('.weight');
    let arrayWeight=Array.from(weightInputs);
    arrayWeight.forEach(weightI=>{
      let iWeight=weightI as HTMLInputElement;

      let dataKeyInputWeight=iWeight.getAttribute('data-key');
      if(Number(dataKeyInputWeight)===Number(dataKey)){
        this.weightNumber=iWeight.value
        this.result=Number(this.weightNumber)-Number(this.weight);

        iWeight.value=this.result;

      }
    })


    let priceInputs=document.querySelectorAll('.prices');
    let arrayPrice=Array.from(priceInputs);
    arrayPrice.forEach(iPrice=>{
      let priceI=iPrice as  HTMLInputElement;
      let dataKeyInputPrice=priceI.getAttribute('data-key');
      if(Number(dataKeyInputPrice)===Number(dataKey)){
        this.priceNumber=priceI.value;
        this.res=Number(this.priceNumber)-Number(this.price);
        priceI.value=this.res;
      }
    })



  }

  plus(event:any){

    let dataKey=event.currentTarget.getAttribute('data-key');

    let weightInputs=document.querySelectorAll('.weight');
    let arrayWeight=Array.from(weightInputs);
    arrayWeight.forEach(weightI=>{
      let iWeight=weightI as HTMLInputElement;

      let dataKeyInputWeight=iWeight.getAttribute('data-key');
      if(Number(dataKeyInputWeight)===Number(dataKey)){
        this.weightNumber=iWeight.value
        this.result=Number(this.weightNumber)+Number(this.weight);

        iWeight.value=this.result;

      }
    })


    let priceInputs=document.querySelectorAll('.prices');
    let arrayPrice=Array.from(priceInputs);
    arrayPrice.forEach(iPrice=>{
      let priceI=iPrice as  HTMLInputElement;
      let dataKeyInputPrice=priceI.getAttribute('data-key');
      if(Number(dataKeyInputPrice)===Number(dataKey)){
        this.priceNumber=priceI.value;
        this.res=Number(this.priceNumber)+Number(this.price);
        priceI.value=this.res;
      }
    })

  }

  buyElement(event:any){
    let divParent=event.currentTarget.parentElement.parentElement.parentElement as HTMLElement;
   let array=Array.from(divParent.children)
    console.log(array)

    let nav=array[0]as HTMLElement;
   let img=nav.children;
    let imageSrc=`${img[0].getAttribute('src')}`
    let url=imageSrc.substr(3,100)
    let article=array[1]as HTMLElement;
    let children=article.children
    let head=children[0]
     let name=head.textContent;


    let text=children[1]as HTMLElement;
    let info=text.textContent;


    let textPriceWeight=children[2]as HTMLElement;
    let string=`${textPriceWeight.textContent}`;
    let price=string.substr(0,5)

    let weight=string.substr(10,3);


    let div=children[4]as HTMLElement;
    let divChildren=div.children;

    let inputWeight=divChildren[2]as HTMLInputElement;

    let inputPrice=divChildren[4]as HTMLInputElement;


 let object={}


    if(inputWeight.value==='' && inputPrice.value===''){

      object={
        image:url,
        name:name,
        price:price,
        weight:weight,
        information:info,
        startedPrice:price,
        startedWeight:weight
      }

      this.service.postData(object).subscribe((res:any)=>{
        console.log(res)
      })

      let p=document.createElement('p');
      p.style.textAlign='center'
      p.style.fontSize='20px'
      p.textContent=`Added in the cart`;

     article.appendChild(p)

    }else{

      object={

        image:url,
        name:name,
        price:inputPrice.value,
        weight:inputWeight.value,
        information:info,
        startedPrice:price,
        startedWeight:weight

      }


      this.service.postData(object).subscribe((res:any)=>{
        console.log(res)
      })

      let p=document.createElement('p');
      p.style.textAlign='center'
      p.style.fontSize='20px'
      p.textContent=`Added in the cart`;
      article.appendChild(p)

    }


  }

}
