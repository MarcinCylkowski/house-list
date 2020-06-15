import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MainService } from './main.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
