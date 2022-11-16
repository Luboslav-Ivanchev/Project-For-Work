import { Component, OnInit,Output,EventEmitter } from '@angular/core';

import {Router} from "@angular/router";

import {ApiserviceCargoService} from "../../apiservice-cargo.service";

@Component({
  selector: 'app-sushi',
  templateUrl: './sushi.component.html',
  styleUrls: ['./sushi.component.css']
})
export class SushiComponent implements OnInit {

  @Output() public sendData=new EventEmitter<object>();

  constructor(private route:Router,private service:ApiserviceCargoService) { }

  weight:any;
  price:any;

  weightNumber:any;
  priceNumber:any;

  result:any;
  res:any;


  ngOnInit(): void {
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
          this.weight=String(element.textContent).slice(9,13)
       this.price=String(element.textContent).slice(0,5);


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


combo(event:any){
    let divsBox=document.getElementsByClassName('container')[0];
   let array=Array.from(divsBox.children);

   let f1=array[0]as HTMLElement;
   let f2=array[1]as HTMLElement;
   let f3=array[2]as HTMLElement;

   let f6=array[6]as HTMLElement;
   let f7=array[7]as HTMLElement;
   let f8=array[8]as HTMLElement;

  if (f1.style.display === "none") {
    f1.style.display = "block";
  } else {
    f1.style.display = "none";
  }

  if (f2.style.display === "none") {
    f2.style.display = "block";
  } else {
    f2.style.display = "none";
  }

  if (f3.style.display === "none") {
    f3.style.display = "block";
  } else {
    f3.style.display = "none";
  }

  if (f6.style.display === "none") {
    f6.style.display = "block";
  } else {
    f6.style.display = "none";
  }

  if (f7.style.display === "none") {
    f7.style.display = "block";
  } else {
    f7.style.display = "none";
  }

  if (f8.style.display === "none") {
    f8.style.display = "block";
  } else {
    f8.style.display = "none";
  }
}

small(event:any){

  let divsBox=document.getElementsByClassName('container')[0];
  let array=Array.from(divsBox.children);

  let f3=array[3]as HTMLElement;
  let f4=array[4]as HTMLElement;
  let f5=array[5]as HTMLElement;

  let f9=array[9]as HTMLElement;
  let f10=array[10]as HTMLElement;
  let f11=array[11]as HTMLElement;

  let f12=array[12]as HTMLElement;
  let f13=array[13]as HTMLElement;
  let f14=array[14]as HTMLElement;

  if (f3.style.display === "none") {
    f3.style.display = "block";
  } else {
    f3.style.display = "none";
  }

  if (f4.style.display === "none") {
    f4.style.display = "block";
  } else {
    f4.style.display = "none";
  }

  if (f5.style.display === "none") {
    f5.style.display = "block";
  } else {
    f5.style.display = "none";
  }

  if (f9.style.display === "none") {
    f9.style.display = "block";
  } else {
    f9.style.display = "none";
  }

  if (f10.style.display === "none") {
    f10.style.display = "block";
  } else {
    f10.style.display = "none";
  }

  if (f11.style.display === "none") {
    f11.style.display = "block";
  } else {
    f11.style.display = "none";
  }


  if (f12.style.display === "none") {
    f12.style.display = "block";
  } else {
    f12.style.display = "none";
  }

  if (f13.style.display === "none") {
    f13.style.display = "block";
  } else {
    f13.style.display = "none";
  }

  if (f14.style.display === "none") {
    f14.style.display = "block";
  } else {
    f14.style.display = "none";
  }

}

rawFish(event:any){

  let divsBox=document.getElementsByClassName('container')[0];
  let array=Array.from(divsBox.children);

  let f1=array[0]as HTMLElement;
  let f4=array[4]as HTMLElement;
  let f13=array[13]as HTMLElement;

  let f5=array[5]as HTMLElement;


  if (f1.style.display === "none") {
    f1.style.display = "block";
  } else {
    f1.style.display = "none";
  }

  if (f4.style.display === "none") {
    f4.style.display = "block";
  } else {
    f4.style.display = "none";
  }


  if (f13.style.display === "none") {
    f13.style.display = "block";
  } else {
    f13.style.display = "none";
  }


  if (f5.style.display === "none") {
    f5.style.display = "block";
  } else {
    f5.style.display = "none";
  }

}


buyElement(event:any){
    event.preventDefault();
  let parent=event.currentTarget.parentElement.parentElement as HTMLElement;
  let children=parent.children;
  let arrayParents=Array.from(children);

  let imgParent=arrayParents[0]as HTMLElement;
  let image=imgParent.children[0]as HTMLElement;
  let img=`${image.getAttribute('src')}`;

  let src=img.substr(3,100);

  let textParent=arrayParents[1]as HTMLElement;

  let h1=textParent.textContent;


 let info=arrayParents[2]as HTMLElement;
 let infoChild=info.children[0]as HTMLElement;
 let p=infoChild.children[0]as HTMLElement;
  let text=`${p.textContent}`;

  let pPrice=text.substr(0,5)

 let pWeight=text.substr(9,4);


  let divInputs=arrayParents[4]as HTMLElement;
  let price=divInputs.children[4]as HTMLInputElement;
  let weight=divInputs.children[2]as HTMLInputElement;

  let arrays=[];

  if(price.value==='' && weight.value===''){

      arrays.push(src);
    arrays.push(h1);
      arrays.push(pPrice);
     arrays.push(pWeight);

     //this.route.navigate(['cart'],{queryParams:{data:arrays}})
    //this.sendData.emit(arrays)


    let object={
      image:arrays[0],
      name:arrays[1],
      price:arrays[2],
      weight:arrays[3],
      information:'',
      startedPrice:arrays[2],
      startedWeight:arrays[3]
    }

    this.service.postData(object).subscribe((res:any)=>{
      console.log(res)
    })

    let p=document.createElement('p');
    p.style.textAlign='center'
    p.style.fontSize='20px'
    p.textContent=`Added in the cart`;

    parent.appendChild(p)

  }else{
    arrays.push(src);
    arrays.push(h1);
    arrays.push(price.value);
    arrays.push(weight.value);
    arrays.push(pPrice);
    arrays.push(pWeight);

    let object={
      image:arrays[0],
      name:arrays[1],
      price:arrays[2],
      weight:arrays[3],
      information:'',
      startedPrice:arrays[4],
      startedWeight:arrays[5]
    }


    this.service.postData(object).subscribe((res:any)=>{

    })
    // this.route.navigate(['cart'],{queryParams:{data:arrays}})

    //this.sendData.emit(arrays)
    let p=document.createElement('p');
    p.style.textAlign='center'
    p.style.fontSize='20px'
    p.textContent=`Added in the cart`;

    parent.appendChild(p)
  }

}




}
