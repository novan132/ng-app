import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { MessageDetailsComponent } from './message-details/message-details.component';
import { FirstServService } from './services/first-serv.service';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [AppComponent, FirstCompComponent, MessageDetailsComponent, MenuComponent, AboutComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [FirstServService],
  bootstrap: [AppComponent],
})
export class AppModule {}
