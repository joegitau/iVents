import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';

import {
  AppRoutingModule,
  AppComponent,
  NavComponent,
  EventsListComponent,
  EventComponent,
  EventDetailsComponent,
  NotFoundComponent,
  CreateEventComponent
} from "./index";


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EventsListComponent,
    EventComponent,
    EventDetailsComponent,
    NotFoundComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
