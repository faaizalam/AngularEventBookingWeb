import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventApi, IEvent, Register } from '../model/model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {

getEventApi: String="https://freeapi.miniprojectideas.com/api/EventBooking/GetAllEvents"
getEventApiById: String="https://freeapi.miniprojectideas.com/api/EventBooking/GetEventById"
getEventByOragnizer: String="https://freeapi.miniprojectideas.com/api/EventBooking/GetEventsByOrganizer"
getEventApiRegister: String="https://freeapi.miniprojectideas.com/api/EventBooking/CreateUser"
constructor(private http:HttpClient) { }

  getAllEvents(){
    return this.http.get<EventApi>(`${this.getEventApi}`)
  }

  getEventById(id:number){
    return this.http.get<IEvent>(`${this.getEventApiById}?id=${id}`).pipe(
      map((item:any)=>{
        return item.data
        
      })
    )
  }
  getEventByOrganizer(id:any){
    return this.http.get<IEvent>(`${this.getEventByOragnizer}?organizerId=${id}`).pipe(
      map((item:any)=>{
        return item.data
  
      })
    )
  }
eventRegister(data:Register){
  return this.http.post<EventApi>(`${this.getEventApiRegister}`,data)
}

}
