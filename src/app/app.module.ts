import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientService} from "./services/cache/http-client.service";
import {CacheService} from "./services/cache/cache.service";
import { HeaderComponent } from './components/patterns/header/header.component';
import {LoginComponent} from "./pages/login/login.component";
import { JedisComponent } from './pages/jedis/jedis.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    LoginComponent,
    JedisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClientService,
    CacheService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
