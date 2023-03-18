import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { UsersComponent } from './components/users/users.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsModule } from './components/products/products.module';
import { AuthModule } from './components/auth/auth.module';
import { UsersModule } from './components/users/users.module';
import { HttpClientModule } from '@angular/common/http';
import { OrdersService } from './services/orders.service';
import { UpdateorderComponent } from './components/orders/updateorder/updateorder.component';
import { AddordersComponent } from './components/orders/addorders/addorders.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    OrdersComponent,
    SideNavbarComponent, 
    NotFoundComponent, UpdateorderComponent, AddordersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    AuthModule,
    UsersModule,
    HttpClientModule
  ],
  providers: [OrdersService],  //we dont have orders.module.ts file, so we are adding ordersService to app.module.ts
  bootstrap: [AppComponent]
})
export class AppModule { }
