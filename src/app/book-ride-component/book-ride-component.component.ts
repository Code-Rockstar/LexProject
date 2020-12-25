import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-book-ride-component',
  templateUrl: './book-ride-component.component.html',
  styleUrls: ['./book-ride-component.component.css']
})
export class BookRideComponentComponent implements OnInit {
  ride:any[]=[
  {id:1,offerid:"A",name:"Namo",car:"Audi",seatsLeft:4,pickUp:"MOhali",Destination:"Delhi"},
  {id:2,offerid:"B",name:"Vikash",car:"Maruti 800",seatsLeft:6,pickUp:"Delhi",Destination:"Patna"},
  {id:3,offerid:"C",name:"Kumar",car:"Ford",seatsLeft:5,pickUp:"Pune",Destination:"Nagpur"},
  {id:4,offerid:"D",name:"Sharma",car:"Swift",seatsLeft:6,pickUp:"Surat",Destination:"Delhi"}
  ]
  showRide:boolean=false
  hover:string='hovering'
  constructor() { }

  ngOnInit(): void {
  }
  Ride(){
    this.showRide=!this.showRide
  }
}
