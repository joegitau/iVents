import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { EventsListComponent } from "./events-list/events-list.component";
import { EventDetailsComponent } from "./event-details/event-details.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { CreateEventComponent } from "./create-event/create-event.component";
import { EventDetailsGuard } from "./guards/event-details.guard";
import { EventsResolver } from "./events.resolver";

const routes: Routes = [
  { path: "events/create", component: CreateEventComponent },
  {
    path: "events",
    component: EventsListComponent,
    resolve: { events: EventsResolver }
  },
  {
    path: "events/:id",
    component: EventDetailsComponent,
    canActivate: [EventDetailsGuard]
  },
  { path: "", redirectTo: "/events", pathMatch: "full" },
  { path: "user", loadChildren: "./user/user.module#UserModule" },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
