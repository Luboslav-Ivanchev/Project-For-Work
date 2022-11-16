import { Component, OnInit } from '@angular/core';

import {ApiserviceCargoService} from "../../apiservice-cargo.service";

@Component({
  selector: 'app-deserts',
  templateUrl: './deserts.component.html',
  styleUrls: ['./deserts.component.css']
})
export class DesertsComponent implements OnInit {

  constructor(private service: ApiserviceCargoService) {
  }

  weight: any;
  price: any;

  weightNumber: any;
  priceNumber: any;

  result: any;
  res: any;

  ngOnInit(): void {
  }

  change(event: any) {
    event.preventDefault()

    let button = document.querySelectorAll('.button3');
    let inputWeight = document.getElementsByClassName('weight')[0].getAttribute('data-key');
    let inputPrice = document.getElementsByClassName('prices')[0].getAttribute('data-key');

    let arr = Array.from(button);

    //  arr.forEach(btn=>{
    //       btn.addEventListener('click',function (e) {
    //         e.preventDefault();
    //         console.log(e.currentTarget)
    //       })
    //     })

    let div = event.currentTarget.parentElement.parentElement;
    let evCurrent = event.currentTarget.getAttribute('data-key');
    let p = document.querySelectorAll('p');
    let array = Array.from(p)

    array.forEach(element => {
      let dataKey = element.getAttribute('data-key');
      if (Number(dataKey) === Number(evCurrent)) {
        this.weight = String(element.textContent).slice(9, 13)
        this.price = String(element.textContent).slice(0, 5);


        let inputsWeight = document.querySelectorAll('.weight');
        let iArr = Array.from(inputsWeight)
        iArr.forEach(input => {
          let inputValueWeight = input as HTMLInputElement;
          let dataKeyInputWeight = input.getAttribute('data-key');

          if (Number(dataKeyInputWeight) === Number(evCurrent)) {

            inputValueWeight.value = this.weight;

          }
        });


        let inputsPrice = document.querySelectorAll('.prices');
        let iP = Array.from(inputsPrice);
        iP.forEach(inputPrice => {
          let inputValuePrice = inputPrice as HTMLInputElement;
          let dataKeyInputPrice = inputPrice.getAttribute('data-key');

          if (Number(dataKeyInputPrice) === Number(evCurrent)) {
            inputValuePrice.value = this.price;
          }

        })

      }

    })


  }

  plus(event: any) {
    event.preventDefault()

    let dataKey = event.currentTarget.getAttribute('data-key');

    let weightInputs = document.querySelectorAll('.weight');
    let arrayWeight = Array.from(weightInputs);
    arrayWeight.forEach(weightI => {
      let iWeight = weightI as HTMLInputElement;

      let dataKeyInputWeight = iWeight.getAttribute('data-key');
      if (Number(dataKeyInputWeight) === Number(dataKey)) {
        this.weightNumber = iWeight.value
        this.result = Number(this.weightNumber) + Number(this.weight);

        iWeight.value = this.result;

      }
    })


    let priceInputs = document.querySelectorAll('.prices');
    let arrayPrice = Array.from(priceInputs);
    arrayPrice.forEach(iPrice => {
      let priceI = iPrice as HTMLInputElement;
      let dataKeyInputPrice = priceI.getAttribute('data-key');
      if (Number(dataKeyInputPrice) === Number(dataKey)) {
        this.priceNumber = priceI.value;
        this.res = Number(this.priceNumber) + Number(this.price);
        priceI.value = this.res
      }
    })

  }

  minus(event: any) {

    event.preventDefault();

    let dataKey = event.currentTarget.getAttribute('data-key');

    let weightInputs = document.querySelectorAll('.weight');
    let arrayWeight = Array.from(weightInputs);
    arrayWeight.forEach(weightI => {
      let iWeight = weightI as HTMLInputElement;

      let dataKeyInputWeight = iWeight.getAttribute('data-key');
      if (Number(dataKeyInputWeight) === Number(dataKey)) {
        this.weightNumber = iWeight.value
        this.result = Number(this.weightNumber) - Number(this.weight);

        iWeight.value = this.result;

      }
    })


    let priceInputs = document.querySelectorAll('.prices');
    let arrayPrice = Array.from(priceInputs);
    arrayPrice.forEach(iPrice => {
      let priceI = iPrice as HTMLInputElement;
      let dataKeyInputPrice = priceI.getAttribute('data-key');
      if (Number(dataKeyInputPrice) === Number(dataKey)) {
        this.priceNumber = priceI.value;
        this.res = Number(this.priceNumber) - Number(this.price);
        priceI.value = this.res
      }
    })


  }


  buyElement(event: any) {

    event.preventDefault();

    let divParent=event.currentTarget.parentElement.parentElement;
   let children=divParent.children

    let a=children[0]as HTMLElement;
   let img=`${a.children[0].getAttribute('src')}`
    let url=img.substr(3,100)

    let text=children[2]as HTMLElement;
    let headers=text.children;

    let i=headers[0]as HTMLElement
    let t=i.children[0]as HTMLElement;
    let pTextInfo=t.textContent;
    let i1=headers[1]as HTMLElement
    let t1=i1.children[0]as HTMLElement;
    let pTextHeader=t1.textContent;
     let weightPrice=`${pTextHeader}`

     let price=weightPrice.substr(0,5)
   let weight=weightPrice.substr(10,3)


    let name=children[1]as HTMLElement;


    let divInputs=children[4]as HTMLElement;
    let childrenInputs=divInputs.children;

     let inputWeight=childrenInputs[2]as HTMLInputElement;

    let inputPrice=childrenInputs[4]as HTMLInputElement;


     let object={}

    if(inputPrice.value==='' && inputWeight.value===''){


      object={
        image:url,
        name:name.textContent,
        price:price,
        weight:weight,
       information:pTextInfo,
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

    }else{
      object= {
        image: url,
        name: name.textContent,
        price: inputPrice.value,
        weight: inputWeight.value,
       information:pTextInfo,
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
