import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponentForLab implements OnInit {
  counter:number
  constructor() {
    this.counter=0
   }

  ngOnInit() {
  }
  increase(){
    this.counter++
  }
  decrease(){
    this.counter--

  }
}
