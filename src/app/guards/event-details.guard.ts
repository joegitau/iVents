import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { DataService } from "../data.service";

@Injectable({
  providedIn: "root"
})
export class EventDetailsGuard implements CanActivate {
  constructor(private eventsService: DataService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const eventExists = !!this.eventsService.getEvent(+next.params["id"]);

    if (!eventExists) this.router.navigate(["/not-found"]);

    return eventExists;
  }
}
