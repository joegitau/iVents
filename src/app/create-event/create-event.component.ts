<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

=======
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
>>>>>>> 24bfe95881eec453be3dadde2b3a489f2822e298

@Component({
  selector: "app-create-event",
  templateUrl: "./create-event.component.html",
  styleUrls: ["./create-event.component.scss"]
})
export class CreateEventComponent implements OnInit {
  constructor(private router: Router) {}

<<<<<<< HEAD
  constructor(private router: Router) { }
=======
  ngOnInit(): void {}
>>>>>>> 24bfe95881eec453be3dadde2b3a489f2822e298

  cancelEventCreation() {
    return this.router.navigate(["/events"]);
  }
<<<<<<< HEAD

  cancelEventCreation() {
    this.router.navigate(['/events'])
  }
=======
>>>>>>> 24bfe95881eec453be3dadde2b3a489f2822e298
}
