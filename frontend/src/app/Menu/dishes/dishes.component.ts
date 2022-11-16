import { Component, OnInit } from '@angular/core';
import {logExperimentalWarnings} from "@angular-devkit/build-angular/src/builders/browser-esbuild/experimental-warnings";

import {ApiserviceCargoService} from "../../apiservice-cargo.service";

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  divInformation:any;

  inputValue:any;


  inputWeightValue:any;
  inputPriceValue:any;

  weightNumber:any;
  priceNumber:any;

  result:any;
  res:any;


  constructor( private service:ApiserviceCargoService) { }

  ngOnInit(): void {
  }


  onlyOne(event:any){

     let inputs=document.querySelectorAll<HTMLElement>('.check')
    let array=Array.from(inputs)
    array.forEach((i:any)=>{
      i.addEventListener('click',function (e:any) {
        i.checked=true;
      })
      i.checked=false;
    })

    let input=event.currentTarget;
     this.inputValue=input.value;
     this.inputPriceValue=this.inputValue.substr(0,5)
    this.inputWeightValue=this.inputValue.substr(8,3);


  }

change(event:any){

  let div=event.currentTarget.parentElement.parentElement;

   let divAppend=document.querySelectorAll<HTMLElement>('.changePriceWeight')
  let ar=Array.from(divAppend);
   ar.forEach(dv=>{
     let key=dv.getAttribute('data-key');

     if(Number(event.currentTarget.getAttribute('data-key'))===Number(key)){
       dv.style.display='block';
       div.style.height='820px';
       let a=Array.from(dv.children)
       let inputWeight=a[2]as HTMLInputElement;
       let inputPrice=a[4]as HTMLInputElement;
       inputWeight.value=this.inputWeightValue;
       inputPrice.value=this.inputPriceValue;

       let text=document.querySelectorAll<HTMLElement>('.text')
       let ar=Array.from(text);
      ar.forEach((p:any)=>{
        let keys=p.getAttribute('data-key');

        if(Number(keys)===Number(key)){
          p.textContent=`${inputPrice.value}lv | ${inputWeight.value}gr`
        }

      })


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
      this.result=Number(this.weightNumber)+Number(this.inputWeightValue);

      iWeight.value=this.result;
      console.log(this.result)
    }
  })


  let priceInputs=document.querySelectorAll('.prices');
  let arrayPrice=Array.from(priceInputs);
  arrayPrice.forEach(iPrice=>{
    let priceI=iPrice as  HTMLInputElement;
    let dataKeyInputPrice=priceI.getAttribute('data-key');
    if(Number(dataKeyInputPrice)===Number(dataKey)){
      this.priceNumber=priceI.value;
      this.res=Number(this.priceNumber)+Number(this.inputPriceValue);
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
      this.result=Number(this.weightNumber)-Number(this.inputWeightValue);
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
      this.res=Number(this.priceNumber)-Number(this.inputPriceValue);
      priceI.value=this.res
    }
  })


}


info(event:any){


  let divParent=event.currentTarget.parentElement.parentElement;

    let array=[
      {dataKey:1,text:'Chicken steak with mushroom and mushroom sauce, baked potatoes with green onions.'},
      {dataKey: 2,text: 'Chicken leg pieces with carrots, fresh pepper, onion, garlic, green onion and mashed potatoes.'},
      {dataKey: 3,text: 'Chicken steak in crispy breading, with hollandaise sauce and baked potatoes with green onions.'},
      {dataKey: 4,text: 'Tender chicken drumsticks (3 pieces), barbecued vegetables (roasted mushrooms, carrots, zucchini, ' +
          'eggplant, red pepper (roasted peppers),potatoes flavored with oregano, rosemary, lemon, garlic, vegeta, salt and parsley).'},
      {dataKey: 5,text: 'Patterned pork meat with Asian marinade, sesame, coriander, green onion, mashed potatoes and black pepper sauce.'},
      {dataKey: 6,text: '7 pcs. Happy pork meatballs with spices, cheese and pepper, baked on a tuch with a garnish of Greek salad.'},
      {dataKey: 7,text: 'Crispy Alaskan whitefish fillet, seasoned roasted potatoes, spinach salad with quinoa, garlic sauce and lemons.'},
      {dataKey: 8,text: 'White fish fillet, roasted potatoes, roasted onions, creamy Alfredo sauce with garlic, parmesan and fennel.'},
      {dataKey: 9,text: 'Baked salmon fillet, barbecued vegetables (roasted mushrooms, carrots, zucchini, eggplant, red pepper (roasted peppers),' +
          ' potatoes flavored with oregano, rosemary, lemon, garlic, vegeta, salt and parsley).'}
    ]


  let div=document.querySelectorAll<HTMLElement>('.textInformation')
  let arr=Array.from(div)
   arr.forEach(d=>{
     let key=d.getAttribute('data-key');
     if(Number(event.currentTarget.getAttribute('data-key'))===Number(key)){
       console.log(d);
        this.divInformation=d;
     }
   })

  array.forEach(elements=>{

    if(elements.dataKey===Number(this.divInformation.getAttribute('data-key'))){
      let p=document.createElement('p')
      p.textContent=elements.text;
      p.style.textAlign='center'
      p.style.fontSize='17px'
      this.divInformation.append(p)
      divParent.style.height='820px';
    }

  })


}


buyElement(event:any) {
  event.preventDefault();

  let divParent = event.currentTarget.parentElement.parentElement as HTMLElement;
  let children = Array.from(divParent.children)
  console.log(children)

  let i = children[0] as HTMLElement;
  let img = i.children[0] as HTMLElement;
  let url = `${img.getAttribute('src')}`

  let link = url.substr(3, 100);

  let header = children[1] as HTMLElement;
  let text = header.textContent;

  let ulPrice = children[3] as HTMLElement;
  let prices = Array.from(ulPrice.children)
  let li = prices[1] as HTMLElement;
  let p = li.children[0] as HTMLElement;

  let textLI = `${p.textContent}`;

  let pPrice = textLI.substr(0, 5);
  let pWeight = textLI.substr(10, 3);

  let divChangePriceWeight = children[5] as HTMLElement;
  let div = Array.from(divChangePriceWeight.children)


  let inputPrice = div[2] as HTMLInputElement;
  let inputWeight = div[4] as HTMLInputElement;

  let object = {}


  if (inputPrice.value === '' && inputWeight.value === '' ) {

    alert('Choose garnish')


  }else if( inputPrice.value === 'undefined' && inputWeight.value === 'undefined'){
    alert('Choose garnish')
  }else {

     object={
      image:link,
      name:text,
      price:inputWeight.value,
      weight:inputPrice.value,
      information:text,
       startedPrice:pPrice,
       startedWeight:pWeight

    }

    this.service.postData(object).subscribe((res:any)=>{
      console.log(res)
    })

    let p=document.createElement('p')
    p.textContent='Added in the cart';
     p.style.textAlign='center';
     p.style.fontSize='20px';


     divParent.appendChild(p)

  }



  }

}
