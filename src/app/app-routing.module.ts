import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { EventsListComponent } from "./events-list/events-list.component";
import { EventDetailsComponent } from "./event-details/event-details.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  { path: "events", component: EventsListComponent },
  { path: "events/:id", component: EventDetailsComponent },
  { path: "", redirectTo: "/events", pathMatch: "full" },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
