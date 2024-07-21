import { Component, inject, OnInit } from '@angular/core';
import { EventService } from '../../service/event.service';
import { EventApi, IEvent } from '../../model/model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  event=inject(EventService)
  eventList:IEvent[]=[]
  ngOnInit(): void {
    this.getEvents()
      
  }

  getEvents(){
    this.event.getAllEvents().subscribe((res:EventApi)=>{
      this.eventList=res.data

    })
  }

}
