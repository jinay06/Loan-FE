import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './module/core/components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { coreModule } from './module/core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './module/feature/home/home.component';
import { BlogcompoComponent } from './module/feature/blogcompo/blogcompo.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogcompoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    coreModule,
    MatSlideToggleModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
