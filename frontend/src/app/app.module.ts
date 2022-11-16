import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactWithUsComponent } from './contact-with-us/contact-with-us.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { SushiComponent } from './Menu/sushi/sushi.component';
import { DishesComponent } from './Menu/dishes/dishes.component';
import { PizzaComponent } from './Menu/pizza/pizza.component';
import { PastaComponent } from './Menu/pasta/pasta.component';
import { BurgersComponent } from './Menu/burgers/burgers.component';
import { SaladsComponent } from './Menu/salads/salads.component';
import { DesertsComponent } from './Menu/deserts/deserts.component';
import { LiquidsComponent } from './Menu/liquids/liquids.component';
import { LikeComponent } from './like/like.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MenupageComponent } from './Menu/menupage/menupage.component';
import { MenuBurgersComponent } from './Menu/menu-burgers/menu-burgers.component';
import { MenuSaladsComponent } from './Menu/menu-salads/menu-salads.component';
import { NonAlcoholicComponent } from './Menu/non-alcoholic/non-alcoholic.component';
import { BeerComponent } from './Menu/beer/beer.component';
import { WineComponent } from './Menu/wine/wine.component';
import { WhiskeyComponent } from './Menu/whiskey/whiskey.component';
import { CartComponent } from './cart/cart.component';



import {HttpClientModule} from "@angular/common/http";
import {ApiserviceCargoService} from "./apiservice-cargo.service";
import {ApiserviceUsersService} from "./apiservice-users.service";
import { MyProfileComponent } from './my-profile/my-profile.component';
import { LogoutComponent } from './logout/logout.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ChangePasswordsComponent } from './change-passwords/change-passwords.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ContactWithUsComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SushiComponent,
    DishesComponent,
    PizzaComponent,
    PastaComponent,
    BurgersComponent,
    SaladsComponent,
    DesertsComponent,
    LiquidsComponent,
    LikeComponent,
    PrivacyPolicyComponent,
    MenupageComponent,
    MenuBurgersComponent,
    MenuSaladsComponent,
    NonAlcoholicComponent,
    BeerComponent,
    WineComponent,
    WhiskeyComponent,
    CartComponent,
    MyProfileComponent,
    LogoutComponent,
    ForgetPasswordComponent,
    ChangePasswordsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiserviceCargoService,ApiserviceUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
