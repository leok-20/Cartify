import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxStripeModule } from 'ngx-stripe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgIconsModule } from '@ng-icons/core';
import { featherSearch, featherUser, featherShoppingCart, featherSun, featherMoon } from '@ng-icons/feather-icons';

import { AppComponent } from './app.component';
import { NavbarComponent } from './utilities/navbar/navbar.component';
import { FooterComponent } from './utilities/footer/footer.component';
import { CheckoutComponent } from './utilities/checkout/checkout.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { GroceryComponent } from './pages/grocery/grocery.component';
import { StoresComponent } from './pages/stores/stores.component';
import { ItemComponent } from './pages/grocery/components/item/item.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'grocery', component: GroceryComponent },
  { path: 'stores', component: StoresComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CheckoutComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    GroceryComponent,
    StoresComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgbModule,
    NgxStripeModule.forRoot('***your-stripe-publishable-key***'),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    NgIconsModule.withIcons({ featherSearch, featherUser, featherShoppingCart, featherSun, featherMoon })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
