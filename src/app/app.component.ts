import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EventApi, Register } from './model/model';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { EventService } from './service/event.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clientOne';
  registerData:Register=new Register
  isLoginForm:boolean=true;
eventsServuce=inject(EventService)

  OpenPopUp() {
    const existData = document.getElementById("myModal");
    if (existData) {
      existData.style.display = "block"; // Show the modal
    }
  }

  ClosePopUp() {
    const existData = document.getElementById("myModal");
    if (existData) {
      existData.style.display = "none"; // Hide the modal
    }
  }
  isLoginFun(){
    if (this.isLoginForm) {
      this.isLoginForm=false
      
    }else{
      
      this.isLoginForm=true
    }

  }
  Register(){
    console.log("kk",this.registerData)
    this.eventsServuce.eventRegister(this.registerData).subscribe((res:EventApi)=>{
      if (res.result) {
        alert("logged in")
      }

    })
    
  }
}

