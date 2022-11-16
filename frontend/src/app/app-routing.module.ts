import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {ContactWithUsComponent} from "./contact-with-us/contact-with-us.component";
import {HomeComponent} from "./home/home.component";
import {SushiComponent} from "./Menu/sushi/sushi.component";
import {DishesComponent} from "./Menu/dishes/dishes.component";
import {PizzaComponent} from "./Menu/pizza/pizza.component";
import {BurgersComponent} from "./Menu/burgers/burgers.component";
import {SaladsComponent} from "./Menu/salads/salads.component";
import {DesertsComponent} from "./Menu/deserts/deserts.component";
import {LiquidsComponent} from "./Menu/liquids/liquids.component";
import {LikeComponent} from "./like/like.component";
import {PrivacyPolicyComponent} from "./privacy-policy/privacy-policy.component";
import {MenupageComponent} from "./Menu/menupage/menupage.component";
import {PastaComponent} from "./Menu/pasta/pasta.component";
import {MenuBurgersComponent} from "./Menu/menu-burgers/menu-burgers.component";
import {MenuSaladsComponent} from "./Menu/menu-salads/menu-salads.component";
import {NonAlcoholicComponent} from "./Menu/non-alcoholic/non-alcoholic.component";
import {BeerComponent} from "./Menu/beer/beer.component";
import {WhiskeyComponent} from "./Menu/whiskey/whiskey.component";
import {WineComponent} from "./Menu/wine/wine.component";
import {CartComponent} from "./cart/cart.component";
import {MyProfileComponent} from "./my-profile/my-profile.component";
import {LogoutComponent} from "./logout/logout.component";
import {ForgetPasswordComponent} from "./forget-password/forget-password.component";
import {ChangePasswordsComponent} from "./change-passwords/change-passwords.component";


const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'pasta',component:PastaComponent},
  {path:'login',component:LoginComponent},
  {path:'contact-with-us',component:ContactWithUsComponent},
  {path:'home',component:HomeComponent},
  {path:'sushi',component:SushiComponent},
  {path:'dishes',component:DishesComponent},
  {path:'pizza',component:PizzaComponent},
  {path:'burgers',component:BurgersComponent},
  {path:'salads',component:SaladsComponent},
  {path:'deserts',component:DesertsComponent},
  {path:'liquids',component:LiquidsComponent},
  {path:'like',component:LikeComponent},
  {path:'privacy-policy',component:PrivacyPolicyComponent},
  {path:'menu/:id',component:MenupageComponent},
  {path:'menuBurgers/:id',component:MenuBurgersComponent},
  {path:'menuSalads/:id',component:MenuSaladsComponent},
  {path:'liquids/non-alcoholic',component:NonAlcoholicComponent},
  {path:'liquids/beer',component:BeerComponent},
  {path:'liquids/whiskey',component:WhiskeyComponent},
  {path:'liquids/wine',component:WineComponent},
  {path:'cart',component:CartComponent},
  {path:'logout',component:LogoutComponent},



  {path:'my-profile',component:MyProfileComponent},
  {path:'forget-password',component:ForgetPasswordComponent},
  {path:'change-passwords',component:ChangePasswordsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
