import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-boardcast',
  templateUrl: './boardcast.component.html',
  styleUrls: ['./boardcast.component.css']
})
export class BoardcastComponent implements OnInit {

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
  }

  boardcast() {
    var text = 'This is a message';
    this.eventsService.broadcast('test', text);
  }

}
