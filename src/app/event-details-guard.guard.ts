import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class EventDetailsGuardGuard implements CanActivate {
  constructor(private eventsService: DataService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot): boolean {
      const eventExists = !!this.eventsService.fetchEvent(+next.paramMap.get('id'));

      if(!eventExists) {
        this.router.navigate(['not-found']);
        return false;
      }

      return true;
  }
}
