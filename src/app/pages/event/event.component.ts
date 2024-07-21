import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../service/event.service';
import { Observable } from 'rxjs';
import { IEvent } from '../../model/model';
import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [AsyncPipe,CommonModule,DatePipe],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
  eventList:IEvent[]=[]
  isFetching:boolean=false
  activatedRoute=inject(ActivatedRoute)
  eventService=inject(EventService)
  EventData$:Observable<IEvent>=new Observable<IEvent>;
  Events$:Observable<IEvent[]>=new Observable<IEvent[]>;
  constructor(){
    this.activatedRoute.params.subscribe((res:any)=>{
      this.isFetching=true
      this.EventData$=this.eventService.getEventById(res.id)
      this.EventData$.subscribe((res:IEvent)=>{
        this.Events$=this.eventService.getEventByOrganizer(res.organizerId)
        this.isFetching=false

      })

    })
  }

  // getEventmyById(id:number){
  //   this.eventService.getEventById(id).subscribe((res:any)=>{
  //     console.log(res.data,"kk")

  //   })
  // }


}
