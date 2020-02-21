import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { EventsListComponent } from "./events-list/events-list.component";
import { EventComponent } from "./event/event.component";
import { EventDetailsComponent } from './event-details/event-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreateEventComponent } from './create-event/create-event.component';

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
