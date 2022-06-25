import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page/page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; 
import { FlatService } from './services/flat.service';
import { UserService } from './services/user.service';
import { ToastrModule } from 'ngx-toastr';
import { NotificationService } from './services/notification.service';
@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [FlatService,UserService,NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
