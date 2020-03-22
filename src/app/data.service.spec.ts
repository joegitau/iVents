import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { IEvent } from "./event.model";
import { DataService } from "./data.service";
import { of } from "rxjs";

fdescribe("DataService", () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });

    service = TestBed.inject(DataService);
  });

  it("should fetch Events", done => {
    const mockEvents: IEvent[] = [
      {
        id: 1,
        name: "Name",
        price: 14,
        date: "22.05.2020",
        imageUrl: "https://via.placeholder.com/150"
      }
    ];

    spyOn(service, "fetchEvents").and.returnValue(of(mockEvents));

    service.fetchEvents().subscribe(events => {
      expect(events).toEqual(mockEvents);

      done();
    });
  });

  it("should fetch an Event via GET", done => {
    const mockEvent: IEvent = {
      id: 1,
      name: "Name",
      price: 14,
      date: "22.05.2020",
      imageUrl: "https://via.placeholder.com/150"
    };

    spyOn(service, "getEvent").and.returnValue(of(mockEvent));

    service.getEvent(1).subscribe(event => {
      expect(event).toEqual(mockEvent);

      done();
    });
  });
});
