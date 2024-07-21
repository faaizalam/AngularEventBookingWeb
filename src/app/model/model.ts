export interface EventApi{
    message:String,
    result:boolean,
    data:any

}

export interface IEvent {
    eventId: number
    eventName: string
    startDate: string
    startTime: string
    endDate: string
    organizerName: string
    userId: number
    price: number
    location: string
    imageUrl: string
    organizerId:string
  }

  export class Register {
    UserId: number;
    Name: string;
    Email: string;
    Password: string;
    ContactNo: string;
    Role: string;
    constructor(){
        this.Name=""
        this.ContactNo=""
        this.Role=""
        this.Email=""
        this.UserId=0
        this.Password=""
    }
  }
  