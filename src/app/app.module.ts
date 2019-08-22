import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { OrderComponent } from './order/order.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ErrorComponent } from './error/error.component';
import { ResetComponent } from './reset/reset.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { NotificationComponent } from './notification/notification.component';
import { SettingComponent } from './setting/setting.component';


const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'login', component: LoginComponent },
  {path: 'reset', component: ResetComponent },
  {path: 'dashboard', component: HomeComponent },
  {path: 'all-orders', component: OrderComponent },
  {path: 'add-product', component: AddproductComponent },
  {path: 'invoice', component: InvoiceComponent },
  {path: 'all-products', component: AllproductsComponent },
  {path: 'notification', component: NotificationComponent },
  {path: 'setting', component: SettingComponent },
  {path: '**', component: ErrorComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    OrderComponent,
    InvoiceComponent,
    ErrorComponent,
    ResetComponent,
    AddproductComponent,
    AllproductsComponent,
    NotificationComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
