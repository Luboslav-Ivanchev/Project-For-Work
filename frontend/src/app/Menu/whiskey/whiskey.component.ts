import { Component, OnInit } from '@angular/core';

import {ApiserviceCargoService} from "../../apiservice-cargo.service";

@Component({
  selector: 'app-whiskey',
  templateUrl: './whiskey.component.html',
  styleUrls: ['./whiskey.component.css']
})
export class WhiskeyComponent implements OnInit {

  weight:any;
  price:any;
  weightNumber:any;
  priceNumber:any;

  result:any;
  res:any;


  constructor(private service:ApiserviceCargoService) { }

  ngOnInit(): void {
  }

  single(event:any){

    let divContainer=document.getElementsByClassName('containerWhiskey')[0];
    let array=Array.from(divContainer.children);

    let w1=array[1]as HTMLElement;

    if (w1.style.display === "none") {
      w1.style.display = "block";
    } else {
      w1.style.display = "none";
    }


    let w4=array[4]as HTMLElement;

    if (w4.style.display === "none") {
      w4.style.display = "block";
    } else {
      w4.style.display = "none";
    }



  }

  malt(event:any){
    let divContainer=document.getElementsByClassName('containerWhiskey')[0];
    let array=Array.from(divContainer.children);


    let w1=array[3]as HTMLElement;

    if (w1.style.display === "none") {
      w1.style.display = "block";
    } else {
      w1.style.display = "none";
    }


    let w4=array[5]as HTMLElement;

    if (w4.style.display === "none") {
      w4.style.display = "block";
    } else {
      w4.style.display = "none";
    }


    let w7=array[7]as HTMLElement;

    if (w7.style.display === "none") {
      w7.style.display = "block";
    } else {
      w7.style.display = "none";
    }


  }

  blended(event:any){

    let divContainer=document.getElementsByClassName('containerWhiskey')[0];
    let array=Array.from(divContainer.children);

    let w2=array[2]as HTMLElement;

    if (w2.style.display === "none") {
      w2.style.display = "block";
    } else {
      w2.style.display = "none";
    }

    let w5=array[4]as HTMLElement;

    if (w5.style.display === "none") {
      w5.style.display = "block";
    } else {
      w5.style.display = "none";
    }


    let w1=array[1]as HTMLElement;

    if (w1.style.display === "none") {
      w1.style.display = "block";
    } else {
      w1.style.display = "none";
    }

  }


  change(event:any) {
    event.preventDefault()

    let button=document.querySelectorAll('.button3');
    let inputWeight=document.getElementsByClassName('weight')[0].getAttribute('data-key');
    let  inputPrice=document.getElementsByClassName('prices')[0].getAttribute('data-key');

    let arr=Array.from(button);

    //  arr.forEach(btn=>{
    //       btn.addEventListener('click',function (e) {
    //         e.preventDefault();
    //         console.log(e.currentTarget)
    //       })
    //     })

    let div=event.currentTarget.parentElement.parentElement;
    let evCurrent = event.currentTarget.getAttribute('data-key');
    let p=document.querySelectorAll('p');
    let array=Array.from(p)

    array.forEach(element=>{
      let dataKey=element.getAttribute('data-key');
      if(Number(dataKey)===Number(evCurrent)){
        this.weight=String(element.textContent).slice(11,15);
        this.price=String(element.textContent).slice(0,6);


        let inputsWeight=document.querySelectorAll('.weight');
        let iArr=Array.from(inputsWeight)
        iArr.forEach(input=>{
          let inputValueWeight=input as HTMLInputElement;
          let dataKeyInputWeight=input.getAttribute('data-key');

          if(Number(dataKeyInputWeight)===Number(evCurrent)){

            inputValueWeight.value=this.weight;

          }
        });


        let inputsPrice=document.querySelectorAll('.prices');
        let iP=Array.from(inputsPrice);
        iP.forEach(inputPrice=>{
          let inputValuePrice=inputPrice as HTMLInputElement;
          let dataKeyInputPrice=inputPrice.getAttribute('data-key');

          if(Number(dataKeyInputPrice)===Number(evCurrent)){
            inputValuePrice.value=this.price;
          }

        })

      }

    })


  }

  plus(event:any){
    event.preventDefault()

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
        priceI.value=this.res
      }
    })

  }

  minus(event:any){

    event.preventDefault();

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
        priceI.value=this.res
      }
    })


  }


  buyElement(event:any){
    event.preventDefault();
    let divParent=event.currentTarget.parentElement.parentElement as HTMLElement;
    let divChildren=divParent.children;


    let a=divChildren[0]as HTMLElement
    let image=a.children[0];
    let img=`${image.getAttribute('src')}`;
    let src=img.substr(3,100)

    let h1=divChildren[2]as HTMLElement;

    let ul=divChildren[3]as HTMLElement;
    let ulChild=ul.children[0];
    let pPriceWeight=ulChild.children[0]as HTMLElement;

    let textPriceWeight=`${pPriceWeight.textContent}`;

    let price=textPriceWeight.substr(0,6)
    let weight=textPriceWeight.substr(11,4)

    let divInputs=divChildren[5]as HTMLElement;
    let divI=divInputs.children;

    let inputWeight=divI[2]as HTMLInputElement;
    let inputPrice=divI[4]as HTMLInputElement;


    let object={}

    if(inputWeight.value=='' && inputPrice.value==''){

      object={
        image:src,
        name:h1.textContent,
        price:price,
        weight:weight,
        information:'',
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

      divParent.appendChild(p)

    }else{

      object={
        image:src,
        name:h1.textContent,
        price:inputPrice.value,
        weight:inputWeight.value,
        information:'',
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

      divParent.appendChild(p)

    }
  }

}
