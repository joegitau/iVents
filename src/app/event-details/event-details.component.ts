import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

import { DataService } from "../data.service";
import { switchMap } from 'rxjs/operators';

@Component({
  templateUrl: "./event-details.component.html",
  styleUrls: ["./event-details.component.scss"]
})
export class EventDetailsComponent implements OnInit {
  event: any;

  constructor(private events: DataService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // const id = +this.route.snapshot.params["id"]; // coreced into a number using '+'
    // this.events.fetchEvent(id).subscribe(event => (event = event));

   this.route.paramMap.subscribe( params => {
     let id = +params.get('id');
     this.events.fetchEvent(id).subscribe( event => this.event = event);

     console.log(id)
     console.log(this.event)
   });


  }
}
