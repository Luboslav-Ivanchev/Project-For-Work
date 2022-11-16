import { Component, OnInit } from '@angular/core';

import {ActivatedRoute,Router} from "@angular/router";
import {LoginComponent} from "../login/login.component";

import {ApiserviceCargoService} from "../apiservice-cargo.service";
import {loadSecondaryEntryPointInfoForApfV14} from "@angular/compiler-cli/ngcc/src/utils";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private service:ApiserviceCargoService) { }

 array:any;
  id:any;

  data:any;
  idElement:any;

  resultPrice:any;
  resultWeight:any;


  plusRes:any;
  plusResult:any;

  plusPrice:any;
  plusWeight:any;

  startedPrice:any;
  startedWeight:any;


  minusRes:any;
  minusResult:any;

  minusPrice:any;
  minusWeight:any;


  ngOnInit(): void {

   this.service.getAllData().subscribe((res:any)=>{


     this.array=res;

     this.array.forEach((element:any)=>{
       this.id=element._id;

     })

   })



  }

  deleteElement(event:any){
    let id=event.target.id;

    let parentElement=event.currentTarget.parentElement.parentElement as HTMLElement;

    this.service.deleteDataId(id).subscribe((res)=>{
      console.log(res)
    })
    parentElement.remove()

  }

  change(event:any){

  let divParent=event.currentTarget.parentElement.parentElement;
    let children=divParent.children;
    console.log(children);

    let divProductLinePrice=children[4]as HTMLElement;
    let divProductLineWeight=children[5]as HTMLElement;


    let p=`${divProductLinePrice.textContent}`;
    let w=`${divProductLineWeight.textContent}`;

    let price=p.substr(0,6)
    let weight=w.substr(0,6)

    let divPrice=divProductLinePrice.children[0]as HTMLInputElement;
    let divWeight=divProductLineWeight.children[0]as HTMLInputElement;


    let pn=Number(price)
    let wn=Number(weight)

    this.resultPrice=pn;
    this.resultWeight=wn;
    divPrice.value=this.resultPrice;
    divWeight.value=this.resultWeight;


  }

  plus(event:any){

    let divParent=event.currentTarget.parentElement.parentElement;
    let children=divParent.children;

    let divProductLinePrice=children[4]as HTMLElement;
    let divProductLineWeight=children[5]as HTMLElement;

    let divPrice=divProductLinePrice.children[0]as HTMLInputElement;
    let divWeight=divProductLineWeight.children[0]as HTMLInputElement;


     this.plusWeight=Number(divWeight.value);

    this.plusPrice=Number(divPrice.value);




    this.service.getAllData().subscribe((res)=>{
      res.forEach((info:any)=>{

         if(Number(divPrice.value)===Number(info.price) && Number(divWeight.value)===Number(info.weight)){
           console.log(info)
           this.plusRes=this.plusPrice+Number(info.startedPrice);
           this.plusResult=this.plusWeight+Number(info.startedWeight);
           this.idElement=info._id;
           divPrice.value=this.plusRes;
           divWeight.value=this.plusResult

           console.log(this.idElement)
           this.data=
             {
               image:info.image,
               name:info.name,
               price: divPrice.value,
               weight: divWeight.value,
               information:info.information,
               startedPrice:info.startedPrice,
               startedWeight:info.startedWeight

             }

         }

      })

    })




  }

  minus(event:any){

    let divParent=event.currentTarget.parentElement.parentElement;
    let children=divParent.children;

    let divProductLinePrice=children[4]as HTMLElement;
    let divProductLineWeight=children[5]as HTMLElement;

    let divPrice=divProductLinePrice.children[0]as HTMLInputElement;
    let divWeight=divProductLineWeight.children[0]as HTMLInputElement;


    this.minusWeight=Number(divWeight.value);

    this.minusPrice=Number(divPrice.value);




    this.service.getAllData().subscribe((res)=>{
      res.forEach((info:any)=>{

        if(Number(divPrice.value)===Number(info.price) && Number(divWeight.value)===Number(info.weight)){
          console.log(info)
          this.minusRes=this.minusPrice-Number(info.startedPrice);
          this.minusResult=this.minusWeight-Number(info.startedWeight);
          this.idElement=info._id;
          divPrice.value=this.minusRes;
          divWeight.value=this.minusResult

          console.log(this.idElement)
          this.data=
            {
              image:info.image,
              name:info.name,
              price: divPrice.value,
              weight: divWeight.value,
              information:info.information,
              startedPrice:info.startedPrice,
              startedWeight:info.startedWeight

            }

        }

      })

    })




  }


  update(event:any){


    this.service.updateDataId(this.data,this.idElement).subscribe((res:any)=>{
      console.log(res)
    })

  }


  checkout(event:any) {
    event.preventDefault();

    let divDisplay = document.getElementsByClassName('displayForm')[0] as HTMLElement;
    divDisplay.style.display = 'block';

    let divPrice = document.querySelectorAll('.product-line-price');
    let arrayPrice = Array.from(divPrice)

 let total=0;

    arrayPrice.forEach((divsPrice,index)=>{
      if(index%2==0){
        let price=`${divsPrice.textContent}`;

        let priceNumber=Number(price.substr(0,7))
        total+=priceNumber;



        let inputLv=document.getElementsByClassName('lv')[0]as HTMLInputElement;

        inputLv.value=`${total.toFixed(2)} lv`;


      }
    })


  }




}
