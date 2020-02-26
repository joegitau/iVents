import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

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
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
