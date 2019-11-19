import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UIRouterModule } from '@uirouter/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalFormComponent } from './modal-form/modal-form.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
const STATES = [
  { name: 'orders', url: '/orders', component: OrderDetailComponent },
  { name: 'login', url: '/login', component: LoginComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrderDetailComponent,
    ModalFormComponent,
    DeleteModalComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UIRouterModule.forRoot({ states: STATES })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
  ModalFormComponent,
  DeleteModalComponent
]
})
export class AppModule { }
